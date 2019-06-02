// JavaScript Document


<!--
  ////////////////////////
 ///JS HEADER FADEIN/////
////////////////////////-->    
    
    
$(window).scroll(function() {
    if ($(this).scrollTop() > $(window).height() - 100) {
        $( ".header #background" ).fadeIn();
    } else {
        console.log('there');
        $( ".header #background" ).fadeOut();
    }
});