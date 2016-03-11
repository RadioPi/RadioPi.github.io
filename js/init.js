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
    }, 500, function(){
		console.log('done');
    });
    return false;
});

$('.header a').click(function() {
	$(`a[href=${$.attr(this, 'href')}`).addClass('active');
});

$(document).ready(function() {
    $('.tooltip').tooltipster();
}).on('scroll', onScroll);


function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.menu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.menu ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}