function mostrar()

{
		var marca;
		var peso;
		var temperatura;
		var respuesta="si";
		var contadorTempePares=0;
		var flag=0;
		var marcaPesada;
		var pesoPesado;
		var contadorTempeBajoCero=0;
		var promedio;
		var acumuladorPeso=0;
		var contadorPeso=0;
		var pesoMinimo;
		var marcaMinima;


	while(respuesta=="si")
	{
		marca=prompt("Ingrese marca");
		peso=prompt("Ingrese peso");

		peso=parseInt(peso);

		while(peso<1 || peso>100 || isNaN(peso))
		{
			alert("Peso invalido");
			peso=prompt("REINGRESE PESO");
		}

		temperatura=prompt("Ingrese temperatura de almacenamiento");
		temperatura=parseInt(temperatura);

		while(temperatura<-30 || temperatura>30 || isNaN(temperatura))
		{
			alert("temperatura invalida");
			temperatura=prompt("REINGRESE TEMPERATURA");

		}

		if(temperatura%2==0)
		{
			contadorTempePares=contadorTempePares+1;
		}

		if(flag==0 || peso>pesoPesado)
		{
			pesoPesado=peso;
			marcaPesada=marca;
		}

		if(flag==0 || peso<pesoMinimo)
		{
			pesoMinimo=peso;
			marcaMinima=marca;
			flag=1;

		}

		if(temperatura<0)
		{
			contadorTempeBajoCero=contadorTempeBajoCero+1;
		}

		contadorPeso=contadorPeso+1;
		acumuladorPeso=acumuladorPeso+peso;
		respuesta=prompt("Desea continuar??");
	}

	pormedio=acumuladorPeso/contadorPeso;


	document.write("La cantidad de temperaturas pares es :" +contadorTempePares+"<br>");
	document.write("La marca mas pesada es :" +marcaPesada+"<br>");
	document.write("La cantidad de productos bajo cero es :" +contadorTempeBajoCero+"<br>");
	document.write("El promedio de todos los pesos es :" +pormedio+"<br>");
	document.write("El peso minimo es :" +pesoMinimo+"<br>");
	document.write("El peso maximo es :" +pesoPesado+"<br>");

}

