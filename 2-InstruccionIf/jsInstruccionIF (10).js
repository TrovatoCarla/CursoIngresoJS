function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numRan;

	numRan=Math.floor(Math.random() * 10) + 1; 

	alert(numRan);

	if (numRan>=9)
		{
			alert("EXCELENTE");
			}
		else
		{
		if(numRan>4)
			{alert("APROBÓ");
		}
		else
		{	
		alert("Vamos, la próxima se puede");
		}
		}

}//FIN DE LA FUNCIÓN