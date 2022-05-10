var prev = document.getElementById("prev")
var date = document.getElementById("prevDate")
var desti = document.getElementById("prevDestin")
var texto = document.getElementById("prevText")
var metaText = document.getElementById("prevMeta")
var prevButton = document.getElementById("prevButton")
var destino = document.getElementById("destino")
var prevImg = document.getElementById("prevImg")
var textoSet = document.getElementById("texto")
var destiSet = document.getElementById("destinatario")
var metaSet = document.getElementById("direccion")

var today = new Date();
var currDate;
function getDate(){
    currDate = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
    date.innerHTML=currDate
}
function setText(text){
    if(text==''){
        text="Texto de la postal"
    }
    texto.innerHTML=text
}
function setDest(dest){
    if(dest==''){
        dest="Persona"
    }
    desti.innerHTML=dest
}
function setMeta(meta){
    if(meta==''){
        meta="C/XXXX NºY Código Postal, Provincia"
    }
    metaText.innerHTML=meta
}
function setImg(img){
    prevImg.src=img
}
function activatePrev(){
    prev.style.display='block'
    prev.setAttribute('aria-hidden','false')
    setText(textoSet.value)
    setDest(destiSet.value)
    setMeta(metaSet.value)
    setImg(destino.value)
}
window.addEventListener('load',getDate());

