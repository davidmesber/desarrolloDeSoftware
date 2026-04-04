//NO EXISTEN LAS CLASES ABSTRACTAS EN JS
export class DescuentoFijo {
    constructor(valor){
        this.valor = valor
    }
    
    valorDescontado(_articulo){
        return this.valor
    }
}

export class DescuentoPorcentual {
    constructor(porcentaje){
        this.porcentaje = porcentaje
    }

    valorDescontado(articulo){
        return (articulo.precioBaseTotal() * this.porcentaje) / 100
    }
}

export const cuponDiezDolares = new DescuentoFijo(10); 
export const descuentoVientePorciento = new DescuentoPorcentual(20);