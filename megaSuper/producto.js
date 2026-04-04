export class Producto {

    constructor(nombre, categoria){
        this.nombre = nombre
        this.categoria = categoria
    }
}

export const cocaCola = new Producto("CocaCola", "Bebida")
export const pepsi = new Producto("Pepsi", "Bebida")
export const caramelo = new Producto("Caramelo", "Dulce")
export const galleta = new Producto("Galleta","Snack")
export const prodTeclado = new Producto("Teclado Mecánico", "Electrónica");
export const prodRaton = new Producto("Ratón Inalámbrico", "Electrónica")