/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var Grados;

	Grados=Temperatura.value;
	Grados=parseFloat(Grados);

	centígrados=Grados-32;
	calculoTotal=centígrados*0.55;
 
	alert(Grados+ " Fahrenheit son " +calculoTotal.toFixed(2)+ " centígrados");

}

function CentigradosFahrenheit () 
{
	var Grados;

	Grados=Temperatura.value;
	Grados=parseFloat(Grados);

	Fahrenheit=Grados*0.55;
	calculoTotal=Fahrenheit+32;

	alert(Grados+ " centígrados son " +calculoTotal.toFixed(2)+ " Fahrenheit");


}
