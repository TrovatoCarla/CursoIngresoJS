function mostrar()
{
	var letra;
	var numero;
	var acumulador=0;
	var respuesta="si";
	var resto;
	var par;
	var contadorPar=0;
	var contadorImpar=0;
	var contadorCeros=0;
	var acumuladorPositivos=0;
	var contadorPositivos=0;
	var promedio;
	var acumuladorNegativo=0;
	var numeroMaximo;
	var numeroMinimo;
	var letraMaxima;
	var letraMinima;
	var flag=0;

	while(respuesta=="si")
	{
		numero=prompt("Ingrese numero de -100 al 100");
		numero=parseInt(numero);
		
		while(numero<-100 || numero>100)
		{
			numero=prompt("Numero invalido, REINGRESE");
		}
		letra=prompt("Ingrese Letra");
		respuesta=prompt("Desea continuar?");

		resto=numero%2;

		if(resto==0)
		{
			contadorPar=contadorPar+1;
		}
		else
		{
			contadorImpar=contadorImpar+1;
		}

		if(numero==0)
		{
			contadorCeros=contadorCeros+1;
		}

		if(numero>0)
		{	
			acumuladorPositivos=acumuladorPositivos+numero;
			contadorPositivos=contadorPositivos+1;
			
		}
		if(numero<0)
		{
			acumuladorNegativo=acumuladorNegativo+numero;
			
		}

		if(flag==0 || numero>numeroMaximo)
		{
			numeroMaximo=numero;
			letraMaxima=letra;
		}
		if(flag==0 || numero<numeroMinimo)
		{
			numeroMinimo=numero;
			letraMinima=letra;
			flag=1;
		}
	}

	document.write("La cantidad de numeros pares es :" +contadorPar+ "<br>");
	document.write("La cantidad de numeros impares es :" +contadorImpar+ "<br>");
	document.write("La cantidad de ceros es: " +contadorCeros+ "<br>");

	if(contadorPositivos>0)
			{
				promedio=acumuladorPositivos/contadorPositivos;
				document.write("Promedio de positivos: " +promedio+ "<br>");
			}
			else
			{
				document.write("No se ingresaron positivos" +"<br>");
			}

	document.write("La suma de negativos es :" +acumuladorNegativo+"<br>");
	document.write("El numero y letra maxima es : " +numeroMaximo+ "y " +letraMaxima+ "<br>");
	document.write("El numero y letra minima es : " +numeroMinimo+ "y " +letraMinima+ "<br>");

}
