var new_grass = "#86AC41";
var reflection = "#34675C";

function Recorrer() {
    var string = document.numeros.binario.value;
    console.log(string);
    var current = 1;
    var i = 0;
    var bandera = false;
    setInterval(function() {
        if (i < string.length) {
            console.log(string[i]);
            if (bandera) {
                switch (string[i]) {
                    case '0':
                        switch (current) {
                            case 1:
                                current = 2;
                                break;
                            case 2:
                                current = 1;
                                break;
                            default:
                                current = -1;
                                break;
                        }
                        break;
                    case '1':
                        switch (current) {
                            case 1:
                                current = 1;
                                break;
                            case 2:
                                current = 2;
                                break;
                            default:
                                current = -1;
                                break;
                        }
                        break;
                    default:
                        current = -1;
                        break;
                }

                i = i + 1;
            } else {
                bandera = true;
            }

            if (current == 1 || current == 2) {
                selector = "elemento";
                selector = selector + current;
                var elemento = document.getElementById(selector);
                console.log(elemento);
                console.log(selector);
                elemento.style.backgroundColor = new_grass;
            }




            setTimeout(function() {
                if (i == string.length) {
                    var resultado = document.getElementById("resultado");
                    var mensaje = "";
                    if (current == 1) {
                        mensaje = "ACEPTADO";
                    } else if (current == 2) {
                        mensaje = "RECHAZADO";
                    } else {
                        mensaje = "ERROR";
                    }
                    var ResultadosAnima = document.getElementById("resultado");
                    resultado.innerHTML = mensaje;
                    ResultadosAnima.className += " animar";
                    setTimeout(function() {
                        ResultadosAnima.className = "resultado";

                    }, 2000);
                }
                elemento.style.backgroundColor = reflection;

            }, 2000);


        }
    }, 3000);

}