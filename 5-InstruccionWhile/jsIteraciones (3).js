function mostrar()
{
var intentos=0;
var clave = prompt("ingrese el número clave.");
var flag=false;
while(clave!="utn750")
{
	//alert("clave incorrecta.Reingrese su clave");
	clave=prompt("Reingrese el numero clave");
	intentos=intentos+1;
	if(intentos==3)
	{
		flag=true;
		break;//el break aca rompe la estructura repetitiva.Cuando se cumple la condicion me saca de la estructura
	}
}
	if(flag==false)
	{
		alert("Bienvenido al sistema");
	}

	


}//FIN DE LA FUNCIÓN
