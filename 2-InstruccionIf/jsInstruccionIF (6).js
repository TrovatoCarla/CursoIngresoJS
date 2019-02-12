function mostrar()
{
//tomo la edad  
	var suEdad;

	suEdad=edad.value;

	suEdad=parseInt(suEdad);
/*
	if (suEdad>18)
	{
		alert("Usted es mayor de edad");
	}
	if (suEdad<13)
	{
		alert("Usted es un niño");
	}
	else
	{
		alert("Usted es un adolescente");
		}
*/

if(suEdad>18)
{
	alert("Usted es mayor de edad");
}
else
	if(suEdad<13)
{
	alert("Usted es menor de edad");
}
else
	{
		alert("Usted es adolescente");
}

}//FIN DE LA FUNCIÓN