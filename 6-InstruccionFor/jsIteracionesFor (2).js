function mostrar()
{
	var numeroIngresado;
	var numeroAnterior;

	numeroIngresado=prompt("Ingrese numero");
	numeroIngresado=parseInt(numeroIngresado);

	for(recorrido=numeroIngresado-1;recorrido>1;recorrido--)
	{
		for(numeroAnterior=recorrido-1;numeroAnterior>1;numeroAnterior--)
		{
			//console.log(numeroAnterior);
			if(recorrido% numeroAnterior==0)
			{
				break;
			}

		}

	if(numeroAnterior==1)
	 {
	 		console.log("Es primo" +recorrido);
	 }
		
	}



	 

	 	/*else
	 	{
	 		console.log("Es primo");
	 	}*/
	 
}