
 function mostrar ()
{
	var ancho;
	var largo;
	var perimetro;

	ancho=prompt("Indique el ancho");
	ancho=parseInt(ancho);

	largo=prompt("Indique el largo");
	largo=parseInt(largo);

	perimetro=(largo+ancho)*2;

	alert("El perimetro del rectangulo es :" +perimetro);

}
