$(function(){
  var $slide_box = $('.pick-content');
  var number = $slide_box.length;
  var prev = $('#prev');
  var next = $('#next');
  defalut_page = 4;
  current = 0
  

  function slider(index) {
    if (index < 0) {
      index = number - 1;
    }
    if (index > number - 1) {
      index = 0;
    }
    $slide_box.animate({
      left: '-210' * index + 'px'
    });
    current = index;

    for(i=0; i<number; i++){
      if(index == i){
        var pg_index = $('.progress-active').eq(i);
        $(pg_index).css('background','#000');
      }else {
        var pg_index = $('.progress-active').eq(i);
        $(pg_index).css('background','#fff');
      }
    }

  }


  prev.click(function(event) {
    event.preventDefault();
    if ($($slide_box).hasClass('active')){
      slider(current + 1);
    } 
  });

  next.click(function(event) {
    event.preventDefault();
    if ($($slide_box).hasClass('active')){
      slider(current - 1);
    } 
  });

  function timerStart() {
    start = setInterval(function(){
      slider(current + 1);
    }, 5000);
  }

  function timerStop() {
    clearInterval(start);
  }

  slider(current);
  timerStart();

  $slide_box.on({
    mouseover: timerStop,
    mouseout: timerStart
  });
  prev.on({
    mouseover: timerStop,
    mouseout: timerStart
  });
  next.on({
    mouseover: timerStop,
    mouseout: timerStart
  });

});