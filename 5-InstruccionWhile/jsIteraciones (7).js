function mostrar()
{
	var numero;
	var contador=0;
	var acumulador=0;
	var respuesta="si";

	while(contador=="si")
	{
		numero=prompt("Ingrese un numero");
		contador=contador+1;
		numero=parseInt(numero);
		acumulador=acumulador+numero;
		respuesta=prompt("Desea continuar?");
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById("promedio").value=acumulador/contador;
	
}//FIN DE LA FUNCIÓN
