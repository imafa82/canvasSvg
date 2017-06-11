var canvas = document.querySelector("#lienzo");
var ctx = canvas.getContext("2d");
console.log("ctx", ctx);

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