function mostrar()
{
	var sexo;
	var numero;
	var contador=0;
	var promedio;
	var acumulador=0;
	var notaMasBaja;
	var sexoNotaBaja;
	var contadorVarones=0;

	
	while(contador<5)
	{
		contador++;
		numero=prompt("Ingrese nota entre 0 y 10");
		numero=parseInt(numero);

		while(numero<0 || numero>10)
		{
			numero=prompt("Ingrese una nota valida entre 0 y 10");
			numero=parseInt(numero)
		}
				
		sexo=prompt("Ingrese f o m");

		while(sexo!="f" && sexo !="m")
		{
			sexo=prompt("Ingrese un sexo valido, f o m");
		}



		if(contador==1)
		{
			notaMasBaja=numero;
			sexoNotaBaja=sexo;
		}
			else
			{
				if(numero<notaMasBaja)
				{
					notaMasBaja=numero;
					sexoNotaBaja=sexo;
				}
			}

		if(sexo=="m" && numero>=6)
		{
			contadorVarones=contadorVarones+1;
		}

		acumulador=acumulador+numero;
	}

	promedio=acumulador/5;

	alert("promedio es " +promedio);
	alert("La nota mas baja y el sexo es " +notaMasBaja)
	alert(contadorVarones);


}
