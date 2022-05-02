var date = document.getElementById("prevDate")
var desti = document.getElementById("prevDestin")
var texto = document.getElementById("prevText")
var metaText = document.getElementById("prevMeta")

var today = new Date();
var currDate;
function getDate(){
    currDate = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
    date.innerHTML=currDate
}
function liveText(text){
    if(text==''){
        text="Texto de la postal"
    }
    texto.innerHTML=text
}
function liveDest(dest){
    if(dest==''){
        dest="Persona"
    }
    desti.innerHTML=dest
}
function liveMeta(meta){
    if(meta==''){
        meta="C/XXXX NºY Código Postal, Provincia"
    }
    metaText.innerHTML=meta
}

window.addEventListener('load',getDate());