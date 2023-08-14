(function ($) {
  
  $('ul.menu li').click(function (e) {
    target = $(this).attr('id');

    $('section').hide();
    $('section#'+target).show();
  });

  $('.job-title').click(function (e) {
    target = $(this).attr('id');

    if ($(this).hasClass("open")) {
      $('p#'+target+' .drawer-icon img').fadeOut(200, function() {
        $('p#'+target+' .drawer-icon img').attr('src', '_content/_images/arrow-down.svg');
      }).fadeIn(200);

      $(this).removeClass("open");
      $('#'+target+'-content').slideUp();
    } else {
      $('p#'+target+' .drawer-icon img')
        .fadeOut(200, function() {
            $('p#'+target+' .drawer-icon img').attr('src', '_content/_images/arrow-up.svg');
        })
        .fadeIn(200);

      $(this).addClass("open");
      $('#'+target+'-content').slideDown();
    }
  });

})(jQuery); // End of use strict