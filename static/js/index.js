// Sticks the homepage navbar to the top when scrolled past
function stickyBar(){
  var height = $(window).height();

  $(window).scroll(function(){
    var scroll = $(document).scrollTop();

    if (scroll >= (height)){
      $('nav').addClass('display');
    }
    else {
      $('nav').removeClass('display');
    }
  });
};

$(function(){
  stickyBar();
});
