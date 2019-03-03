function mostrar()
{
	var planetas;

	planetas=prompt("Ingrese un planeta");

	switch(planetas)
	{
		case "tierra":
		alert("Acá vivimos");
		break;

		case "mercurio":
		case "venus":
		alert("Acá hace más calor");
		break;

		case "jupiter":
		case "saturno":
		case "urano":
		case "marte":
		case "neptuno":
		alert("Acá hace más frío");
		break;
		
	}





}
