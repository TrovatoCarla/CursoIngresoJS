function mostrar()
{
	var animal;
	var peso;
	var temperatura;
	var respuesta="si";
	var contadorTemperaturasPares=0;
	var pesoMasPesado;
	var temperaturaMasPesada;
	var animalMasPesado;
	var flag=0;
	var contadorTempBajoCero=0;
	var promedio;
	var acumuladorPeso=0;
	var contadorPeso=0;
	var animalesBajoCero=0;
	var pesoMinimoBajoCero;
	var pesoMaximoBajoCero;


	while(respuesta=="si")
	{	
		animal=prompt("Ingrese un animal");
		peso=prompt("Ingrese peso del animal");
		peso=parseInt(peso);

		while(peso<1 || peso>1000)
		{
			peso=prompt("Peso invalido. REINGRESE");
		}

		temperatura=prompt("Ingrese temperatura del hábitat");
		temperatura=parseInt(temperatura);

		while(temperatura<-30 || temperatura>30)
		{
			temperatura=prompt("temperatura invalida. REINGRESE");
		}

		if(temperatura%2==0)
		{
			contadorTemperaturasPares=contadorTemperaturasPares+1;
		}

		if(flag==0 || peso>pesoMasPesado)
		{
			pesoMasPesado=peso;
			animalMasPesado=animal;
			temperaturaMasPesada=temperatura;
			flag=1;
		}

		if(temperatura<0)
		{
			contadorTempBajoCero=contadorTempBajoCero+1;
		}

		if(temperatura<0)
		{
			animalesBajoCero=animalesBajoCero+1;

			if(animalesBajoCero==1)
			{
				pesoMaximoBajoCero=peso;
				pesoMinimoBajoCero=peso;
			}
			else
			{
				if(peso>pesoMaximoBajoCero)
				{
					pesoMaximoBajoCero=peso;
				}
				if(peso<pesoMinimoBajoCero)
				{
					pesoMinimoBajoCero=peso;
				}
			
			}
		}


		contadorPeso=contadorPeso+1;
		acumuladorPeso=acumuladorPeso+peso;
		respuesta=prompt("Desea continuar???");

	}

	promedio=acumuladorPeso/contadorPeso;
	
	document.write("La cantidad de temperaturas pares es :" +contadorTemperaturasPares+ "<br>");
	document.write("El nombre y temperatura del animal mas pesado es: " +animalMasPesado+ " temperatura " +temperaturaMasPesada+ "<br>");
	document.write("La cantidad de animales que viven a temp bajo cero es :" +contadorTempBajoCero+ "<br>");
	document.write("El promedio del peso de todos los animales es :" +promedio+ "<br>");
	document.write("El peso maximo de los animales bajo cero es: " +pesoMaximoBajoCero+ "<br>");
	document.write("El peso minimo de los animales bajo cero es: " +pesoMinimoBajoCero+ "<br>");
}
