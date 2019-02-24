function mostrar()
{
//tomo la edad  
	var años;

	años=document.getElementById('edad').value;

	if(años>=13 && años<18)
	{
		alert("Usted es adolescente");
	}
	else
	{
		if(años>17)
		{
			alert("Usted es mayor de edad");
		}
		else
		{
			alert("Usted es un niño");
		}
	}

}//FIN DE LA FUNCIÓN