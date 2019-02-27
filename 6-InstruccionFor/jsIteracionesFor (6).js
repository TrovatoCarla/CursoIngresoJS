function mostrar()
{
	var incremento=2;
	var numIngresado;
	var contador=0;

	numIngresado=prompt("Ingrese numero");
	numIngresado=parseInt(numIngresado);

	for(;incremento<=numIngresado;contador++)
	{
		alert(incremento);
		incremento=incremento+2;
	}

	alert("La cantidad de numeros pares encontrados es :" +contador);

}//FIN DE LA FUNCIÓN