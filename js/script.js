window.onscroll = function() {fixedNavFunction()};

var header = document.getElementById("stickynav");
var sticky = header.offsetTop;

function fixedNavFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}