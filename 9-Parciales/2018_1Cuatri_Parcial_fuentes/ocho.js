function mostrar()
{
	var letra;
	var numero;
	var respuesta="si";
	var contadorPares=0;
	var contadorImpares=0;
	var contadorCeros=0;
	var promedio;
	var contadorPositivos=0;
	var acumuladorPositivos=0;
	var acumuladorNegativos=0;
	var flag=0;
	var numeroMinimo;
	var letraMinima;
	var numeroMaximo;
	var letraMaxima;

	while(respuesta=="si")
	{
		letra=prompt("Ingrese letra");
		numero=prompt("Ingrese numero");

		numero=parseInt(numero);

		while(numero<-100 || numero>100)
		{
			alert("Numero invalido");
			numero=prompt("Reingrese numero valido");
		}
		
		if(numero%2==0 && numero!=0)
		{
			contadorPares=contadorPares+1;
		}
		else
		{	if(numero!=0)
			{
				contadorImpares=contadorImpares+1;
			}
			
		}

		if(numero==0)
		{
			contadorCeros=contadorCeros+1;
		}

		if(numero>0)
		{
			contadorPositivos=contadorPositivos+1
			acumuladorPositivos=acumuladorPositivos+numero;
		}

		if(numero<0)
		{
			acumuladorNegativos=acumuladorNegativos+numero;
		}

		if(flag==0 || numero<numeroMinimo)
		{
			numeroMinimo=numero;
			letraMinima=letra;
		}

		if(flag==0 || numero>numeroMaximo)
		{
			numeroMaximo=numero;
			letraMaxima=letra;
			flag=1;
		}

		respuesta=prompt("Desea continuar?");

	}
	promedio=acumuladorPositivos/contadorPositivos;



	alert("La cantidad de numero pares es: " +contadorPares);
	alert("La cantidad de numero impares es: " +contadorImpares);
	alert("La cantidad de ceros ingresados fue: " +contadorCeros);
	alert("El promedio de positivos es: " +promedio);
	alert("La suma de numeros negativos es: " +acumuladorNegativos);
	alert("El numero minimo es: " +numeroMinimo+ " con letra " +letraMinima);
	alert("El numero maximo es: " +numeroMaximo+ " con letra " +letraMaxima);

}	
