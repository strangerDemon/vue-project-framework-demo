var degree = 0;
var maxtalk = 0;
var talkbubble = 1;
$(document).ready(function () {
  inputTextFix();
  $("div.bubble-options p.dog-bubble").each(function () {
    maxtalk++;
  });
});

function inputTextFix() {
  $("input[type='text'], input[type='password']").each(function () {
    $(this).click(function () {
      if ($(this).attr("value") != "") {
        $(this).attr("previous_value", $(this).attr("value"));
        $(this).attr("value", "");
      }
    });
    $(this).blur(function () {
      if ($(this).attr("value") == "")
        $(this).attr("value", $(this).attr("previous_value"));
    });
  });
}

function universalPreloader() {
  var pre = $("#universal-preloader>div");
  jQuery.fn.center = function () {
    this.css("position", "absolute");
    this.css("top", (($(window).height() - this.outerHeight()) / 2) + "px");
    this.css("left", (($(window).width() - this.outerWidth()) / 2) + "px");
    return this;
  }
  pre.center();
  $(window).resize(function () {
    pre.center();
  });
}

function universalPreloaderRemove() {
  var parentD = $("#universal-preloader");
  var pre = $("#universal-preloader>div");
  var logo = $("#universal-preloader .universal-preloader-logo");
  var loader = $("#universal-preloader .universal-preloader-preloader");
  pre.delay(1000).animate({
    opacity: '0'
  }, {
    duration: 400,
    complete: function () {
      parentD.animate({
        opacity: '0'
      }, {
        duration: 400,
        complete: function () {
          parentD.remove();
        }
      });
    }
  });
}

function dogTalk() {
  var timer = setTimeout(function () {
    $temp = "<p>" + $("div.bubble-options p.dog-bubble:nth-child(" + talkbubble + ")").html() + "</p>";
    $("div.dog-bubble").html($temp);
    if (talkbubble < maxtalk)
      talkbubble++;
    else
      talkbubble = 1;
    $(".dog-bubble").animate({
      "opacity": '1',
      "bottom": '10px'
    }, 400);
    setTimeout(function () {
      $(".dog-bubble").animate({
        "opacity": '0',
        "bottom": '0px'
      }, 400);
      dogTalk();
    }, 5000);
  }, 2000);
}

function rotate() {
  $planet = $("div.planet");
  $planet.css({
    'transform': 'rotate(' + degree + 'deg)'
  });
  $planet.css({
    WebkitTransform: 'rotate(' + degree * 2 + 'deg)'
  });
  $planet.css({
    '-moz-transform': 'rotate(' + degree + 'deg)'
  });
  $planet.css({
    '-ms-transform': 'rotate(' + degree + 'deg)'
  });
  $planet.css({
    '-o-transform': 'rotate(' + degree + 'deg)'
  });
  var timer = setTimeout(function () {
    degree -= 0.1;
    rotate();
  }, 10);
}

function dogRun() {
  var dog = $("div.dog");
  var timer2 = setTimeout(function () {
    if (dog.css("background-position") == "0px 0px")
      dog.css({
        "background-position": "-80px -2px"
      });
    else
      dog.css({
        "background-position": "0px 0px"
      });
    dogRun();
  }, 130);
}
