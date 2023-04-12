var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

// dibujar el cuerpo
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(100, 200, 200, 100);
ctx.strokeRect(100, 200, 200, 100);

// dibujar la cabeza
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(60, 140, 100, 100);
ctx.strokeRect(60, 140, 100, 100);

// dibujar la oreja izquierda
ctx.beginPath();
ctx.moveTo(60, 140);
ctx.lineTo(60, 80);
ctx.lineTo(90, 120);
ctx.fillStyle = "#9E7D55";
ctx.fill();
ctx.stroke();

// dibujar la oreja derecha
ctx.beginPath();
ctx.moveTo(160, 140);
ctx.lineTo(190, 120);
ctx.lineTo(190, 80);
ctx.fillStyle = "#9E7D55";
ctx.fill();
ctx.stroke();

// dibujar el ojo izquierdo
ctx.beginPath();
ctx.arc(85, 170, 10, 0, 2 * Math.PI);
ctx.fillStyle = "#000000";
ctx.fill();

// dibujar el ojo derecho
ctx.beginPath();
ctx.arc(135, 170, 10, 0, 2 * Math.PI);
ctx.fillStyle = "#000000";
ctx.fill();

// dibujar la nariz
ctx.beginPath();
ctx.arc(110, 200, 10, 0, 2 * Math.PI);
ctx.fillStyle = "#000000";
ctx.fill();

// dibujar la boca
ctx.beginPath();
ctx.moveTo(90, 220);
ctx.lineTo(130, 220);
ctx.lineWidth = 3;
ctx.strokeStyle = "#000000";
ctx.stroke();

// dibujar el cuello
ctx.beginPath();
ctx.moveTo(160, 250);
ctx.lineTo(160, 300);
ctx.strokeStyle = "#000000";
ctx.stroke();
