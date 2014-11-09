//jQuery to collapse the navbar on scroll
$('#main-nav').hide();
$('div#footer').hide();
$(window).scroll(function() {
	if ($(this).scrollTop() > 400)
	{
		$('#main-nav').fadeIn();
		$('div#footer').fadeIn();
	}
	else
	{
		$('#main-nav').fadeOut();
		$('div#footer').fadeOut();
	}
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
	$('a.page-scroll').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
    });
	});

$(function () {
		  $(".navbar-toggle").on("click", function () {
			    $(this).toggleClass("active");					
		  });
	});