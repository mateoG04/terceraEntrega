const eliminarProducto = () => {
    const foundId = carrito.find((Element) => Element.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });

    carritoCounter();
    saveLocal();
    pintarCarrito();
};