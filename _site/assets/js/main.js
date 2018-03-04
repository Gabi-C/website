/*
** Document is ready
*/
$(document).ready(function(){

  /*
  **  Changes the body class to show / hide the mobile menu
  */
  function toggleMobileMenu() {

    // Check if the body has the "mobile-nav-visible" class
    if ($('body').hasClass('mobile-nav-visible')) {
      $('body').removeClass('mobile-nav-visible');
    } else {
      $('body').addClass('mobile-nav-visible');
    }

  }

  /*
  **  Prevents default link behaviour
  */
  function preventDefault(event) {

    // Prevent default
    event.preventDefault();

  }

  // Initialise Accordion
  $('li.this-is-accordion').accordion({
    transitionSpeed: 300,
    transitionEasing: 'ease',
    singleOpen: false
  });

  // Bind
  $(document).on('click', '#hamburger', toggleMobileMenu);
  $(document).on('click', '#mobile-navigation a.just-drop-down', preventDefault);
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
