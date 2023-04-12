var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

pincel.fillStyle = "gray";
pincel.fillRect(0,0,600,400);

pincel.fillStyle = "green";
pincel.fillRect(0,0,200,400);

pincel.fillStyle = "red";
pincel.fillRect(400,0,200,400);

pincel.fillStyle = "yellow";
pincel.beginPath();
pincel.moveTo(300,200);
pincel.lineTo(200,400);
pincel.lineTo(400,400);
pincel.fill();

pincel.fillStyle = "blue";
pincel.beginPath();
pincel.arc(300,200,50,0,2*3.14);
pincel.fill();


//var pantalla = document.querySelector("canvas");
//var pincel = pantalla.getContext("2d");
//cabeza
//pincel.fillStyle = 'darkgreen';
//pincel.fillRect(200, 50, 350 ,300);
//ojos
//pincel.fillStyle = 'black';
//pincel.fillRect(250, 110, 90, 90);
//pincel.fillRect(410, 110, 90, 90);
//nariz
//pincel.fillRect(340, 200, 70, 100);
//boca
//pincel.fillRect(300, 240, 40, 110);
//pincel.fillRect(410, 240, 40, 110);

var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

// dibujar la esfera del dragón
ctx.beginPath();
ctx.arc(150, 150, 100, 0, 2 * Math.PI);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.lineWidth = 10;
ctx.strokeStyle = "#000000";
ctx.stroke();

// dibujar los detalles de la esfera
ctx.beginPath();
ctx.arc(150, 150, 80, 0, 2 * Math.PI);
ctx.lineWidth = 10;
ctx.strokeStyle = "#FFFFFF";
ctx.stroke();

ctx.beginPath();
ctx.arc(150, 150, 60, 0, 2 * Math.PI);
ctx.lineWidth = 10;
ctx.strokeStyle = "#000000";
ctx.stroke();

ctx.beginPath();
ctx.arc(150, 150, 40, 0, 2 * Math.PI);
ctx.lineWidth = 10;
ctx.strokeStyle = "#FFFFFF";
ctx.stroke();

ctx.beginPath();
ctx.arc(150, 150, 20, 0, 2 * Math.PI);
ctx.lineWidth = 10;
ctx.strokeStyle = "#000000";
ctx.stroke();


function dibujarRectangulo(x,y,color){
  var pantalla = document.querySelector("canvas");
  var pincel = pantalla.getContext("2d");
  pincel.fillStyle = color;
  pincel.fillRect(x,y,50,50);
  pincel.strokeStyle = "black";
  pincel.strokeRect(x,y,50,50);
}
//dibujarRectangulo(50,50,"green",Math.round(Math.random()*50));

for(i=0;i<600;i = i + 50){
  dibujarRectangulo(i,0,"red");
  dibujarRectangulo(i,50,"yellow");
  dibujarRectangulo(i,100,"blue");
}
