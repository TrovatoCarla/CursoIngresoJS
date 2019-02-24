function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;

	nota=Math.floor(Math.random() * 10) + 1;
	{
		alert(nota);
	}

	if(nota>=9)
	{
		alert("EXCELENTE");
	}
	else
	{
		if(nota<9 && nota>=4)
		{
			alert("APROBO");
		}
		else
		{
			alert("Vamos, la proxima se puede");
		}
	}
}//FIN DE LA FUNCIÓN





