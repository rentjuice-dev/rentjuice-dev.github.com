$(function() {
	
});

$(document).ready(function(){
	
	$('#alerts #alert-phone').removeClass().addClass('abs-img pre-phone over');
	$('#alerts #alert-clock').removeClass().addClass('abs-img pre-clock under');
	$('#in-touch #intouch-alert').css('opacity', '0');
	$('#in-touch #mail').removeClass().addClass('abs-img pre-mail under');
	
	$(window).scroll(function() {
		
		/* Set positions for scrolling element */
		var bottom_position = new String("1165px");
		var fixed_position = new String("250px");
		var scroll_bottom = new String("1130");
		
		/* Set position as you scroll for scrolling element */
		if($(this).scrollTop() >= scroll_bottom)
		{
			$('#scrolling-graphic').css({'position':'absolute','top':bottom_position});
		} else if($(this).scrollTop() < scroll_bottom) {
			$('#scrolling-graphic').css({'position':'fixed','top':fixed_position});
		}
		
		/* Alert Section » iPhone Bump */
		if($(this).scrollTop() < 395)
		{
			$('#alerts #alert-phone').removeClass().addClass('abs-img pre-phone over');
			$('#alerts #alert-clock').removeClass().addClass('abs-img pre-clock under');
		} else if ($(this).scrollTop() >= 395)
		{
			$('#alerts #alert-phone').removeClass().addClass('abs-img post-phone over');
			$('#alerts #alert-clock').removeClass().addClass('abs-img post-clock under');
		}
		
		/* Capture New Leads » iPhone Bump */
		if(($(this).scrollTop() > 0) && ($(this).scrollTop() < 657))
		{
			$('#in-touch #intouch-alert').css('opacity', '0');
			$('#in-touch #mail').removeClass().addClass('abs-img pre-mail under');
		} else if (($(this).scrollTop() > 657) && ($(this).scrollTop() < 846))
		{
			$('#in-touch #intouch-alert').css('opacity', '1');
			$('#in-touch #mail').removeClass().addClass('abs-img mid-mail under');
		} else if ($(this).scrollTop() > 846)
		{
			$('#in-touch #intouch-alert').css('opacity', '1');
			$('#in-touch #mail').removeClass().addClass('abs-img post-mail under');
		}
	
	});

});