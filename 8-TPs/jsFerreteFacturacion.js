/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var productoUno;
	var productoDos;
	var productoTres;
	var suma;

	productoUno=PrecioUno.value;
	productoDos=PrecioDos.value;
	productoTres=PrecioTres.value;


	productoUno=parseInt(productoUno);
	productoDos=parseInt(productoDos);
	productoTres=parseInt(productoTres);

	suma=(productoUno+productoDos+productoTres);

	alert("La suma es " +suma);

}

function Promedio () 
{
	var productoUno;
	var productoDos;
	var productoTres;
	var promedio;

	document.getElementById('PrecioUno')=productoUno;
	document.getElementById('PrecioDos')=productoDos;
	document.getElementById('PrecioTres')=productoTres;

	productoUno=parseInt(productoUno);
	productoDos=parseInt(productoDos);
	productoTres=parseInt(productoTres3);

	suma=productoUno+productoDos+productoTres;
	promedio=suma/3;
	
	alert("El promedio es " +promedio);

}
function PrecioFinal () 
{
	var productoUno;
	var productoDos;
	var productoTres;

	productoUno=PrecioUno.value;
	productoDos=PrecioDos.value;
	productoTres=PrecioTres.value;

	productoUno=parseInt(productoUno);
	productoDos=parseInt(productoDos);
	productoTres=parseInt(productoTres);

	suma=productoUno+productoDos+productoTres;
	IVA=suma*0.21;
	precioFinal=suma+IVA;

	alert("El precio final es " +precioFinal);



}