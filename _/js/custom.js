//jQuery to collapse the navbar on scroll
$('#main-nav').hide();
$('div#footer').hide();
$(window).scroll(function () {
	if ($(this).scrollTop() > 319) {
		$('#main-nav').fadeIn();
		$('div#footer').fadeIn();
	} else {
		$('#main-nav').fadeOut();
		$('div#footer').fadeOut();
	}
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
	$('a.page-scroll').bind('click', function (event) {
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

// original public shared spreadsheet
//https://docs.google.com/spreadsheets/d/1FnkeQ4We3IqkcRs9cK7yqD12HeI7QixxkY3F1oab9yM/pubhtml?gid=1063007114&single=true
// note: the number prior to public, in this case 1 references the first spreadsheet in the file.
$(function () {	
	$.getJSON("https://spreadsheets.google.com/feeds/list/1UaWeCOYaX6LUaxw-3EMkcxDd_tJcHVbivQzbou7XETI/1/public/values?hl=en_US&alt=json", function( data) {
			var template = $('#spec-template').html();
				var info = Mustache.to_html(template, data.feed);
				$('#datadetails').html(info);
	});
});
