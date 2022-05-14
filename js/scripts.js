
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

var buttonTop = document.getElementById("upButton");

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    buttonTop.style.display = "block";
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
    buttonTop.style.display = "none";
  }
}

function topFunction(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}