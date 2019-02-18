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
	var lamparas;
 	var unidades;
 	var marca;
 	var montoConDescuento;
 	var precio;
 	var descuento;

 	precio=lamparas*35;
 	unidades=Cantidad.value;
 	montoConDescuento=precioDescuento.value;

 	precio=parseInt(precio);
 	unidades=parseInt(unidades);
 	montoConDescuento=parseInt(montoConDescuento);

 	switch(lamparas)
 		{
 		case 5:
 				if(variedad=="ArgentinaLuz")
 				{//las llaves de cada if se ponen a la altura del if
 					descuento=0.6;
 				}//y se cierran alli
 				else//no va este ELSENO VA ESTE ELSE
 				{
 				descuento=0.7;
 				}

 		}

 	if(lamparas>=6)
 	{
 		descuento=0.5;//asi esta bien
 	}
 	else //Asi se acomoda
 	{//aca se abre llaves del else
 		if(lamparas==5)//asi si
 		{	
 			if(variedad=="ArgentinaLuz")
 			{//las llaves de cada if se ponen a la altura del if
 				descuento=0.6;
 			}//y se cierran alli
 				else//no va este ELSENO VA ESTE ELSE
 			{
 				descuento=0.7;
 			}
 		}
 	}//aca cierro llaves del else
 
 	else
 	{	
 	if(unidades==4 && marca=="ArgentinaLuz" ||  marca =="FelipeLamparas")
 	{
 		importe=precio*0.75;
 	}
 		else
 		{
 			importe=precio*0.8;
 		}
 	}	
 		if(unidades==3 && marca=="ArgentinaLuz")
 	{
 		importe=precio*0.85;
 	}
 		if(unidades==3 && marca=="FelipeLamparas")
 		{
 			importe=precio*0.9;
 		}
 		else
 		{
 			importe=precio*0.95;
 		}
precioFinal=precio*descuento;

 	if(montoConDescuento>=120)
 	{	
 		IngresosB=montoConDescuento*0.1;
 		importe=montoConDescuento+IngresosB;
 	}


 	alert("Usted pago " +IngresosB+ " de IIBB");

document.getElementById('precioDescuento').value=precioDescuento;

 			

}
