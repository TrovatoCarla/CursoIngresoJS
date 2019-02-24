function mostrar()
{
	var sexo;

	sexo=prompt("Por favor indique su sexo f ó m");

	while(sexo!="f" && sexo!="m")
	{
		alert("Sexo invalido");
		sexo=prompt("Reingrese su sexo");
	}

	document.getElementById('Sexo').value=sexo;
}