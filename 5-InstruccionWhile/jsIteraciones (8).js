function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=0;
	var numero;
	
	var respuesta='si';

while(respuesta!="no")//pongo el maximo 
{
	numero=prompt("Ingrese numero");
	contador=contador+1;//se le suma un literal
	numero=parseInt(numero);
	//acumulador=acumulador+numero;//se le suma una variable
	if(numero<0)
	{
		negativo=negativo*numero;
	}
	else
	{
		positivo=positivo+numero;
	}
	
	respuesta=prompt("Ingrese si para continuar");
}
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN