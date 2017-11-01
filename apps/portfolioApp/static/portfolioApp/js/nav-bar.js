
$(document).ready(function(){
  function openNav() {
    if ($( document ).width() < 500 ){
      document.getElementById("mySidenav").style.width = "120px";

    }
    else {
      document.getElementById("mySidenav").style.width = "120px";
      document.getElementById("main").style.marginRight = "120px";
    }



  }

  function closeNav() {
    if ($( document ).width() < 500 ){
      document.getElementById("mySidenav").style.width = "0";
    }
    else {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginRight= "0";
    }


  }
  $('#list-icon').click(function() {
    openNav();
    $('#list-icon').fadeOut(500)
  })
  $('.closebtn').click(function() {
    closeNav();
    $('#list-icon').fadeIn(1000)
  })

  $('#one').hover(function() {
    $('#one span').css({
      'display': 'inherit'
    });
  }, function(){
    $('#one span').css({
      'display': 'none'
    });
  });

  $('#two').hover(function() {
    $('#two span').css({
      'display': 'inherit'
    });
  }, function(){
    $('#two span').css({
      'display': 'none'
    });
  });

  $('#three').hover(function() {
    $('#three span').css({
      'display': 'inherit'
    });
  }, function(){
    $('#three span').css({
      'display': 'none'
    });
  });

  $('#four').hover(function() {
    $('#four span').css({
      'display': 'inherit'
    });
  }, function(){
    $('#four span').css({
      'display': 'none'
    });
  });

  $('#five').hover(function() {
    $('#five span').css({
      'display': 'inherit'
    });
  }, function(){
    $('#five span').css({
      'display': 'none'
    });
  });
})
