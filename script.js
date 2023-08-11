//cargo en un arreglo las imganes de las banderas. Este sera el orden que se mostrarán
let pinguinos = ["Adelia.png", "Africano.png", "Barbijo.png", "Emperador.png", "Fiordo.png", 
                "Macaroni.png", "Papua.png", "Zelanda.png"];

//arreglo que guardara la opcion correcta
let correcta = [2,2,1,1,0,1,2,0];

//arreglo que guardara los paises a mostrar en cada jugada
let opciones = [];
//cargo en el arreglo opciones las opciones a mostrar en cada jugada
opciones.push(["Pingüino de Ojos Amarillos", "Pingüino real", "Pingüino de Adelia"]);
opciones.push(["Pingüino de Fiordland", "Pingüino Azul", "Pingüino Africano"]);
opciones.push(["Pingüino de Magallanes", "Pingüino Barbijo", "Pingüino de Adelia"]);
opciones.push(["Pingüino Rey", "Pingüino Emperador", "Pingüino de Humboldt"]);
opciones.push(["Pingüino de Fiordland", "Pingüino Real", "Pingüino Africano"]);
opciones.push(["Pingüino de Magallanes", "Pingüino Macaroni", "Pingüino de Adelia"]);
opciones.push(["Pingüino Rey", "Pingüino Emperador", "Pingüino Gentoo o Papúa"]);
opciones.push(["Pingüino Azul", "Pingüino Real", "Pingüino Africano"]);

//variable que guarda la posicion actual
let posActual = 0;
//variable que guarda la cantidad acertadas hasta el moemento
let cantidadAcertadas = 0;

function comenzarJuego(){
    //reseteamos las variables
    posActual = 0;
    cantidadAcertadas = 0;
    //activamos las pantallas necesarias
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarPinguino();

}

//funcion que carga la siguiente bandera y sus opciones
function cargarPinguino(){
    //controlo sis se acabaron las banderas
    if(pinguinos.length <= posActual){
        terminarJuego();
    }
    else{//cargo las opciones
        //limpiamos las clases que se asignaron
        limpiarOpciones();

        document.getElementById("imgPinguino").src = "Imagenes/especies/" + pinguinos[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}

function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";

    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
}

function comprobarRespuesta(opElegida){
    if(opElegida==correcta[posActual]){//acertó
        //agregamos las clases para colocar el color verde a la opcion elegida
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    }else{//no acerto
        //agramos las clases para colocar en rojo la opcion elegida
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";

        //opcion que era correcta
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    //Esperamos 1 segundo y pasamos mostrar la siguiente bandera y sus opciones
    setTimeout(cargarPinguino,500);
}
function terminarJuego(){
    //ocultamos las pantallas y mostramos la pantalla final
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    //agreamos los resultados
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = pinguinos.length - cantidadAcertadas;
}

function volverAlInicio(){
    //ocultamos las pantallas y activamos la inicial
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}