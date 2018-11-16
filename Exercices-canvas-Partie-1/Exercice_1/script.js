var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");

// Toit de la maison
//
// Début du chemin
ctx.beginPath();
// Le tracé part du point 200,50
ctx.moveTo(200,50);
// Un segment est ajouté vers 300,120
ctx.lineTo(300,120);
// Un segment est ajouté vers 100,120
ctx.lineTo(100,120);
// Fermeture du chemin
ctx.closePath();
// Définition de la couleur de remplissage
ctx.fillStyle = "#ce8539";
// Remplissage du dernier chemin tracé
ctx.fill();

// Mur de la maison
//
ctx.beginPath();
ctx.moveTo(100,120);
ctx.lineTo(300,120);
ctx.lineTo(300,300);
ctx.lineTo(100,300);
ctx.closePath();
ctx.fillStyle = "#a9d7e6";
ctx.fill();

// Fenêtre gauche de la maison
//
ctx.beginPath();
ctx.moveTo(120,140);
ctx.lineTo(160,140);
ctx.lineTo(160,180);
ctx.lineTo(120,180);
ctx.closePath();
ctx.fillStyle = "#c9c9c9";
ctx.fill();

// Fenêtre droite de la maison
//
ctx.beginPath();
ctx.moveTo(240,140);
ctx.lineTo(280,140);
ctx.lineTo(280,180);
ctx.lineTo(240,180);
ctx.closePath();
ctx.fillStyle = "#c9c9c9";
ctx.fill();

// Porte de la maison
//
ctx.beginPath();
ctx.moveTo(170,230);
ctx.lineTo(230,230);
ctx.lineTo(230,300);
ctx.lineTo(170,300);
ctx.closePath();
ctx.fillStyle = "#c9c9c9";
ctx.fill();
