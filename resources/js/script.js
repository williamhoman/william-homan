$(document).ready(function() {

  // var waypoints = $('#options-only').waypoint({
  //   handler: function(direction) {
  //     notify(this.element.id + ' hit')
  //   }
  // })

  $('.js--section-me').waypoint(function(direction) {
      if (direction == "down") {
        $('nav').addClass('sticky');
      } else {
        $('nav').removeClass('sticky');
      }
  });

// Mobile Navigation

  $('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');

    nav.slideToggle(200);
  });



  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

});
