function mostrar()
{
	var hora;

	hora=laHora.value;

	switch(hora)
	{
		case "6":
		case "7":
		case "8":
		case "9":
		case "10":
		case "11":
		alert("ES DE MAÑANA");
		break;

		case "12":
		case "13":
		case "14":
		case "15":
		case "16":
		case "17":
		case "18":
		case "19":
		alert("ES DE TARDE");
		break;

		default:
		alert("ES DE NOCHE");
		break;

	}
 	if(hora>=20 && hora<25)
 	{
 		alert("A DORMIR");
 	}
}
