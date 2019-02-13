function mostrar()
{
var precio;
var descuento;
var precioConDescuento;

precio=prompt("Por favor indique el precio");
descuento=prompt("Ahora indique el porcentaje de descuento");

precio=parseInt(precio);
descuento=parseInt(descuento);

precioConDescuento=precio*descuento/100+precio;

document.getElementById('elPrecioFinal').value=precioConDescuento;



}
