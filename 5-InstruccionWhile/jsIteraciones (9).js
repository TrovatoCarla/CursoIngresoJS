function mostrar()
{

	var contador=0;
	// declarar variables
	var numero;
	var maximo;
	var minimo;
	var respuesta='si';
	var cantidad=0;

	while(respuesta!='no')
	{
		numero=prompt("Ingrese un numero");
		if(cantidad== 0)
		{
			maximo=numero;
			minimo=numero;
		}
		else
		{
			if(numero>maximo)
			{
				maximo=numero;
			}
			if(numero<minimo)
			{
				minimo=numero;
			}
		}
		cantidad++;
		respuesta=prompt("Desea ingresar otra respuesta");

	}
	document.getElementById('minimo').value=minimo;
	document.getElementById("maximo").value=maximo;



}//FIN DE LA FUNCIÓN