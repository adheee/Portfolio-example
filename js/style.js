//nav-burger
$(".burger").click(function () {
  $(".nav-links").toggleClass("navbar-active");
});

//end nav-burger

// parallax
$(document).ready(function () {

  $('.page-scroll').on("click", function (e) {
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top - 100
    }, 1200);
    e.preventDefault();
  });
});

$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  $('.home img').css({
    'transform': 'translate(0px, ' + wScroll / 1 + '%)'
  });

  $('.home h1').css({
    'transform': 'translate(0px, ' + wScroll / 0.50 + '%)'
  });

  $('.home p').css({
    'transform': 'translate(0px, ' + wScroll / 0.20 + '%)'
  });

  $('.home .job').css({
    'transform': 'translate(0px, ' + wScroll / 0.30 + '%)'
  });

  $('.home ul').css({
    'transform': 'translate(0px, ' + wScroll / 1 + '%)'
  });
});
// end parallax

// wow animate
new WOW().init();
// end wow animate

// navbar scroll
$(window).scroll(function () {

  var scroll = $(window).scrollTop();

  if (scroll >= 100) {
    $("nav").addClass("navbar-scroll");
  } else {
    $("nav").removeClass("navbar-scroll");
  }
});
// end navbar scroll

// scroll top
$(window).scroll(function () {
  if ($(this).scrollTop() >= 500) {
    $('.scroll-to-top').fadeIn();
  } else {
    $('.scroll-to-top').fadeOut();
  }
});
//end scroll top


// preoader
$(document).ready(function () {
  $(".preload-wrapper").fadeOut()
});
// end preloader