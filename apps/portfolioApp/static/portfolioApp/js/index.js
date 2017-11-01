
$(document).ready(function(){
  $(".learn-more").click(function() {
    $('html,body').animate({
      scrollTop: $(".second-half").offset().top},
      'slow');
    });
  $('.front-button').click(function() {
    $('.front-end').fadeIn(2000)
    $('.back-end').css({
      'display' : 'none',
    })
    $('.front-button').css({
      'background-color': '#0055A2',
      'color': 'white'
    })
    $('#back-button').css({
      'background-color': 'white',
      'color': '#0055A2'
    })
  })
  $('#back-button').click(function(e) {
    $('.back-end').fadeIn(2000)
    $('.front-end').css({
      'display' : 'none',
    })
    $('.front-button').css({
      'background-color': 'white',
      'color': '#0055A2'
    })
    $('#back-button').css({
      'background-color': '#0055A2',
      'color': 'white'
    })
  })

})
