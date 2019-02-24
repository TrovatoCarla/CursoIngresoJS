function mostrar()
{
//tomo la edad  
	var años;
	var estadoCivil;

	años=document.getElementById('edad').value;
	estadoCivil=document.getElementById("estadoCivil").value;

	if(años<19 && estadoCivil!="Soltero")
	{
		alert("Usted es muy pequeño para no ser soltero");
	}
	


}//FIN DE LA FUNCIÓN