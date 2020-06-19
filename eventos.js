/* Declaracion de Variables: */
var cuadrito = document.getElementById("areaDeDibujo");
var papelParaDibujar = cuadrito.getContext("2d");
var flechas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};
var palanquita = false;
var xi = 0;
var yi = 0;

/* Invocando Funciones: */
console.log(flechas);

// document.addEventListener("keydown", dibujarConTeclado);
cuadrito.addEventListener("mousedown", dibujarConMouse);
cuadrito.addEventListener("mousemove", dibujarConMouseMove);
document.addEventListener("mouseup", dibujarConMouseUp);



/* Declaracion de Funciones: */
function dibujarLinea(Color, xInicial, yInicial, xFinal, yFinal, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = Color;

  lienzo.lineWidth = 3;
  lienzo.moveTo(xInicial, yInicial);

  lienzo.lineTo(xFinal, yFinal);

  lienzo.stroke();

}

function dibujarConMouseUp (evento) {
 palanquita = false;

}



function dibujarConMouse (evento) {
   palanquita = true;
   xi = evento.clientX;
   yi = evento.clientY;

   

}

function dibujarConMouseMove (evento) {
  var xf = evento.clientX;
  var yf = evento.clientY;


  if (palanquita == true) {

    dibujarLinea("green", xi , yi, xf , yf , papelParaDibujar);
    console.log(evento);


    
  }

  xi = xf ;
  yi = yf ;


  
    

}












/*function dibujarConTeclado(evento) {
  var codigoDeTecla = evento.keyCode;
  var colorcito = "blue";
  var movimiento = 10;

  palanquita (codigoDeTecla) {
    case flechas.UP:
      dibujarLinea(colorcito, x, y, x, y - movimiento, papelParaDibujar);
      y = y - movimiento;
      break;
    case flechas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento, papelParaDibujar);
      y += movimiento;
      break;
    case flechas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, papelParaDibujar);
      x -= movimiento;
      break;
    case flechas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y, papelParaDibujar);
      x += movimiento;
      break;

    default:
      console.log("otra tecla");
      break;
  } 
} */
