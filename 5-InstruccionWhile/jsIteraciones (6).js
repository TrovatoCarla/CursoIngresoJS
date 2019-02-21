function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;


	while(contador<5)//pongo el maximo 
	{
		numero=prompt("Ingrese numero");
		numero=parseInt(numero);
		contador=contador+1;//se le suma un literal
		acumulador=acumulador+numero;//se le suma una variable
	}

	

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;





}//FIN DE LA FUNCIÓN