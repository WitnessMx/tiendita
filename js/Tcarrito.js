class Carrito {
    //añadir producto al carrito
    comprarProducto(e){
        e.preventDefault();
        
        if(e.target.classList.contains('agregar-carrito')){
            const producto= e.target.parentElement.parentElement.parentElement.parentElement.parentElement;console.log(producto);

            this.leerDatosProducto(producto);
        }

    }
    leerDatosProducto(producto){
        const infoProducto={
            imagen: producto.querySelector('img').src,
            titulo: producto.querySelector('.un_producto th').textContent,
            precio: producto.querySelector('.precio span').textContent,
            id: producto.querySelector('input').getAttribute('data-id'),
            cantidad: 1
        }
       //console.log(infoProducto);
        this.insertarCarrito(infoProducto);
    }

    insertarCarrito(producto){
        const row=document.createElement('tr');
        console.log(row);
        row.innerHTML = `
            <td>
                    <img src="${producto.imagen}" width=100>
                </td>
                <td>${producto.titulo}</td>
                <td class="precio-sel">${producto.precio}</td>
                <td>
                    <a href="#" class="borrar-producto" data-id="${producto.id}">quitar</a>
            </td>
        `;
        listaProductos.appendChild(row);
      this.mostrarTotal(listaProductos);
        
    }

    mostrarTotal(listaProductos){
        let total=0;
        let most_total=document.getElementById("total-pendiente");
       
        for (let i = 0; i < listaProductos.querySelectorAll(".precio-sel").length; i++) {
            let precio_producto=0;
            precio_producto=parseFloat(listaProductos.querySelectorAll(".precio-sel")[i].innerHTML)
            total=(total+precio_producto)*1;

        } 
        most_total.innerHTML="$" + total
        console.log(total);
    }

    eliminarProducto(e){
        e.preventDefault();
        let producto, productoID;
        console.log(e.target.classList);
        if(e.target.classList.contains('borrar-producto')){
            console.log(e.target.parentElement.parentElement.remove());

            this.mostrarTotal(listaProductos);
        }
    }

    vaciarCarrito(e){
        e.preventDefault();
        while(listaProductos.firstChild){
            listaProductos.removeChild(listaProductos.firstChild);
        }
        this.mostrarTotal(listaProductos);
        return false;
    }
}