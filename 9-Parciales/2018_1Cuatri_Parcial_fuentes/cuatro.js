// al realizar una compra, si compra de mas de dos productos se realiza un descuento de 10% y si supera los $ 2000 se agrega descuento adicional de 15%, si el pago es con tarjeta y no efectivo al precio final se le agrega un 10% de recargo
{
	//defino variables
	var cantidad;
	var importe;
	var tipoDePago;
	
	// tomo los datos
	cantidad= prompt("ingrese cantidad");
	importe= prompt("ingrese importe");	
	tipo= prompt("ingrese tipo de pago 1- efete 2- tarjeta");

	// parseint para los necesarios
	cantidad= parseInt(cantidad);
	importe= parseInt(importe);

	if(productos>2)
	{
		importe = importe*0.9;
		if(importe>2000)
		{
			importe = importe*0.85;
		}
	}	
	
	if(tipoDePago=="2")
	{
		importe=importe*1.1;
	}	
	alert( "el importe es"+ importe);


}
