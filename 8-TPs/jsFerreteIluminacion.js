/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{

 	
 	var cantidad;//1ªvariable
 	var marca;//2ª variable
 	var totalBruto;
 	var pocentajeDeDescuento=0;//igualo a 0 por si compra 1 o 2 lamparas no me calcule descuento
 	var totalConDescuento;
 	//var precio;
 	//var descuento;
 	var ingresosB=0;//le asigno cero porque si no supera los 120$ que no me calcule nada de INg BRutos,si lo tiene va a tomar el if de INgresosBrutos
 	//var precioFinal;

 	cantidad=document.getElementById('Cantidad').value;
 	marca=document.getElementById("Cantidad").value;

 	//precio=parseInt(precio);
 	cantidad=parseInt(cantidad);
 	//montoConDescuento=parseInt(montoConDescuento);
 	//ingresosB=parseInt(ingresosB);

 	totalBruto=cantidad*35;

 	if(cantidad>=6)
 	{
 		porcentajeDeDescuento=0.5;
 	}
 	else//meto else para q evalue directo este si no es if
 	{
 		if(cantidad==5) //marca=="ArgentinaLuz")no va xq son 2 marcas la condicion
 		{
 			if(marca=="ArgentinaLuz")// este funciona como un && ya que en el primer if no lo puedo usar porque son dos condiciones de marca
 			{
 				porcentajeDeDescuento=0.4;
 			}
 			else
 			{
 				porcentajeDeDescuento=0.3;
 			}
 		}	

 		else
 		{
 			if(cantidad==4)
 			{
 				if(marca=="ArgentinaLuz" || marca == "FelipeLamparas")
 				{
 					porcentajeDeDescuento=0.25;
 				}
 				else
 				{
 					porcentajeDeDescuento=0.20;
 				}
 			}

 			else
 			{
 				if(cantidad==3)
 				{
 					if(marca=="ArgentinaLuz")
 					{
 						porcentajeDeDescuento=0.15;
 					}
 					else
 					{
 						if (marca=="“FelipeLamparas”")
 						{
 							porcentajeDeDescuento=0.1;
 						}
 						else
 						{
 							porcentajeDeDescuento=0.05;
 						}
 					}
 				}	
 			}
 		}
 	}

 	totalConDescuento=totalBruto - (totalBruto*porcentajeDeDescuento);
 	document.getElementById("precioDescuento").value=totalConDescuento;

 	if(totalConDescuento>120)
 	{
 		ingresosB=(totalConDescuento*0.1);

 		alert("Usted pago " +ingresosB+ "de Ingresos Brutos");
 	}

 	document.getElementById("precioDescuento").value=totalConDescuento+ingresosB;
}
 	



