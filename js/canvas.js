var canvas = document.querySelector("#lienzo");
var ctx = canvas.getContext("2d");

/*=====================================================
QUADRO
======================================================*/
// RIEMPIMENTO
ctx.fillStyle = "cyan";
// ctx.fillRect(x1, y1, x2, y2);
ctx.fillRect(0, 0, 100, 100);

//CONTORNO
ctx.lineWidth = 5;
ctx.strokeStyle ="rgba(255, 0, 255, 1)";
ctx.rect(0,0,100,100);
ctx.stroke();

/*=====================================================
CERCHIO
======================================================*/

ctx.beginPath();
//ctx.arc(x, y, radius, startAngle, endAngle);
ctx.arc(300, 300, 60, 0, 2* Math.PI);
ctx.fillStyle = "green";
ctx.fill();

//CONTORNO CERCHIO
ctx.lineWidth = 5;
ctx.strokeStyle ="purple";
ctx.stroke();

/*=====================================================
LINEAS
======================================================*/

ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(200, 200);
ctx.lineTo(400, 200);
ctx.lineTo(600, 400);
ctx.lineTo(800, 200);
ctx.lineTo(1000, 200);
ctx.lineTo(1000, 0);
// Contorno linea
ctx.lineWidth = 5;
ctx.stroke();
//Riempimento linea
ctx.fillStyle = "rgba(0,0,255,.6)";
ctx.fill();

/*=====================================================
CURVA
======================================================*/

ctx.beginPath();
ctx.moveTo(0,500);

ctx.bezierCurveTo(200,300, 400, 400, 500, 500);

// Contorno curva
ctx.lineWidth = 5;
ctx.strokeStyle = 'rgba(100,0,0,1)';
ctx.stroke();

//Riempimento curva
ctx.fillStyle = 'rgba(255,0,0,1)';
ctx.fill();

/*=====================================================
GRADIENTE
======================================================*/
var grd = ctx.createLinearGradient(0,300,100,300);
grd.addColorStop(0, "red");
grd.addColorStop(1, "yellow");
ctx.fillStyle = grd;
ctx.fillRect(0,300, 100, 100);

var grd2 = ctx.createRadialGradient(890,350, 5, 900, 350, 120);
grd2.addColorStop(0, "white");
grd2.addColorStop(1, "black");
ctx.beginPath();
ctx.arc(900, 400, 100, 0, 7);
ctx.fillStyle = grd2;
ctx.fill();