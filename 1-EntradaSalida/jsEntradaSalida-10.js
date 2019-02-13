/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importeUno;
	var importeConAumento;
	var aumento;


	importeUno=document.getElementById('importe').value;

	importeUno=parseInt(importe);

	importeUno= sueldo*1.25;

	importeConAumento=sueldo+aumento;

	document.getElementById('resultado').value=importeConAumento;
	
}
