// Imports
import {Pelota} from "./classjs.js";
import {Rectangulo} from "./classjs.js";

// Creacion de objetos
var pelota = new Pelota(20, 300, 200);
var rect1 = new Rectangulo(30, 300, "rect1", "fill:rgb(102,204,255);stroke-width:3;stroke:rgb(0,0,0)");
var rect2 = new Rectangulo(750, 300, "rect2", "fill:rgb(255,80,80);stroke-width:3;stroke:rgb(0,0,0)");


//code module
var bucle = setInterval(() => {
    document.getElementById("player1").innerHTML = "Jugador1: " + pelota.cont1 + " - ";
    document.getElementById("player1").style.color = "#66CCFF";
    document.getElementById("player2").innerHTML = "Jugador2: " + pelota.cont2;
    document.getElementById("player2").style.color = "#FF5050";

    if (pelota.mover(rect1.rectx, rect1.recty, rect2.rectx, rect2.recty))
        clearInterval(bucle);
}, 22);

window.addEventListener("keypress", (event) => {

    var teclaImp = event.keyCode;
    console.log(teclaImp);

    if (teclaImp === 119 && rect1.recty > 0) {
        rect1.recty -= 25;
        document.getElementById("rect1").setAttribute("y", rect1.recty);
    }
    if (teclaImp === 115 && rect1.recty < 450) {
        rect1.recty += 25;
        document.getElementById("rect1").setAttribute("y", rect1.recty);
    }
    if (teclaImp === 105 && rect2.recty > 0) {
        rect2.recty -= 25;
        document.getElementById("rect2").setAttribute("y", rect2.recty);
    }
    if (teclaImp === 107 && rect2.recty < 450) {
        rect2.recty += 25;
        document.getElementById("rect2").setAttribute("y", rect2.recty);
    }

});
