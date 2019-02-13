
function mostrar()
{
var ancho;
var largo;

ancho=prompt("Por favor indique el ancho del rectangulo");
largo=prompt("Ahora indique el largo");

ancho=parseInt(ancho);
largo=parseInt(largo);

lados=ancho+largo;
perimetro=lados*2;


alert(perimetro);

}
