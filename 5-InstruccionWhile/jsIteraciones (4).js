function mostrar()
{
	var numero;

	numero=prompt("Ingrese un numero entre el 0 y 9");


	while(numero>9 || numero<0)
	{
		alert("Numero invalido");
		numero=prompt("Reingrese el numero entre 0 y 9");

	}

	document.getElementById('Numero').value=numero;
	
}//FIN DE LA FUNCIÓN