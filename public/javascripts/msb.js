(function ($) {

  $('.menu-tab').click(function(){
    $('.menu-hide').toggleClass('show');
    $('.menu-tab').toggleClass('active');
  });

  $('.menu-hide > ul > li > a').click(function(){
    $('.menu-hide').removeClass('show');
    $('.menu-tab').removeClass('active');
  });
  
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

})(jQuery); // End of use strict