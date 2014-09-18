// Sticks the homepage navbar to the top when scrolled past
function navAppear(){
  var height = $(window).height();
  var navHeight = $("nav").height();

  $(window).scroll(function(){
    var scroll = $(document).scrollTop();

    if (scroll >= (height)) {
      $('nav').addClass('fixed');
      $('#first').css("top", function(){
        return navHeight + "px";
      });
    }
    else {
      $('nav').removeClass('fixed');
      $('#first').css("top", "0px");
    }
  });
};

$(function(){
  navAppear();
});
