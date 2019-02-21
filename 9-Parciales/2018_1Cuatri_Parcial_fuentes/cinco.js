function mostrar()
{
//Cada habitacion de un hotel tiene un precio,hay promociones segun el tipo
//de pago, si es con tarjeta visa un 10%, si es por paypal un 15%,por mercadoPago
//un 10%,efectivo 20 % cualquier otro medio solo un 5%.
//si compraste el paquete "todo incluido" y pagas con paypal se te suma 10%
//al descuento.
//si pagas en efectivo,tenes varias opciones, el paquete "soloDesayunos" te suma un
//10% al descuento, si el paquete es "todoincluido" te suma un 15% y para el resto
//de los paquetes no tiene descuento adicional

var precio;
var medioDePago;
var paquete;
var descuento;
var masDescuento;

precio=prompt("Indique precio de la habitacion");
medioDePago=prompt("indique medio de pago");
paquete=prompt("Indique el paquete");

precio=parseInt(precio);

	switch (medioDePago)
	{
		case "tarjeta Visa":
		case "mercadoPago":
			
			descuento=0.9;
			break;
		case "paypal":
			
			switch(paquete)
			{
				case "todoincluido":
					descuento=0.75;
					break;
				default:
					descuento=0.85;
			}
			break;
		
		case "efectivo":
		
			switch(paquete)
			{
				case "soloDesayunos":
					descuento=0.7;
					break;
				default:
					descuento=0.8;
			}
			break;


			
			descuento=0.8;
			break;
		default:
			descuento=0.95;
			break;
	

		switch(paquete)
		{
			case "todo incluido":
				descuento=0.85;
				switch(medioDePago)
				{
					case "paypal":
						descuento=0.75;

					case "efectivo":
						descuento=0.65;
				}	

			case "soloDesayunos":
				switch 
				{


				}

	}




}
