var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");

// Courbe de la glace
//
ctx.beginPath();
// taille de la ligne
ctx.lineWidth="3";
// couleur de la ligne
ctx.strokeStyle="#8a0908";
ctx.fillStyle="#8a0908";
// position de départ
ctx.moveTo(52,200);
// première position (x,y), seconde (x,y), troisième (x,y), etc...
ctx.bezierCurveTo(55,180,90,150,98,200);
ctx.stroke();
ctx.fill();


// Cône de la glace
//
ctx.beginPath();
ctx.moveTo(100,200);
ctx.lineTo(75,300);
ctx.lineTo(50,200);
ctx.closePath();
ctx.fillStyle = "#aa6522";
ctx.fill();
