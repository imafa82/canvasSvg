var canvas = document.querySelector("#lienzo");
var ctx = canvas.getContext('2d');
var alfa = 0.50;

//Cielo

var grd = ctx.createLinearGradient(0,0,0,600);
grd.addColorStop(0,"rgba(0,0,255,"+alfa+")");
grd.addColorStop(1, "white");
ctx.fillStyle = grd;
ctx.fillRect(0,0,1000,500);


//Oceano

var grd2 = ctx.createLinearGradient(0,400,0,500);
grd2.addColorStop(0,"rgba(0,0,255,"+alfa+")");
grd2.addColorStop(1, "white");
ctx.fillStyle = grd2;
ctx.fillRect(0,400,1000,100);


//Montagna 1
ctx.beginPath();
ctx.fillStyle = "rgba(100,0,255,"+alfa+")";
ctx.moveTo(0,400);
ctx.lineTo(200,100);
ctx.lineTo(400,400);
ctx.fill();

//Montagna 2
ctx.beginPath();
ctx.fillStyle = "rgba(100,0,255,"+alfa+")";
ctx.moveTo(200,400);
ctx.lineTo(400,100);
ctx.lineTo(600,400);
ctx.fill();

//Montagna 3
ctx.beginPath();
ctx.fillStyle = "rgba(100,0,255,"+alfa+")";
ctx.moveTo(400,400);
ctx.lineTo(600,100);
ctx.lineTo(800,400);
ctx.fill();

//Montagna 4
ctx.beginPath();
ctx.fillStyle = "rgba(100,0,255,"+alfa+")";
ctx.moveTo(600,400);
ctx.lineTo(800,100);
ctx.lineTo(1000,400);
ctx.fill();

// Neve Montagna 1
ctx.beginPath();
ctx.fillStyle = "rgba(255, 255, 255, "+alfa+")";
ctx.moveTo(133, 200);
ctx.lineTo(200, 100);
ctx.lineTo(200, 300);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "rgba(210, 210, 255, "+alfa+")";
ctx.moveTo(200, 300);
ctx.lineTo(200, 100);
ctx.lineTo(267, 200);
ctx.fill();

// Neve Montagna 2
ctx.beginPath();
ctx.fillStyle = "rgba(255, 255, 255, "+alfa+")";
ctx.moveTo(333, 200);
ctx.lineTo(400, 100);
ctx.lineTo(400, 300);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "rgba(210, 210, 255, "+alfa+")";
ctx.moveTo(400, 300);
ctx.lineTo(400, 100);
ctx.lineTo(467, 200);
ctx.fill();

// Neve Montagna 3
ctx.beginPath();
ctx.fillStyle = "rgba(255, 255, 255, "+alfa+")";
ctx.moveTo(533, 200);
ctx.lineTo(600, 100);
ctx.lineTo(600, 300);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "rgba(210, 210, 255, "+alfa+")";
ctx.moveTo(600, 300);
ctx.lineTo(600, 100);
ctx.lineTo(667, 200);
ctx.fill();

// Neve Montagna 4
ctx.beginPath();
ctx.fillStyle = "rgba(255, 255, 255, "+alfa+")";
ctx.moveTo(733, 200);
ctx.lineTo(800, 100);
ctx.lineTo(800, 300);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "rgba(210, 210, 255, "+alfa+")";
ctx.moveTo(800, 300);
ctx.lineTo(800, 100);
ctx.lineTo(867, 200);
ctx.fill();


//Monte 1

ctx.beginPath();
ctx.fillStyle = "rgba(10, 0, 150, "+alfa+")";
ctx.moveTo(0,400);
ctx.lineTo(200,300);
ctx.lineTo(200,450);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "rgba(10, 0, 100, "+alfa+")";
ctx.moveTo(200,450);
ctx.lineTo(200,300);
ctx.lineTo(400,400);
ctx.fill();

//Monte 2

ctx.beginPath();
ctx.fillStyle = "rgba(10, 0, 150, "+alfa+")";
ctx.moveTo(600,400);
ctx.lineTo(800,300);
ctx.lineTo(800,450);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "rgba(10, 0, 100, "+alfa+")";
ctx.moveTo(800,450);
ctx.lineTo(800,300);
ctx.lineTo(1000,400);
ctx.fill();