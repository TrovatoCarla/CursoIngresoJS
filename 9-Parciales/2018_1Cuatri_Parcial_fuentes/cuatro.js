{
	var numeroUno;
	var numeroDos;

	numeroUno=prompt("Ingrese el primer numero");
	numeroDos=prompt("Ingrese el segundo numero");

	
	if(numeroUno==numeroDos)
	{
		alert(numeroUno+numeroDos);
	}

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	if(numeroUno>numeroDos)
	{	
		alert(numeroUno-numeroDos);
	}
		else
		{
			suma=numeroUno+numeroDos;
			alert(suma);
		}	
			if(suma>10)
			{	
				alert(suma+ "La suma es " +suma+ " y supero el 10 ");
			}

}
