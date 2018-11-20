export class Pelota {

    constructor(radio, x, y) {
        this.r = radio;
        this.bolax = x;
        this.bolay = y;
        this.d = 5;
        this.dx = this.d;
        this.dy = this.d;
        this.cont1 = 0;
        this.cont2 = 0;

        // creacion the tags
        this.miTag = document.createElementNS("http://www.w3.org/2000/svg", "circle");

        //bola
        this.miTag.setAttribute("id", "pelota");
        this.miTag.setAttribute("cx", this.bolax);
        this.miTag.setAttribute("cy", this.bolay);
        this.miTag.setAttribute("r", this.r);
        this.miTag.setAttribute("stroke", "black");
        this.miTag.setAttribute("stroke-width", "3");
        this.miTag.setAttribute("fill", "#ffcc66");

        //add html
        document.getElementById("campo").appendChild(this.miTag);

    }

    mover(rect1x, rect1y, rect2x, rect2y) {
        if (this.checkGolaso()) {
            return true;
        } else if (this.checkposition(rect1x, rect1y, rect2x, rect2y)) {
            console.log("BOING!");
        } else if (this.bolay + this.r >= 600) {
            this.dy = -this.d;
        }

        if (this.bolay - this.r <= 0) {
            this.dy = this.d;
        }

        if (this.bolax + this.r >= 800) {
            this.dx = -this.d;
        }

        if (this.bolax - this.r <= 0) {
            this.dx = this.d;
        }

        this.bolax += this.dx;
        this.bolay += this.dy;

        this.miTag.setAttribute("cx", this.bolax);
        this.miTag.setAttribute("cy", this.bolay);
    }

    checkposition(rect1x, rect1y, rect2x, rect2y) {

        if (this.bolax === 20 + 30) {

            if (this.bolay >= rect1y && this.bolay <= rect1y + 150) {
                this.dx = this.d;
                return true;
            }
        } else if (this.bolax === 720 + 20) {

            if (this.bolay >= rect2y && this.bolay <= rect2y + 150) {
                this.dx = -this.d;
                return true;
            }
        }
        return false;
    }

    setCoord() {
        this.bolax = 300;
        this.bolay = 200;
        this.miTag.setAttribute("cx", this.bolax);
        this.miTag.setAttribute("cy", this.bolay);
    }

    checkGolaso() {

        if (this.bolax - this.r === 0) {
            this.cont2++;
            this.setCoord();
            console.log("Contador1= " + this.cont1);
            return false;

        } else if (this.bolax + this.r === 800) {
            this.cont1++;
            this.setCoord();
            console.log("Contador2= " + this.cont2);
            return false;
        }

        if (this.cont1 !== 5 || this.cont2 !== 5) {
            if (this.cont1 === 5) {
                console.log("EL JUGADOR 1 HA GANADO!");
                document.getElementById("player1").innerHTML = "EL JUGADOR 1 HA GANADO LA PARTIDA!";
                document.getElementById("player2").innerHTML = "";
                document.getElementById("player1").style.color = "#66CCFF";
                document.getElementById("player1").style.fontSize = "30-large";
                return true;
            }
            if (this.cont2 === 5) {
                console.log("EL JUGADOR 2 HA GANADO!");
                document.getElementById("player1").innerHTML = "EL JUGADOR 2 HA GANADO LA PARTIDA!";
                document.getElementById("player2").innerHTML = "";
                document.getElementById("player1").style.color = "#FF5050";
                document.getElementById("player1").style.fontSize = "30-large";
                return true;
            }
        }
    }
}

export class Rectangulo {

    constructor(x, y, id, style) {
        this.rectx = x;
        this.recty = y;
        this.id = id;

        // creacion de tags
        this.mirect = document.createElementNS("http://www.w3.org/2000/svg", "rect");

        // rectangulo
        this.mirect.setAttribute("id", this.id);
        this.mirect.setAttribute("x", this.rectx);
        this.mirect.setAttribute("y", this.recty);
        this.mirect.setAttribute("width", "15");
        this.mirect.setAttribute("height", "150");
        this.mirect.setAttribute("style", style);

        // add html
        document.getElementById("campo").appendChild(this.mirect);

    }
}
