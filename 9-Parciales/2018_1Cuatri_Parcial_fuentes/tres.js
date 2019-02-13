function mostrar()
{
var precio;
var descuento;
var precioConDescuento;

precio=prompt("Por favor indique el precio");
descuento=prompt("Ahora indique el porcentaje de descuento");

precio=parseInt(precio);
descuento=parseInt(descuento);

descuento=precio*descuento/100;
precioConDescuento=precio-descuento;


document.getElementById('elPrecioFinal').value=precioConDescuento;




}
