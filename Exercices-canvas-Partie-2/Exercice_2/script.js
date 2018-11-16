var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");

// Vitre OVNI
//
ctx.beginPath();
ctx.lineWidth="1";
ctx.fillStyle="#ffffff";
ctx.moveTo(160,180);
ctx.quadraticCurveTo(200,100,240,180);
ctx.fill();

// haut OVNI
//
ctx.beginPath();
ctx.lineWidth="1";
ctx.fillStyle="#e0e1f3";
ctx.moveTo(100,200);
ctx.quadraticCurveTo(200,135,300,200);
ctx.fill();

// bas OVNI
//
ctx.beginPath();
ctx.lineWidth="1";
ctx.fillStyle="#e0e1f3";
ctx.moveTo(100,200);
ctx.quadraticCurveTo(200,265,300,200);
ctx.fill();
