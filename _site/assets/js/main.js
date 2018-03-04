/*
** Document is ready
*/
$(document).ready(function(){

  /*
  **  Changes the body class to show / hide the mobile menu
  */
  function toggleMobileMenu() {

      console.log('Ready');

    // Check if the body has the "mobile-nav-visible" class
    if ($('body').hasClass('mobile-nav-visible')) {
      $('body').removeClass('mobile-nav-visible');
    } else {
      $('body').addClass('mobile-nav-visible');
    }

  }

  // Bind
  $(document).on('click', '#hamburger', toggleMobileMenu);

});

/*
** Document is ready and all assets (images, video's etc. etc.) are loaded
*/
$(window).on('load', function() {

  // Attach Flexslider to classname .flexslider
  $('.flexslider').flexslider({
    animation: "fade"
  });

});
