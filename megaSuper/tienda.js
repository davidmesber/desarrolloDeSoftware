import * as producto from "./producto.js"
import * as carrito from "./carrito.js"

//Tendría más sentido que el catálogo guarde artículos para saber la cantidad y precio que hay en stock, pero tomemoslo como
//un listado de los productos que suele vender la tienda. Si es un kiosco, puede vender pepsi pero no manaos, por ejemplo.
export const tienda = {
    catalogo : [producto.caramelo, producto.cocaCola, producto.galleta, producto.pepsi, producto.prodRaton, producto.prodTeclado],

    addProducto(producto){
        this.catalogo.push(producto)
    },

    mostrarCatalogo(){
        console.log("Productos Disponibles: ")
        console.log(this.catalogo)
    },

    buscarPorCategoria(categoria){
        const productosQueCumplen = this.catalogo.filter(producto => producto.categoria === categoria)
        return productosQueCumplen
    }
}

tienda.mostrarCatalogo()
//console.log(tienda.buscarPorCategoria("Bebida"))
console.log(carrito.itemRaton)
//carrito.itemRaton.aumentarPrecio(20)
//console.log(carrito.itemRaton)
