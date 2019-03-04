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

		if(flag==0 || marca>marcaMasPesada)
		{
			marcaMasPesada=marca;
			pesoMasPesado=peso;
			flag=1;
		}






		respuesta=prompt("Desea continuar???");
	}

	


	document.write("Cantidad de temperaturas pares :" +contadorTempPares+ "<br>");
	document.write("La marca del producto mas pesado es :" +marcaMasPesada+ "<br>");

}
