{

	var valorUno;
	var valorDos;
	var varloTres;
	var valorCuatro;
	var descuento;
	var aumento;
	var precioFinal;

	valorUno=prompt("Ingrese el primer valor");
	valorDos=prompt("Ingrese el segundo valor");
	varloTres=prompt("Ingrese el tercer valor");
	valorCuatro=prompt("Ingrese el cuarto valor")

	valorUno=parseInt(valorUno);
	valorDos=parseInt(valorDos);
	varloTres=parseInt(varloTres);
	valorCuatro=parseInt(valorCuatro);
	descuento=parseInt(descuento);
	aumento=parseInt(aumento);


	if(suma>=100)
	{
		descuento=0.90;
	}

	if(suma>=50)
	{
		descuento=0.95;
	}

	else
	{
		aumento=1.15;
	}

	suma=valorUno+valorDos+varloTres+valorCuatro;

	precioFinal=suma-descuento;
	precioFinal=suma+aumento;

	alert("El precio final es " +precioFinal);

			
}
