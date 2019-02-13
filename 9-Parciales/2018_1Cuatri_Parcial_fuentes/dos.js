// alert ("el precio del producto en efectivo es  :$ xxx , con tarjeta tiene un recargo del 10% que seria $xx de recargo, costandole final $xx"
{
	var precio;
	var recargo;
	var precioFinal;

	precio=precio.value;
	recargo=recargo.value;
	precioFinal=precioFinal.value;

	precio=parseInt(precio);
	recargo=parseInt(recargo);
	precioFinal=parseInt(precioFinal);

	recargo=precio*0.1;
	precioFinal=precio+recargo;

	alert("El precio del producto en efectivo es" +precio+ ", con tarjeta tiene un recargo del 10% que seria" +recargo+ "costandole final" +precioFinal);





}
