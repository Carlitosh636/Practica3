
var modal = document.getElementById("modal");
var modalText = document.getElementById("modalText")
var modalImg = document.getElementById("modalImg")





var span = document.getElementsByClassName("close")[0];


function activateModal(text) {
  modal.style.display = "block";
  modalText.innerHTML=text
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
document.addEventListener('keydown',function(event){
  if (event.key == "Escape"){
    modal.style.display="none"
  }
})