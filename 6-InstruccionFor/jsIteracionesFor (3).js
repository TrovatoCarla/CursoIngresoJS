function mostrar()
{

//var repetciones = prompt("ingrese el número de repeticiones");

	var numeroIngresado;
	var numeroPerfecto;
	var acumulador;

	numeroIngresado=prompt("Ingrese numero");
	numeroIngresado=parseInt(numeroIngresado);

	for(recorrido=numeroIngresado-1;recorrido>1;recorrido--)// este recorre todos los numeros!
	{		
		for(numeroAnterior=recorrido-1;numeroAnterior>0;numeroAnterior--)// este me saca el numero perfecto!
		{
			//console.log(numeroAnterior);
			if(numeroIngresado% numeroAnterior==0)
			{
				acumulador=acumulador+numeroAnterior;
			}

		}

		if(numeroIngresado==acumulador)
		 {
	 		console.log("Es perfecto" +numeroIngresado);
		 }
		
	}


}//FIN DE LA FUNCIÓN