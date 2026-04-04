import * as descuento from "./descuento.js"
import * as producto from "./producto.js"

export class Carrito {
    constructor(){
        this.articulos = []
    }

    addProducto(articulo){
        this.articulos.push(articulo)
    }

    mostrar(){
        console.log(this.articulos)
    }
    
    //Sumar los articulo.precio de una lista de articulos con reduce
    precioBaseTotal(){
        const precioBaseTotal = this.articulos.reduce((precioAcumulado, articulo) =>{
            return precioAcumulado + articulo.precioBaseTotal()
        }, 0)
        return precioBaseTotal
    }

    precioFinal(){
        const precioFinal = this.articulos.reduce((precioAcumulado, articulo) =>{
            return precioAcumulado + articulo.precioFinal()
        }, 0)

        return precioFinal
    }

    //Sin descuentos
    productoMasCaro(){
        let articuloMasCaro
        const precioMasCaro = this.articulos.reduce((precioMayor,articulo) => {
            if(precioMayor < articulo.precio)
            {
                articuloMasCaro = articulo
                return articulo.precio
            }else
                return precioMayor
        }, 0)

        return articuloMasCaro
    }
    
    //Con Descuentos
    productoFinalMasCaro(){
        let articuloMasCaro
        let precioFinal 
        const precioMasCaro = this.articulos.reduce((precioMayor,articulo) => {
            precioFinal = articulo.precioFinal()
            if(precioMayor < precioFinal)
            {
                articuloMasCaro = articulo
                return precioFinal
            }else
                return precioMayor
        }, 0)

        return articuloMasCaro
    }

    articulosConPrecioFinalMenorA(monto){
        const articulosQueCumplen = this.articulos.filter(articulo => articulo.precioFinal() <= monto)
        return articulosQueCumplen
    }

    listaOrdenada(){
        return this.articulos.sort((a, b) => a.precio - b.precio)
    }
}


export class ArticuloCarrito {
    constructor(producto, precio, cantidad){
        this.producto = producto
        this.cantidad = cantidad
        this.precio = precio
        this.descuentos = []
    }

    precioBaseTotal(){
        return this.cantidad * this.precio
    }
    
    //recorro lista de descuentos -> aplico descuento -> sumar precio acumulado
    precioFinal(){
        const precioFinal = this.descuentos.reduce((precioAcumulado, descuento) => {
            return precioAcumulado - descuento.valorDescontado(this)
        }, this.precioBaseTotal())

        return Math.max(precioFinal,0)
    }

    addDescuento(descuento){
        this.descuentos.push(descuento)
    }

    aumentarPrecio(aumento){
        this.precio += aumento
    }
    
}

export const itemTeclado = new ArticuloCarrito(producto.prodTeclado, 100, 2);
export const itemRaton = new ArticuloCarrito(producto.prodRaton, 50, 1);  

itemTeclado.addDescuento(descuento.descuentoVientePorciento);
itemRaton.addDescuento(descuento.cuponDiezDolares);

