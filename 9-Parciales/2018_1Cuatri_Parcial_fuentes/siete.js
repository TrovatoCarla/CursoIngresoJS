function mostrar()
{
	var notas;
	var sexo;
	var contador=0;
	var promedio;
	var acumulador=0;
	var notaMasBaja;
	var contadorDeSexo=0;
	var sexoMasBajo;
	var flag=0;

	while(contador<5)
	{
		notas=prompt("Ingrese la nota");

		while(notas<0 || notas>10 || isNaN(notas))
		{
			notas=prompt("Nota invalida, Reingrese la nota");
		}

		sexo=prompt("Ingrese el sexo");

		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("Nota invalida, Reingrese el sexo");
		}
		notas=parseInt(notas);
		contador=contador+1;
		acumulador=acumulador+notas;
		if(flag==0||notas<notaMasBaja)
		{
			notaMasBaja=notas;
			sexoMasBajo=sexo;
			flag=1;
		}
		if(notas>=6 && sexo=="m")
		{
			contadorDeSexo=contadorDeSexo+1;
		}
	}

	promedio=acumulador/contador;
	
		alert("El promedio es :" +promedio);
	
	alert("la nota mas baja es :" +notaMasBaja+ "y el sexo es :" +sexoMasBajo);
	alert("Los varones con notas mayores o iguales a 6 son :" +contadorDeSexo);

}
