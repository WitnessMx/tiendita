const carro = new Carrito();
const carrito = document.getElementById('carrito');
const productos = document.getElementById('lista-productos');
const listaProductos = document.querySelector("#lista-de-carrito tbody"); //lista de productos en el carrito
const vaciarCarritoBtn= document.getElementById('vaciar-carrito');
const procesarPedidoBtn=document.getElementById('procesar-pedido');

cargarEventos();

console.log(listaProductos);
function cargarEventos(){
    //Se ejecuta cuando se presionar agregar carrito
    productos.addEventListener('click', (e)=>{carro.comprarProducto(e)});

      carrito.addEventListener('click', (e)=>{carro.eliminarProducto(e)});
    //Al vaciar carrito
    vaciarCarritoBtn.addEventListener('click', (e)=>{carro.vaciarCarrito(e)});
}
