$(document).ready(function() {

  $bodyScroll = $("body, html");

  $(".scroll-link").on("click", function( e ) {
    e.preventDefault();
    $bodyScroll.animate({ 
        scrollTop: $( $(this).attr('href') ).offset().top 
    }, 1500, "easeInOutCubic");
  });

});