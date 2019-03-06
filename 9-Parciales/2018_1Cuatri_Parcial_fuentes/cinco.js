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
			alert("Acá hace mas calor");
			break;

		case "marte":
		case "saturno":
		case "neptuno":
		case "jupiter":
		case "urano":
			alert("Acá hace más frío");
			break;

			default:
			alert("Planeta invalido, reingrese");
			break;
	}





}
