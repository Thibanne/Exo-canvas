var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");

// sauvegarde
ctx.save()
// Toit de la maison
//
// déplace au centre du rectangle
ctx.translate(200, 0);
// rotation
ctx.rotate((Math.PI / 180) * 45);
// Définition de la couleur de remplissage
ctx.fillStyle = "#ce8539";
// Position X, position Y, largeur, hauteur
ctx.fillRect(0,0,150,150);
// Remplissage du dernier chemin tracé

// restauration à la sauvegarde précédente
ctx.restore();
ctx.save();
// Mur de la maison
//
ctx.fillStyle = "#a9d7e6";
ctx.fillRect(94,106,212,212);

// Fenêtre gauche de la maison
//
ctx.fillStyle = "#c9c9c9";
ctx.fillRect(114,126,40,40);


// Fenêtre droite de la maison
//
ctx.fillStyle = "#c9c9c9";
ctx.fillRect(244,126,40,40);


// Porte de la maison
//
ctx.fillStyle = "#c9c9c9";
ctx.fillRect(169,238,60,80);
