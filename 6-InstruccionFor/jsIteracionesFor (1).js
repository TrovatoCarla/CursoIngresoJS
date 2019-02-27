function mostrar()
{	
	var contador=0;
	var contadorUno=0;
	var contadorDos=0;
	var contadorTres=0;
	var contadorCuatro=0;
	var contadorCinco=0;
	var contadorSeis=0;
	var contadorSiete=0;
	var contadorOcho=0;
	var contadorNueve=0;
	var contadorDiez=0;

	var numeroRandom;


	for(;contador<1000;contador++)
	{
		numeroRandom=Math.floor(Math.random() * 10) + 1;
		//console.log(numeroRandom);
	

		switch(numeroRandom)
		{
			case 1: 
			contadorUno++;
			break;

			case 2: 
			contadorDos++;
			break;

			case 3: 
			contadorTres++;
			break;

			case 4: 
			contadorCuatro++;
			break;

			case 5: 
			contadorCinco++;
			break;

			case 6: 
			contadorSeis++;
			break;

			case 7: 
			contadorSiete++;
			break;

			case 8: 
			contadorOcho++;
			break;

			case 9: 
			contadorNueve++;
			break;

			case 10:
			contadorDiez++;
			break;
		}

	}

	console.log("El numero uno salio " +contadorUno+ " veces " +contadorUno/contador*100+ "%");
	console.log("El numero dos  salio " +contadorDos+ " veces "+contadorDos/contador*100+ "%");
	console.log("El numero tres  salio " +contadorTres+ " veces " +contadorTres/contador*100+ "%");
	console.log("El numero cuatro salio " +contadorCuatro+ " veces "+contadorCuatro/contador*100+ "%");
	console.log("El numero cinco  salio " +contadorCinco+ " veces "+contadorCinco/contador*100+ "%");
	console.log("El numero seis  salio " +contadorSeis+ " veces "+contadorSeis/contador*100+ "%");
	console.log("El numero siete  salio " +contadorSiete+ " veces "+contadorSiete/contador*100+ "%");
	console.log("El numero ocho salio " +contadorOcho+ " veces "+contadorOcho/contador*100+ "%");
	console.log("El numero nueve  salio " +contadorNueve+ " veces "+contadorNueve/contador*100+ "%");
	console.log("El numero diez salio " +contadorDiez+ " veces "+contadorDiez/contador*100+ "%");
	console.log(contador);
}


