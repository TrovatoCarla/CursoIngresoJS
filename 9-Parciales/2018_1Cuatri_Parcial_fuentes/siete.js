function mostrar()
{
	var nota;
	var sexo;
	var contador=0;
	var promedio;
	var acumulador=0;
	var flag=0;
	var notaBaja;
	var sexoBajo;
	var contadorVanores=0;


	while(contador<5)
	{
		nota=prompt("Indique la nota");
		nota=parseInt(nota);

		while(nota>10 || nota<0)
		{
			alert("Nota invalida");
			nota=prompt("Reingrese la nota");
		}

		sexo=prompt("Ahora indique su sexo f o m");

		while(sexo!="f" && sexo!="m")
		{
			alert("Sexo invalido");
			sexo=prompt("Reingrese su sexo");
		}

		if(flag==0 || nota<notaBaja)
		{
			notaBaja=nota;
			sexoBajo=sexo;
			flag=1;
		}

		if(sexo=="m" && nota>=6)
		{
			contadorVanores=contadorVanores+1;
		}

		contador=contador+1;
		acumulador=acumulador+nota;
	}

	promedio=acumulador/contador;

	alert("El promedio es: " +promedio);
	alert("La nota mas baja es: " +notaBaja+ " y su sexo " +sexoBajo);
	alert("La cantidad de varones con nota mayor a seis es: " +contadorVanores);

}
