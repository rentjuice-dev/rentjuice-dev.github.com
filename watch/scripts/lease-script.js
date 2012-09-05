$(function() {
	
});
var position = $(window).scrollTop(); // should start at 0
var iphoneVibrate = false;
var iphoneBump = false;

function vibratePhone() {
	$('#capture #iphone').animate({
		left: '91',
	}, {
		duration: 500, 
		easing: 'easeInOutElastic',
		complete: function() { // the callback
			$('#capture #iphone').animate({
				left:'90'
			}, {
				duration: 500, 
				easing: 'easeInOutElastic'
			});
		}
 	});
	iphoneVibrate = true;
}

function bumpPhone() {
	$('#capture #iphone').animate({
	    bottom: '0',
	  }, {
		duration: 500, 
		easing: 'easeOutExpo'
	  });
	iphoneBump = true;
}

$(document).ready(function(){
	$('#section-top #agent').css({'top':'100px','left':'320px','width':"0",'height':'0','opacity':'0'});
	$('#capture #iphone').css('bottom','-50px');
	$('#track #reminder-box').css({'width':'0px','height':'0px','opacity':"0",'overflow':'visible'});
	
	$('#buy #big-lead').css('bottom','370px');
	$('#buy #small-lead').css('bottom','370px');
	
	
	
	$(window).scroll(function() {
		
		/* Set positions for scrolling element */
		var bottom_position = new String("1490px");
		var fixed_position = new String("300px");
		var scroll_bottom = new String("1410");
		
		/* Set position as you scroll for scrolling element */
		if($(this).scrollTop() >= scroll_bottom)
		{
			$('#scrolling-graphic').css({'position':'absolute', 'top':bottom_position});
		} else if($(this).scrollTop() < scroll_bottom) {
			$('#scrolling-graphic').css({'position':'fixed', 'top':fixed_position});
		}
	
	
		/* Section Top */
		if($(this).scrollTop() >= 1)
		{
			$('#section-top #agent').css('opacity',"1").animate({
			    top: '30',
			    left: '240',
				width: '170',
				height: '170',
			  }, {
				duration: 500, 
				easing: 'easeOutExpo'
			  });
		}
		
		
		/* Section Top */
		if(($(this).scrollTop() >= 300) && iphoneBump==false)
		{
			bumpPhone();
		}
		
		
		
		/* On all your websites » Browser Screen Switcher */
		if(($(this).scrollTop() > 0) && ($(this).scrollTop() < 396))
		{
			$('#capture #iphone').removeClass().addClass('pre-iphone');
			$('#capture #check-mark').removeClass().addClass('pre-check-mark');
			iphoneVibrate = false;
		} else if(($(this).scrollTop() > 396) && ($(this).scrollTop() < 490))
		{
			$('#capture #iphone').removeClass().addClass('mid-iphone');
			if(iphoneVibrate==false){
				vibratePhone();
			}
			
		} else if($(this).scrollTop() > 490)
		{
			$('#capture #check-mark').removeClass().addClass('post-check-mark');
			$('#capture #iphone').removeClass().addClass('post-iphone');
			iphoneVibrate = false;
		}
		
		/* Track all their activities » Pop out */
		if($(this).scrollTop() >= 1000)
		{
			$('#track #reminder-box').animate({
			    width: '270px',
				height: '56px',
				opacity: '1',
			  }, {
				duration: 1000, 
				easing: 'easeOutExpo'
			  });
		}
		
		/* Track all their activities » Pop out */
		if($(this).scrollTop() >= 1400)
		{
			$('#approve #signature').removeClass().addClass('post-sig abs-img');
		}
		
		/* Capture New Leads » iPhone Bump */
		if($(this).scrollTop() >= 550)
		{
			$('#buy #big-lead').animate({
				bottom: '-40',
			}, {
				duration: 1000, 
				easing: 'easeOutElastic'
		 	});
			$('#buy #small-lead').animate({
				bottom: '240',
			}, {
				duration: 1200, 
				easing: 'easeOutElastic'
		 	});
		}
		
		/* Track all their activities » Pop out */
		if($(this).scrollTop() >= 1670)
		{
			$('#forms #form-papers').removeClass().addClass('post-form abs-img under');
		}
			
		
	});

});