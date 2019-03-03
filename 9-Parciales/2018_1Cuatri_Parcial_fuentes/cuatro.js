
function mostrar ()

{
	var numeroUno;
	var numeroDos;
	var suma;

	numeroUno=prompt("Ingrese primer numero");
	numeroDos=prompt("Ahora ingrese el segundo numero");

	if(numeroUno==numeroDos)
	{
		alert(numeroUno+numeroDos);
	}
	else
	{
		numeroUno=parseInt(numeroUno);
		numeroDos=parseInt(numeroDos);

		if(numeroUno>numeroDos)
		{
			alert(numeroUno-numeroDos);
		}
		else
		{
			alert(numeroUno+numeroDos);
		}
			suma=numeroUno+numeroDos;

			if(suma>10)
			{
				alert("La suma es :" +suma+ " y supero el 10 ");
			}
			
	}
}
