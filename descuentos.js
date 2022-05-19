const precioOriginal = 120;
const descuento = 18;

 /*
console.log({
     precioOriginal,
     descuento,
     porcentajePrecioConDescuento,
     precioConDescuento,
 });*/

 function calcularPrecioCOnDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
 }