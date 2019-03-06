
 function mostrar ()
{
	var ancho;
	var largo;
	var perimetro;

	ancho=prompt("Indique el ancho del rectangulo");
	largo=prompt("Ahora el largo");

	ancho=parseInt(ancho);
	largo=parseInt(largo);

	perimetro=(ancho+largo)*2;

	alert("El perimetro es: " +perimetro);

}
