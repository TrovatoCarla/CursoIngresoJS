function mostrar()
{
	var marca;
	var peso;
	var temperatura;
	var respuesta="si";
	var resto;
	var contadorTempPares=0;
	var flag=0;
	var marcaMasPesada;
	var pesoMasPesado;
	var contadorBajoCero=0;
	var promedio;
	var acumuladorDePeso=0;
	var contadorPeso=0;
	var marcaMasLiviana;
	var pesoMasLiviano;

	while(respuesta=="si")
	{	
		marca=prompt("Ingrese la marca");

		peso=prompt("Ingrese el peso del producto");
		peso=parseInt(peso);
		while(peso<1 || peso>100)
		{
			peso=prompt("Peso invalido, REINGRESE PESO");	
		}

		temperatura=prompt("Ingrese temperatura del producto");
		temperatura=parseInt(temperatura);
		while(temperatura<-30 || temperatura>30)
		{
			temperatura=prompt("temperatura invalida, REINGRESE");
		}

		resto=temperatura%2;
		if(resto==0 && temperatura!=0)
		{
			contadorTempPares=contadorTempPares+1;
		}

		if(flag==0 || peso>pesoMasPesado)
		{
			marcaMasPesada=marca;
			pesoMasPesado=peso;
			
		}

		if(flag==0 || peso<pesoMasLiviano)
		{
			marcaMasLiviana=marca;
			pesoMasLiviano=peso;
			flag=1;
		}

		if(temperatura<0)
		{
			contadorBajoCero=contadorBajoCero+1;
		}




		acumuladorDePeso=acumuladorDePeso+peso;
		contadorPeso=contadorPeso+1;
		respuesta=prompt("Desea continuar???");
	}
	promedio=acumuladorDePeso/contadorPeso;
	


	document.write("Cantidad de temperaturas pares :" +contadorTempPares+ "<br>");
	document.write("La marca del producto mas pesado es :" +marcaMasPesada+ "<br>");
	document.write("El promedio del peso es :" +promedio+ "<br>");
	document.write("El peso maximo es :" +pesoMasPesado+ "<br>");
	document.write("El peso mas liviano es :" +pesoMasLiviano+ "<br>");
}
