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
 	var unidades;
 	var marca;

 	lamparas=35;
 	unidades=Cantidad.value;
 	lamparas=parseInt(lamparas);
 	unidades=parseInt(unidades);

 	if(unidades>=6)
 	{
 		importe==lamparas*0.5;
 		}
 		else
 		{
 			if(unidades==5 && marca=="ArgentinaLuz")
 				importe=lamparas*0.6;
 			}
 			{else
 				importe=lamparas*0.7;
 				}
 	if(unidades==4 && marca="ArgentinaLuz" || "FelipeLamparas")
 		{
 			importe=lamparas*0.75;
 			}
 		else
 			importe=lamparas*0.8;
 	if(unidades==3 && marca=="ArgentinaLuz")
 		{importe=lamparas*0.85;
 		if(unidades==3 && marca=="FelipeLamparas")
 			{
 				importe=lamparas*0.9;
 				}
 		else
 			importe=lamparas*0.95;

 	if(precioDescuento==120)
 	{	
 		IngresosB=precioDescuento*0.1;
 		importe=precioDescuento+IngresosB;
 		}

 	alert("Usted pago " +IngresosB+ " de IIBB");

}
 			

}
