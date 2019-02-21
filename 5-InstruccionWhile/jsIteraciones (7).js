function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

while(contador=="si")//pongo el maximo 
{
	numero=prompt("Ingrese numero");
	contador=contador+1;//se le suma un literal
	numero=parseInt(numero);
	acumulador=acumulador+numero;//se le suma una variable
	respuesta=prompt("Ingrese si para continuar");
}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN