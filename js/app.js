let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const productos = [new Producto(1,"monkeyPrince", "ovni", 1000,1),new Producto(2,"figurashazam", "panini", 3000,1),new Producto(3,"funkopop", "pop", 5000,1),new Producto(4,"funkopop spiderman", "pop", 4000,1),new Producto(5,"funda", "ovni", 300,1),new Producto(6,"taza", "bandai", 2500,1),new Producto(7,"libro1", "salvat", 3600,1),new Producto(8,"libro2", "salvat", 4000,1)]

const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");
const boton4 = document.getElementById("boton4");
const boton5 = document.getElementById("boton5");
const boton6 = document.getElementById("boton6");
const boton7 = document.getElementById("boton7");
const boton8 = document.getElementById("boton8");

boton1.addEventListener("click",() => {
    const producto = productos.find((Item)=> {
       return Item.id === +boton1.dataset.id
    });
    carrito.push(producto);
    mostrarCarrito();
    saveLocal();
});

boton2.addEventListener("click",() => {
    const producto = productos.find((Item)=> {
       return Item.id === +boton2.dataset.id
    });
    carrito.push(producto);
    mostrarCarrito();
    saveLocal();
});

boton3.addEventListener("click",() => {
    const producto = productos.find((Item)=> {
       return Item.id === +boton3.dataset.id
    });
    carrito.push(producto);
    mostrarCarrito();
    saveLocal();
});

boton4.addEventListener("click",() => {
    const producto = productos.find((Item)=> {
       return Item.id === +boton4.dataset.id
    });
    carrito.push(producto);
    mostrarCarrito();
    saveLocal();
});

boton5.addEventListener("click",() => {
    const producto = productos.find((Item)=> {
       return Item.id === +boton5.dataset.id
    });
    carrito.push(producto);
    mostrarCarrito();
    saveLocal();
});

boton6.addEventListener("click",() => {
    const producto = productos.find((Item)=> {
       return Item.id === +boton6.dataset.id
    });
    carrito.push(producto);
    mostrarCarrito();
    saveLocal();
});

boton7.addEventListener("click",() => {
    const producto = productos.find((Item)=> {
       return Item.id === +boton7.dataset.id
    });
    carrito.push(producto);
    mostrarCarrito();
    saveLocal();
});

boton8.addEventListener("click",() => {
    const producto = productos.find((Item)=> {
       return Item.id === +boton8.dataset.id
    });
    carrito.push(producto);
    mostrarCarrito();
    saveLocal();
});

function mostrarCarrito() {
    const tabla = document.getElementById('producto');
    tabla.innerHTML = ``;
    let counter = 1;
  
    carrito.forEach((producto) => {
      tabla.innerHTML += `
        <tr>
          <th>${counter}<th>
          <td>${producto.nombre}<td>
          <td>${producto.editorial}<td>
          <td>${producto.cantidad}<td>
          <td>${producto.precio}<td>
        <tr>
      `;
      counter++;
    })
    tr = document.createElement('tr');
    tr.innerHTML = `<th><th>
                      <td><td>
                      <td><td>
                      <td><td>
                      <td><td>
                      <td><td>
                      <td><td>
                      <td>${carrito.reduce((total,item) => total + item.precio,0)}<td>
                      `;
      tabla.appendChild(tr);
}

const saveLocal = ()  => {
localStorage.setItem("carrito", JSON.stringify(carrito));
};

