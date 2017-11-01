$(document).ready(function() {

  $('img').hover(function() {

    // get the alt-source
    var altSrc = $(this).attr('data-alt-src');
    var temp = $(this).attr('src');

    // Swap
    $(this).attr('src', altSrc);
    $(this).attr('data-alt-src', temp);

  });

});
