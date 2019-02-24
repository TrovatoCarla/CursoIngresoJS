function mostrar()
{
//tomo la edad  
	var años;

	años=document.getElementById('edad').value;

	if(años<18)
	{	
		alert("Usted es menor de edad");
	}
	else
	{
		alert("Usted es MAYOR de edad");
	}
}