// Sticks the homepage navbar to the top when scrolled past
function navAppear(){
  var height = $(window).height();

  $(window).scroll(function(){
    var scroll = $(document).scrollTop();

    if (scroll >= (height/2)) {
      $('nav').addClass('display');
    }
    else {
      $('nav').removeClass('display');
    }
  });
};

$(function(){
  navAppear();
  console.log($(window).height());
  console.log($("header").height());
  console.log($("main").height());
  console.log($("main").offset());

  var height = $(window).height();
});
