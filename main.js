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