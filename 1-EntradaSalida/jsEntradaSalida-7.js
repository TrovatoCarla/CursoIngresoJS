/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primernumero;
	var segundonumero;
	var resultado;
    
    primernumero=numeroUno.value;
    segundonumero=numeroDos.value;

	primernumero=parseInt(primernumero);
	segundonumero=parseInt(segundonumero);
    resultado=primernumero+segundonumero;

    alert("El resultado es:" +resultado);


}

function restar()
{
    var primernumero;
	var segundonumero;
	var resultado;
    
    primernumero=numeroUno.value;
    segundonumero=numeroDos.value;

	primernumero=parseInt(primernumero);
	segundonumero=parseInt(segundonumero);
    resultado=primernumero-segundonumero;

    alert("El resultado es:" +resultado);
	
}

function multiplicar()
{ 
	var primernumero;
	var segundonumero;
	var resultado;
    
    primernumero=numeroUno.value;
    segundonumero=numeroDos.value;

	primernumero=parseInt(primernumero);
	segundonumero=parseInt(segundonumero);
    resultado=primernumero*segundonumero;

    alert("El resultado es:" +resultado);
	
}

function dividir()
{
		var primernumero;
	var segundonumero;
	var resultado;
    
    primernumero=numeroUno.value;
    segundonumero=numeroDos.value;

	primernumero=parseInt(primernumero);
	segundonumero=parseInt(segundonumero);
    resultado=primernumero/segundonumero;

    alert("El resultado es:" +resultado);
    
}

