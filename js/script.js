$(function(){
  $('#mainnav ul a').on('click', function(){
    var winW = $(window).width();
    if (winW > 800){
      var headerH =0;
    }
    else{
      var headerH =70;
    }
    
    var $el = $(this),
        id = $el.attr('href');
     $('html, body').animate({
       scrollTop: $(id).offset().top - headerH
     }, 500);
    if (winW < 890){
      $('#menuWrap').next().slideToggle();
      $('#menuBtn').removeClass('close');
    }
     return false;
  });
  
  $('.panel').hide();
  $('#menu').on('click', function(){
    var $el = $('#menuBtn');
    if ($el.hasClass('close'))
    {
      $el.removeClass('close');
    }
    else
    {
      $el.toggleClass('close');
    }
    $('#menuWrap').next().slideToggle();
  });
});
