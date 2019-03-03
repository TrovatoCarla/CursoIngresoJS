function mostrar()
{
	var letra;
	var numero;
	var acumulador=0;
	var respuesta="si";
	
		numero=prompt("Ingrese numero de -100 al 100");
		numero=parseInt(numero);
		letra=prompt("Ingrese Letra");

	while(respuesta=="si")
	{
	

		while(numero<-100 || numero>100)
		{
			numero=prompt("Numero invalido, REINGRESE");
		}
		respuesta=prompt("Desea continuar?");
	}

}
