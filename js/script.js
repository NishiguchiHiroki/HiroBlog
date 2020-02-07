
$(function(){


  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
  });
  
  var windowWidth = parseInt(window.innerWidth);
  var replaceWidth = 1024;
  var ipad_replaceWidth = 820;
  var sp_replaceWidth = 414;
  if(windowWidth <= replaceWidth) {
    var mySwiper = new Swiper ('.swiper-container', {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 38,
      pagination: '.swiper-pagination',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev'
    });
  }else if(windowWidth <= ipad_replaceWidth){
    var mySwiper = new Swiper ('.swiper-container', {
      loop: true,
      slidesPerView: 4,
      spaceBetween: 0,
      pagination: '.swiper-pagination',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev'
  });
}else if(windowWidth <= sp_replaceWidth){
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 25,
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
  });
}

  (function($) {
    var $body   = $('body');
    var $btn   = $('.toggle_btn');
    var $mask  = $('#mask');
    var open   = 'open'; // class
    // menu open close
    $btn.on( 'click', function() {
      if ( ! $body.hasClass( open ) ) {
        $body.addClass( open );
      } else {
        $body.removeClass( open );
      }
    });
    // mask close
    $mask.on('click', function() {
      $body.removeClass( open );
    });
  } )(jQuery);
  
  });