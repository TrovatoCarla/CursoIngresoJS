/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var producto1;
	var producto2;
	var producto3;
	var suma;

	producto1=PrecioUno.value;
	producto2=PrecioDos.value;
	producto3=PrecioTres.value

	producto1=parseInt(producto1);
	producto2=parseInt(producto2);
	producto3=parseInt(producto3);

	suma=producto1+producto2+producto3;

	alert(suma);

}
function Promedio () 
{
	var producto1;
	var producto2;
	var producto3;
	var promedio;

	document.getElementById('PrecioUno')=producto1;
	document.getElementById('PrecioDos')=producto2;
	document.getElementById('PrecioTres')=producto3;

	producto1=parseInt(producto1);
	producto2=parseInt(producto2);
	producto3=parseInt(producto3);

	suma=producto1+producto2+producto3;
	promedio=suma/3;
	
	alert("El promedio es " +promedio);

}
function PrecioFinal () 
{
	
}