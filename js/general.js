




/*
     FILE ARCHIVED ON 14:31:26 Dec 24, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:02:18 May 13, 2016.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
//SLIDESHOW
jQuery(document).ready(function(){
    jQuery('.slider_container').cycle({
        fx: 'fade',
		next: '#slider .next', 
    	prev: '#slider .prev',
		pager: '#slider .pages',
		pause: true,
		pauseOnPagerHover: true,
		containerResize: false,
		slideResize: false,
		fit: 1
    });
});

//SLIDESHOW IN PORTFOLIO PAGE
jQuery(document).ready(function(){
    jQuery('.portfolio .slides ul').cycle({
        fx: 'fade',
		pager: '.portfolio .pages',
		pause: true,
		pauseOnPagerHover: true,
		containerResize: false,
		slideResize: false,
		fit: 1,
		after: AfterPortfolioSlide
    });	
});

function AfterPortfolioSlide(curr, next, opts, fwd) {
	var ht = jQuery(this).height();
	jQuery(this).parent().animate({height: ht});
}