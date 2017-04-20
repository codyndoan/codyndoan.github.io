var distance = 0;
var top_menuOpen = false;
var bot_menuOpen = false;
var index = 0;
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'white'];
var interval;

/* Sticky Nav */
$(window).scroll(function(e){ 
  distance = $(this).scrollTop();
  var $el = $('.nav-bar'); 
  var isPositionFixed = ($el.css('position') == 'fixed');
  /* Opacity greeting */
  $(".stars").css({'display': 'block','margin-top': (300-distance)});
  $(".stars").css({'display': 'block', 'margin-left': distance*3});
  $(".stars").css({'opacity': distance/300});
  $(".stars").css({'border-bottom-left-radius': 400-distance});
  $(".stars").css({'border-bottom-right-radius': distance*2});
  if ($(this).scrollTop() > 200 && !isPositionFixed){ 
    $(".greeting2").css({'opacity': '.5'});
  }
  if ($(this).scrollTop() < 200 && !isPositionFixed){ 
    $(".greeting2").css({'opacity': '1'});
  }
  /* Sticky Menu and Buffer Smoother */
  if ($(this).scrollTop() > 730 && !isPositionFixed){  
    $(".nav-bar").removeClass("unstick");
    $(".nav-bar").addClass("stick");
    $(".nav-bar").removeClass("fadeInUp");
    $(".nav-bar").addClass("fadeInDown");
    $(".bg2").addClass("bg2-stick");
    $(".pic").addClass("pic-show");
    $(".menu").css({'background': 'rgba(0,0,0, .95)'});
    document.getElementById("arrow").src = "images/arrow-up.png";
    document.getElementById('portfolio').style.height = '225px';
  }
  if ($(this).scrollTop() < 730 && isPositionFixed){
    $(".nav-bar").removeClass("stick");
    $(".nav-bar").addClass("unstick");
    $(".nav-bar").removeClass("fadeInDown");
    //$(".nav-bar").addClass("fadeInUp");
    $(".menu").css({'background': 'rgba(0,0,0, .75)'});
    document.getElementById("arrow").src = "images/arrow-down.png";
    document.getElementById('portfolio').style.height = '150px';
  } 
});

/* Color Cycle */
function cycleColors() {
    interval = setInterval(function () {
        document.getElementById('caption2').style.color = colors[index%8];
        document.getElementById('caption3').style.color = colors[index%8 + 1];
        document.getElementById('caption4').style.color = colors[index%8 + 2];
        index++;
    }, 50);
}

/* Menu Logic */
$(function() {
    $("#menu-btn").click(function() {
      if (distance < 600) {
        top_menuOpen = !top_menuOpen;
        if (bot_menuOpen) {
            $(".menu").removeClass("menu-bottom");
            $(".greeting2").removeClass("greeting2-change");
            bot_menuOpen = false;
        }
          
        if(top_menuOpen) {
            document.getElementById('caption').innerHTML = 'my stuff';
            clearInterval(interval);
            cycleColors();
        } else {
            document.getElementById('caption').innerHTML = 'welcome';
            clearInterval(interval);
        }
        $(".bio").toggleClass("bio-change");
        $(".menu").toggleClass("menu-top");
        $(".list").toggleClass("list-change");
        $(".greeting2").toggleClass("greeting2-change");
      } else {
        bot_menuOpen = !bot_menuOpen;
        if (top_menuOpen) {
            $(".menu").removeClass("menu-top");
            $(".list").removeClass("list-change");
            $(".greeting2").removeClass("greeting2-change");
            document.getElementById('caption').innerHTML = 'welcome';
            clearInterval(interval);
            top_menuOpen = false;
        }
        //$(".menu").toggleClass("menu-bottom");
        
        /* fixed menu change */
        $(".bio").toggleClass("bio-change");
        $(".menu").toggleClass("menu-top");
        $(".list").toggleClass("list-change");
        $(".greeting2").toggleClass("greeting2-change");
          
        if(bot_menuOpen) {
            document.getElementById('caption').innerHTML = 'my stuff';
            clearInterval(interval);
            cycleColors();
        } else {
            document.getElementById('caption').innerHTML = 'welcome';
            clearInterval(interval);
        }
        //$(".greeting2").toggleClass("greeting2-change");
      }
    });
});


/* Dismiss Menu Functions */
$(function() {
  $("#cover").click(function() {
      bot_menuOpen = false;
      top_menuOpen = false;
      $(".greeting2").removeClass("greeting2-change");
      $(".menu").removeClass("menu-bottom");
      $(".menu").removeClass("menu-top");
      $(".list").removeClass("list-change");
      if(top_menuOpen && !bot_menuOpen) {
            document.getElementById('caption').innerHTML = 'my stuff';
      } else {
            document.getElementById('caption').innerHTML = 'welcome';
            clearInterval(interval);
      } 
  });
});
$(function() {
  $("#cover2").click(function() {
      bot_menuOpen = false;
      top_menuOpen = false;
      $(".greeting2").removeClass("greeting2-change");
      $(".menu").removeClass("menu-bottom");
      $(".menu").removeClass("menu-top");
      $(".list").removeClass("list-change");
      if(top_menuOpen && !bot_menuOpen) {
            document.getElementById('caption').innerHTML = 'my stuff';
      } else {
            document.getElementById('caption').innerHTML = 'welcome';
            clearInterval(interval);
      }  
  });
});


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});