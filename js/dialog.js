
var modal = document.getElementById("modal");
var modalText = document.getElementById("dialog-title")
var modalDesc = document.getElementById("dialog-desc")
var modalImg = document.getElementById("dialog-img")
var disableHandle,tabHandle,lastFocus,hiddenHandle;
var span = document.getElementsByClassName("close")[0];


function activateModal(text,imgUrl,desc) {
  modal.style.display = "block";
  modalText.innerHTML=text;
  modalImg.src=imgUrl;
  modalDesc.innerText=desc;
  lastFocus = document.activeElement;
  disableHandle = ally.maintain.disabled({
    filter:modal,
  });
  tabHandle = ally.maintain.tabFocus({
    context: modal,
  });
  var element = ally.query.firstTabbable({
    context: modal,
    defaultToContext: true,
  });
  hiddenHandle = ally.maintain.hidden({
    filter: modal,
  });
  disableScroll();
  element.focus();
}
function deactivateModal(){
  disableHandle.disengage();
  tabHandle.disengage();
  hiddenHandle.disengage();
  lastFocus.focus();
  enableScroll();
  modal.style.display="none"
}

span.onclick = function() {
  deactivateModal()
}

window.onclick = function(event) {
  if (event.target == modal) {
    deactivateModal()
  }
}
document.addEventListener('keydown',function(event){
  if (event.key == "Escape"){
    deactivateModal()
  }
})

function disableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

      window.onscroll = function() {
          window.scrollTo(scrollLeft, scrollTop);
      };
}

function enableScroll() {
  window.onscroll = function() {};
}
