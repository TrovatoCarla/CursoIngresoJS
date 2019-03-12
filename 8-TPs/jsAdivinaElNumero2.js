/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;


function comenzar()
{
	
	numeroSecreto=Math.floor(Math.random() * 100) + 1;
	console.log(numeroSecreto);
	contadorIntentos=intentos.value;
	contadorIntentos=1;
	

}

function verificar()
{	
	var numeroIngresado;

	numeroIngresado=document.getElementById('numero').value;

	if(numeroIngresado>numeroSecreto)
	{
		alert("Te pasaste!");
	}

	if(numeroIngresado<numeroSecreto)
	{
		alert("Te falta");
	}

	else
	{

		if(numeroIngresado==numeroSecreto && contadorIntentos==1)
		{
			alert("usted es un Psíquico");
		}

		if(numeroIngresado==numeroSecreto && contadorIntentos==2)
		{
			alert("excelente percepción");
		}

		if(numeroIngresado==numeroSecreto && contadorIntentos==3)
		{
			alert("Esto es suerte");
		}

		if(numeroIngresado==numeroSecreto && contadorIntentos==4)
		{
			alert("Excelente técnica");
		}

		if(numeroIngresado==numeroSecreto && contadorIntentos==5)
		{
			alert("usted está en la media");
		}

		if(numeroIngresado==numeroSecreto && contadorIntentos>=6 && contadorIntentos<10)
		{
			alert("falta técnica");
		}

		if(numeroIngresado==numeroSecreto && contadorIntentos>10)
		{
			alert("afortunado en el amor!!");
		}

	}
	contadorIntentos=contadorIntentos+1;


	
}

