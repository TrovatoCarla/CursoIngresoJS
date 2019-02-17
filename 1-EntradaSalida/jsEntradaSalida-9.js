/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var aumento;
	var sueldoConAumento;

	sueldo=document.getElementById('sueldo').value;

	sueldo=parseInt(sueldo);

	aumento=sueldo*0.1;
	sueldoConAumento=sueldo+aumento;

	document.getElementById('resultado').value=sueldoConAumento;



//El igual va al final porque quiero plasmar en el html lo generado en javascript, en este caso sueldoConAumento

}
