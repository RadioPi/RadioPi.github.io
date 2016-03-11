$( document ).ready(function() {
	var topBar = $('.topBar');
	var win = $(window);
	var winH = win.height() - 50;
	var winW = win.width();

	win.on("scroll", function() {
		if(winW > 640){
			if($(this).scrollTop() > winH) {
				topBar.addClass('topBar-fixed');
				topBar.removeClass('topBar');
			} else {
				topBar.removeClass('topBar-fixed');
				topBar.addClass('topBar');
			}
		} else {
			topBar.addClass('topBar');
		}
	}).on("resize", function(){
		winH = $(this).height() - 50;
		winW = win.width();
	});
});

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 50
    }, 500);
    return false;
});

$(document).ready(function() {
    $('.tooltip').tooltipster();
});
