var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");

// Corps de 'ti biscuit
//
ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(300,100);
ctx.lineTo(300,120);
ctx.lineTo(230,120);
ctx.lineTo(230,250);
ctx.lineTo(210,250);
ctx.lineTo(210,210);
ctx.lineTo(190,210);
ctx.lineTo(190,250);
ctx.lineTo(170,250);
ctx.lineTo(170,120);
ctx.lineTo(100,120);
ctx.closePath();
ctx.fillStyle = "#976f0f";
ctx.fill();

// Cheveux du joker
//
ctx.beginPath();
ctx.lineWidth="1";
ctx.moveTo(170,90);
ctx.lineTo(155,87);
ctx.lineTo(165,80);
ctx.lineTo(150,75);
ctx.lineTo(165,70);
ctx.lineTo(150,62);
ctx.lineTo(170,60);
ctx.lineTo(155,48);
ctx.lineTo(180,50);
ctx.lineTo(170,36);
ctx.lineTo(200,40);
ctx.closePath();
ctx.fillStyle = "#008958";
ctx.strokeStyle="#ffffff";
ctx.stroke();
ctx.fill();

// Tête de 'ti biscuit
//
ctx.beginPath();
ctx.arc(200,75,35,0,Math.PI*2,true);
ctx.fillStyle = "#976f0f";
ctx.fill();


// Main droite de 'ti biscuit
//
ctx.beginPath();
ctx.lineWidth="1";
ctx.fillStyle="#976f0f";
ctx.moveTo(300,100);
ctx.quadraticCurveTo(320,110,300,120);
ctx.fill();

// Main gauche de 'ti biscuit
//
ctx.beginPath();
ctx.lineWidth="1";
ctx.fillStyle="#976f0f";
ctx.moveTo(100,100);
ctx.quadraticCurveTo(80,110,100,120);
ctx.fill();

// Pied droit de 'ti biscuit
//
ctx.beginPath();
ctx.lineWidth="1";
ctx.fillStyle="#976f0f";
ctx.moveTo(230,250);
ctx.quadraticCurveTo(220,260,210,250);
ctx.fill();

// Pied gauche de 'ti biscuit
//
ctx.beginPath();
ctx.lineWidth="1";
ctx.fillStyle="#976f0f";
ctx.moveTo(190,250);
ctx.quadraticCurveTo(180,260,170,250);
ctx.fill();

// Ceinture de 'ti biscuit
//
ctx.beginPath();
ctx.lineWidth="1";
ctx.fillStyle="#ffffff";
ctx.moveTo(210,210);
ctx.quadraticCurveTo(200,200,190,210);
ctx.fill();

// N'oeil droit de 'ti biscuit
//
ctx.beginPath();
ctx.arc(213,67,7,0,Math.PI*2,true);
ctx.fillStyle = "#ffffff";
ctx.fill();

// N'oeil gauche de 'ti biscuit
//
ctx.beginPath();
ctx.arc(187,67,7,0,Math.PI*2,true);
ctx.fillStyle = "#ffffff";
ctx.fill();

// Sourcil droit de 'ti biscuit
//
ctx.beginPath();
ctx.lineWidth="1";
ctx.strokeStyle="#ffffff";
ctx.moveTo(180,55);
ctx.quadraticCurveTo(187,47,194,55);
ctx.stroke();

// Sourcil gauche de 'ti biscuit
//
ctx.beginPath();
ctx.lineWidth="1";
ctx.strokeStyle="#ffffff";
ctx.moveTo(206,55);
ctx.quadraticCurveTo(213,47,220,55);
ctx.stroke();

// sourire du Joker 1
//
ctx.beginPath();
ctx.lineWidth="1";
ctx.strokeStyle="#f70801";
ctx.moveTo(180,85);
ctx.quadraticCurveTo(167,78,170,65);
ctx.stroke();

// sourire du Joker 1
//
ctx.beginPath();
ctx.lineWidth="1";
ctx.strokeStyle="#f70801";
ctx.moveTo(220,85);
ctx.quadraticCurveTo(233,78,230,65);
ctx.stroke();

// Lèvre haut de 'ti biscuit
//
ctx.beginPath();
ctx.lineWidth="1";
ctx.strokeStyle="#f70801";
ctx.moveTo(180,85);
ctx.quadraticCurveTo(200,95,220,85);
ctx.stroke();

// Lèvre bas de 'ti biscuit
//
ctx.beginPath();
ctx.lineWidth="1";
ctx.strokeStyle="#f70801";
ctx.moveTo(180,85);
ctx.quadraticCurveTo(200,110,220,85);
ctx.stroke();

// Boutton haut de 'ti biscuit
//
ctx.beginPath();
ctx.arc(200,130,5,0,Math.PI*2,true);
ctx.fillStyle = "#7a2976";
ctx.fill();

// Boutton bas de 'ti biscuit
//
ctx.beginPath();
ctx.arc(200,155,5,0,Math.PI*2,true);
ctx.fillStyle = "#7a2976";
ctx.fill();
