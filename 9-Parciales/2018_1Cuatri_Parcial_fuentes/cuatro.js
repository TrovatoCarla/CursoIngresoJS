
function mostrar ()

{
	var numero1;
	var numero2;
	var suma;

	numero1=prompt("Ingrese primer numero");
	numero2=prompt("Ahora el segundo numero");

	if(numero1==numero2)
	{
		alert(numero1+numero2);
	}
	else
	{
		numero1=parseInt(numero1);
		numero2=parseInt(numero2);

		if(numero1>numero2)
		{
			alert(numero1-numero2);
		}
		else
		{
			suma=numero1+numero2;
			alert(suma);

				if(suma>10)
				{
					alert("La suma es :" +suma+ " y supero el 10");
				}
		}
	}
}
