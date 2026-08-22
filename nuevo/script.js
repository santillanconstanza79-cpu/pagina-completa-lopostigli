function moverCarrusel(direccion) {

    const contenedor = document.querySelector(".contenedor");
    const tarjeta = document.querySelector(".card");

    const espacio = tarjeta.offsetWidth + 25;

    contenedor.scrollBy({
        left: direccion * espacio,
        behavior: "smooth"
    });
}

function cambiarCantidad(valor) {

    const cantidad = document.getElementById("cantidad");

    let numero = Number(cantidad.value);

    numero = numero + valor;

    if (numero < 1) {
        numero = 1;
    }

    cantidad.value = numero;
}


function agregarAlCarrito() {

    const cantidad = Number(
        document.getElementById("cantidad").value
    );

    const producto = {
        nombre: "Selva Negra",
        precio: 18000,
        cantidad: cantidad
    };


    let carrito = JSON.parse(
        localStorage.getItem("carrito")
    ) || [];


    const productoExistente = carrito.find(
        item => item.nombre === producto.nombre
    );


    if (productoExistente) {

        productoExistente.cantidad += cantidad;

    } else {

        carrito.push(producto);

    }


    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );


    alert("¡Producto agregado al carrito! 🛒");
}