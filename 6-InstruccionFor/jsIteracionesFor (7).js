function mostrar()
{

	var numIngresado;
	var contador=0;
	var incremento=1;
	var divisor;

	numIngresado=prompt("Ingrese un numero");
	numIngresado=parseInt(numIngresado);

	for(;incremento<=numIngresado;incremento++)
	{
		
			divisor=numIngresado%incremento;

			if(divisor==0)
			{
				contador=contador++;
				alert(incremento);
			}

			
		
		
		else
		{
			
		}

	}
alert("La cantidad de numero divisores es :" +contador);


}//FIN DE LA FUNCIÓN