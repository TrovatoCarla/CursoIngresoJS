function mostrar()
{	
	var precio;
	var descuento;
	var finalConDescuento;

	precio=prompt("Indique el precio");
	precio=parseInt(precio);

	descuento=prompt("Indique el descuento");
	descuento=parseInt(descuento);

	descuento=precio*descuento/100;
	finalConDescuento=precio-descuento;

	document.getElementById('elPrecioFinal').value=finalConDescuento;

}
