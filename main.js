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



// var meta = JSON.parse('https://epic.gsfc.nasa.gov/api/natural');

// $.ajax('https://epic.gsfc.nasa.gov/api/natural', {
//         success : function(iDataArr, stat, xhr) {
//             // do something with the list
//         }
//     });
$(document).ready(function (){
    $.ajax({
        method: "GET",
        url: "https://epic.gsfc.nasa.gov/api/natural",
    }).done(function (respuestaImg){
        
    })
}) 