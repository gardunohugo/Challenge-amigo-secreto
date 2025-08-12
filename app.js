// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigosJs = [];


function agregarAmigo(){
    
    let amigoNuevoJs = document.getElementById("amigo").value;
    
    if ( amigoNuevoJs == ""){
            alert("Por favor inserte un nombre");
        } else {
            listaDeAmigosJs.push(amigoNuevoJs);
             amigo.value = "";
            console.log(listaDeAmigosJs);
        } 
    return agregaListaDeAmigos(listaDeAmigosJs);
    
}

function agregaListaDeAmigos(listaDeAmigosJs){

    const listaDeAmigosHtml = document.getElementById('listaAmigos');
    
    console.log(listaDeAmigosHtml);
    listaDeAmigosHtml.innerHTML = '';

    for (let i = 0; i < listaDeAmigosJs.length; i++){

            let nuevoAmigoHtml = document.createElement('li');
            listaDeAmigosHtml.innerHTML += `🔹${listaDeAmigosJs[i].toUpperCase()}<br>`;
            
    }
}
