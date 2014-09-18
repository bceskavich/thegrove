// Sticks the homepage navbar to the top when scrolled past
function navAppear(){
  var height = $(window).height();

  $(window).scroll(function(){
    var scroll = $(document).scrollTop();

    if (scroll >= (height)) {
      $('nav').addClass('fixed');
    }
    else {
      $('nav').removeClass('fixed');
    }
  });
};

$(function(){
  navAppear();
});
