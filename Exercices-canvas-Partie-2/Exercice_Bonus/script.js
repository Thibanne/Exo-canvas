var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");

// E E2N
//
ctx.beginPath();
ctx.moveTo(40,100); // o
ctx.lineTo(80,100); // -
ctx.lineTo(78,105); // |
ctx.lineTo(45,105); // -
ctx.lineTo(41,145); // |
ctx.lineTo(76,145); // -
ctx.lineTo(74,150); // |
ctx.lineTo(40,150); // -
ctx.lineTo(37,190); // |
ctx.lineTo(72,190); // -
ctx.lineTo(70,195); // |
ctx.lineTo(30,195); // -
ctx.closePath();
ctx.fillStyle = "#3c3c3c";
ctx.fill();

// N E2N
//
ctx.beginPath();
ctx.moveTo(165,100); // o
ctx.lineTo(170,100); // -
ctx.lineTo(207,185); // \
ctx.lineTo(220,100); // |
ctx.lineTo(225,100); // -
ctx.lineTo(210,195); // |
ctx.lineTo(205,195); // -
ctx.lineTo(168,110); // \
ctx.lineTo(155,195); // |
ctx.lineTo(150,195); // -
ctx.closePath();
ctx.fillStyle = "#3c3c3c";
ctx.fill();

// 2 E2N
//
// P0 -> P4
ctx.beginPath();
ctx.lineWidth="3";
ctx.strokeStyle="#ffffff";
// ctx.fillStyle="#e84e1c";
ctx.moveTo(70,130);
//             // | P2,| | P3, | | P4,| | P5,|
ctx.bezierCurveTo(120,10,273,100,50,250,50,250);
ctx.stroke();
// ctx.fill();
//
// // P4 -> P8
ctx.beginPath();
ctx.lineWidth="3";
ctx.strokeStyle="#ffffff";
// ctx.fillStyle="#e84e1c";
ctx.moveTo(50,250);
//             // | P6, | | P7, | | P8,| | P9,|
ctx.bezierCurveTo(120,230,110,240,110,240,110,240);
ctx.stroke();
// ctx.fill();
// //
// // P8 -> P12
// ctx.beginPath();
// ctx.lineWidth="3";
// ctx.strokeStyle="#ffffff";
// // ctx.fillStyle="#e84e1c";
// ctx.moveTo(20,180);
// //             // | P9,| |P10| |P11,| |P12,|
// ctx.bezierCurveTo(40,170,90,95,140,50,120,40);
// ctx.stroke();
// // ctx.fill();
// //
// // P12 -> P14
// ctx.beginPath();
// ctx.lineWidth="3";
// ctx.strokeStyle="#ffffff";
// // ctx.fillStyle="#e84e1c";
// ctx.moveTo(120,40);
// //                // |P13| |P14|
// ctx.quadraticCurveTo(90,70,70,80);
// ctx.stroke();
// // ctx.fill();
