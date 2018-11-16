var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");

// sauvegarde
ctx.save()
// forme de la voiture
//
ctx.beginPath();
ctx.moveTo(70,150);
ctx.lineTo(120,150);
ctx.lineTo(120,100);
ctx.lineTo(320,100);
ctx.lineTo(320,150);
ctx.lineTo(370,150);
ctx.lineTo(370,200);
ctx.lineTo(70,200);
ctx.closePath();
ctx.fillStyle = "#00b251";
ctx.fill();

// roue gauche de la voiture
//
ctx.beginPath();
ctx.arc(100,235,35,0,Math.PI*2,true);
ctx.strokeStyle = "#5c5c5c";
ctx.fillStyle = "#cdcdcd";
ctx.fill();
ctx.stroke();

// roue gauche de la voiture
//
ctx.beginPath();
ctx.arc(340,235,35,0,Math.PI*2,true);
ctx.strokeStyle = "#5c5c5c";
ctx.fillStyle = "#cdcdcd";
ctx.fill();
ctx.stroke();
