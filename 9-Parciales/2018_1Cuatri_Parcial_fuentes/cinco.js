function mostrar()
{
	 var planeta;
	 var mensaje="";

	 planeta=prompt("Ingrese un planeta ");

	 switch (planeta)
	{
		case "tierra":
			mensaje="acá vivimos";
			break;

		case "mercurio":
		case "venus":
			mensaje="acá hace mas calor";
			break;

		case "marte":
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":
			mensaje="acá hace más frío";
			break;
		default:
			mensaje="no es un planeta";
			break;
	}

alert(mensaje);





}
