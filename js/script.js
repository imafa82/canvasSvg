var contenitore = document.querySelector("#contenitore");
var ampliarLienzo = document.querySelector("#lienzo");
var btnAmpliar = document.querySelector('#btnAmpliar');
var ampliarControl = true;
btnAmpliar.onclick = controlAmpliar;

function controlAmpliar(){
    if(ampliarControl){
        ampliar();
    } else {
        reducir();
    }
}
function ampliar(){
    contenitore.style.width = "100%";
    contenitore.style.height = "100vh";
    contenitore.style.margin = "0";

    ampliarLienzo.style.width = "100%";
    ampliarLienzo.style.height = "100vh";
    ampliarLienzo.style.backgroundSize = "cover";
    ampliarLienzo.style.backgroundRepeat = "no-repeat";

    btnAmpliar.innerHTML = "Ridurre Canvas";
    btnAmpliar.style.position = "fixed";
    btnAmpliar.style.top = "10px";
    btnAmpliar.style.left = "10px";
    btnAmpliar.style.zIndex = "1";
    ampliarControl = false;
}

function reducir(){
    contenitore.style.width = "1000px";
    contenitore.style.height = "500px";
    contenitore.style.margin = "5vh auto";

    ampliarLienzo.style.width = "1000px";
    ampliarLienzo.style.height = "500px";
    
    btnAmpliar.innerHTML = "Ingrandire Canvas";
    btnAmpliar.style.position = "relative";
    btnAmpliar.style.top = "0";
    btnAmpliar.style.left = "0";
    btnAmpliar.style.zIndex = "0";
    ampliarControl = true;
}