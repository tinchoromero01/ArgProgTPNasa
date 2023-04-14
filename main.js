let detector = 1;
function miBoton() {
    let btn = document.getElementById("boton");
    var elemento = document.getElementById("elementos");
    if (detector === 1) {
        btn.innerHTML = "<i  class='material-icons'>menu_open</i > ";
        elemento.style.display = "block";
        detector = 0;
    } else {
        btn.innerHTML = "<i  class='material-icons'>menu</i > ";
        elemento.style.display = "none";

        detector = 1;
    }

}


