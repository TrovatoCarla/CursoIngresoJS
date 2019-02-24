function mostrar()
{
//tomo la edad  
	var años;
	var estadoCivil;

	años=document.getElementById('edad').value;
	estadoCivil=document.getElementById("estadoCivil").value;

	if(años>=18 && estadoCivil=="Soltero")
	{
		alert("Es soltero y no es menor");
	}


}//FIN DE LA FUNCIÓN