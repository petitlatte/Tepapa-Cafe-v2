// NAVBAR FUNCTION 

$(window).scroll(function () {
  console.log($(window).scrollTop())
  if ($(window).scrollTop() > 63) {
    $('.navbar').addClass('navbar-fixed');
  }
  if ($(window).scrollTop() < 64) {
    $('.navbar').removeClass('navbar-fixed');
  }
});

//POP UP FUNCTION 

function popupFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

// MODAL BUG FIX
$(document).on('click', '.add', function() {
  $('#CartContainer').show();
});


//PROGRESS BAR

function barFunction() {
  var elem = document.getElementById("progress");   
  var width = 0;
  var id = setInterval(frameFunction, 1000);
  function frameFunction() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      document.getElementById("progress-number").innerHTML = width * 1  + '%';
    }
  }
}

