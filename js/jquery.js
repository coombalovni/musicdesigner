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
});



