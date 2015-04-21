/*$(document).ready(function() {
  $('.services-section').waypoint(function(event, direction) {
  }, {offset: 900});
});*/

$(document).ready(function(){


    $('.single-item').slick({
    slide: 'img',
    dots: true,
    speed: 500,
    arrows: true,
    appendArrows: $('img'),
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    });
    
    var animatedDivs = new Array()
    var i = 0
    $('.animate-waypoint').each(function() {
        animatedDivs[i] = $(this);
        i++;
    });
  

    for (i = 0; i < animatedDivs.length; i++) {
        var div = animatedDivs[i];
        div.waypoint({
            handler: function(direction) {
                if (direction == 'down') {// up, down, left, or right
                    applyEffect($(this));
                }
            },
            offset: 'bottom-in-view'
        });
    }




    function applyEffect(div) {
        var effect = div.data('animation');
        div.removeClass("transparent").addClass("opaque").addClass(effect);

    }

    autoPlayYouTubeModal();

  //FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
  function autoPlayYouTubeModal() {
      var trigger = $("body").find('[data-toggle="modal"]');
      trigger.click(function () {
          var theModal = $(this).data("target"),
              videoSRC = $(this).attr("data-theVideo"),
              videoSRCauto = videoSRC + "?autoplay=1";
          $(theModal + ' iframe').attr('src', videoSRCauto);
          $(theModal + ' button.close').click(function () {
              $(theModal + ' iframe').attr('src', videoSRC);
          });
      });
  }
});



