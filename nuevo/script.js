function moverCarrusel(direccion) {

    const contenedor = document.querySelector(".contenedor");
    const tarjeta = document.querySelector(".card");

    if (!contenedor || !tarjeta) {
        return;
    }

    const espacio = tarjeta.offsetWidth + 25;

    contenedor.scrollBy({
        left: direccion * espacio,
        behavior: "smooth"
    });
}
