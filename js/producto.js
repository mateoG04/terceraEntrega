class Producto {
    nombre;
    editorial;
    cantidad;
    precio;
    id;

    constructor(id, nombre, editorial, cantidad, precio) {
        this.id = id;
        this.nombre = nombre;
        this.editorial = editorial;
        this.cantidad = cantidad;
        this.precio = precio;
    }

    subtotal = () => {
        return this.precio*this.cantidad;
    }
}
