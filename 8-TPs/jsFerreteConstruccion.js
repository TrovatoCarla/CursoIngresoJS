/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var elAncho;
	var elLargo;

	elAncho=Ancho.value;
	elLargo=Largo.value;

	elAncho=parseInt(elAncho);
	elLargo=parseInt(elLargo);

	perimetro=(elAncho+elLargo)*2;
	alambre=perimetro*3;

	alert("La cantidad de alambre que necesita es " +alambre);

}
function Circulo () 
{
	var elRadio;
	var alambre;

	elRadio=Radio.value;
	elRadio=parseFloat(elRadio);

	alambre=2*elRadio*Math.PI;
	circunsferencia=alambre*3;

	alert("La cantidad de alambre necesario es " +alambre.toFixed(2)+ "m");

}
function Materiales () 
{
	var elAncho;
	var elLargo;

	elAncho=Ancho.value;
	elLargo=Largo.value;

	elAncho=parseInt(elAncho);
	elLargo=parseInt(elLargo);

	superficie=elAncho*elLargo;
	cal=superficie*3;
	cemento=superficie*2;

	alert("La cantidad de bolsas de cal " +cal+ " y de cemento " +cemento);
}
