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
});



