(function ($) {
  
  $('.job-title').click(function (e) {
    target = $(this).attr('id');
    console.log(target)

    if ($(this).hasClass("open")) {
      $('p#'+target+' .drawer-icon img').fadeOut(200, function() {
        $('p#'+target+' .drawer-icon img').attr('src', '../images/arrow-down.svg');
      }).fadeIn(200);

      $(this).removeClass("open");
      $('#'+target+'-content').slideUp();
    } else {
      $('p#'+target+' .drawer-icon img')
        .fadeOut(200, function() {
            $('p#'+target+' .drawer-icon img').attr('src', '../images/arrow-up.svg');
        })
        .fadeIn(200);

      $(this).addClass("open");
      $('#'+target+'-content').slideDown();
    }
  });

  $('.soc-icon').hover(function (e) {
      $(this).next().slideToggle();
      return false;
  });

})(jQuery); // End of use strict