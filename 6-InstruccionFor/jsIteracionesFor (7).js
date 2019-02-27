function mostrar()
{

	var numIngresado;
	var incremento=1;
	var divisor;

	numIngresado=prompt("Ingrese un numero");
	numIngresado=parseInt(numIngresado);

	
	for(contador=0;incremento<=numIngresado;incremento++)
	{
		divisor=numIngresado%incremento;

		if(divisor==0)
		{
			alert(incremento);
			contador=contador+1;
		}
	}

	alert("La cantidad de numeros divisores es :" +contador);


}//FIN DE LA FUNCIÓN