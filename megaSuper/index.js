//import * as domain from "./domain.js"
import * as carrito from "./carrito.js"
import * as producto from "./producto.js"

const miCarrito = new carrito.Carrito();
miCarrito.addProducto(carrito.itemTeclado);
miCarrito.addProducto(carrito.itemRaton);

console.log("--- Resumen de la Compra ---");
miCarrito.mostrar();

console.log("Precio Base Total (Sin descuentos): $" + miCarrito.precioBaseTotal()); 
// Debería ser 250 (200 del teclado + 50 del ratón)

console.log("Precio Final (Con descuentos): $" + miCarrito.precioFinal()); 
// Debería ser 200 (160 del teclado + 40 del ratón)

console.log("Producto mas caro del carrito: " + miCarrito.productoMasCaro().producto.nombre + " a $" + miCarrito.productoMasCaro().precio + "c/u (SIN descuentos)")
console.log("Producto mas caro del carrito: " + miCarrito.productoFinalMasCaro().producto.nombre + " a $" + (miCarrito.productoFinalMasCaro().precioFinal()) / (miCarrito.productoFinalMasCaro().cantidad) + "c/u (CON descuentos)")

console.log(miCarrito.articulosConPrecioFinalMenorA(100))

//console.log(miCarrito.listaOrdenada())