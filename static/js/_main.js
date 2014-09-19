// Sticks the homepage navbar to the top when scrolled past
function navFix(){
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

function history(){
  $(window).scroll(function(){
    var scroll = $(document).scrollLeft();
    var itemPosition = $("#two").offset()["left"];
    var width = $(window).width();

    if (scroll >= (itemPosition - (width / 2))){
      $('#two').addClass('show');
    }
    else {
      $('#two').removeClass('show');
    }
  });
};

function placeItems() {
  var data = $.getJSON("http://localhost:8888/static/data/history.json", function(data){
    // Placement of DIVs
    $.each(data, function(i){
      var divId = "div-" + (i+1);
      var divClass = "item";

      $(".history-container").append(
        '<div class="' + divClass + '" id="' + divId + '"></div>');

      $("#" + divId).append('<h1>' + data[i].title + '</h1>');
      $("#" + divId).append('<h3>' + data[i].date + '</h3>');
      $("#" + divId).append('<p>' + data[i].description + '</h3>');

      if (i === 0){
        $("#" + divId).css("opacity", "1");
      };
    });

    // Placement of SVGs (lines)
    $.each(data, function(i){
      var svgId = "svg-" + (i+1);
      var divId = "div-" + (i+1);
      var containerHeight = $(".history-container").height();
      var itemHeight = $("#" + divId).height() + 44;

      $(".history-container").append('<svg id="' + svgId + '"></svg>');
      $("#" + svgId).css("height", function(){
        return containerHeight - itemHeight + "px";
      });

      $("#" + svgId).append('<line x1="0" y1="0" x2="0" />');
      $("#" + svgId + " line").attr("y2", function(){
        return containerHeight - itemHeight;
      });

    //Date Scaling
    $.each(data, function(i){
      var svgId = "svg-" + (i+1);
      var divId = "div-" + (i+1);

      var firstDate = Math.abs(Date.parse(data[0].date));
      var lastDate = Date.parse(data[data.length-1].date);

      if (i === 0){
        $("#" + divId).css("left", "100px");
        $("#" + svgId).css("left", "100px");
      }
      else {
        var date = Date.parse(data[i].date)
        var calibratedDate = firstDate + date;
        var position = ((calibratedDate / lastDate) * $(".history-container").width()) + 100;

        $("#" + divId).css("left", position + "px");
        $("#" + svgId).css("left", position = "px");
      }
    });
    });
  });
};

$(function(){
  navFix();
  history();
  placeItems();
});
