(function(global, $) { var

	$win, jpScreen, aptOne, aptTwo, scrollingGraphic,
	dataEntryCircle, dataEntryAptOne, dataEntryAptTwo,
	directoryAptOne, directoryAptTwo, sectionTopBrowserScreen,
	sectionTopIcon, websitesBrowserScreen, websitesIcon,
	bottom_position = '1880px', fixed_position = '300px', scroll_bottom = '1800';
	
	function onScroll() {
		var topPos = $win.scrollTop();

		/* Set position as you scroll for scrolling element */
		if(topPos >= scroll_bottom) {
			scrollingGraphic.css({'position':'absolute','top':bottom_position})
		} else if(topPos < scroll_bottom) {
			scrollingGraphic.css({'position':'fixed','top':fixed_position})
		}
		
		/* Market Section Top » Browser Screen Switcher */
		if((topPos > 0) && (topPos < 70)) {
			sectionTopBrowserScreen.removeClass().addClass('facebook');
			sectionTopIcon.removeClass().addClass('abs-img over facebook');
		} else if((topPos > 70) && (topPos < 140)) {
			sectionTopBrowserScreen.removeClass().addClass('zillow');
			sectionTopIcon.removeClass().addClass('abs-img over zillow');
		} else if((topPos > 140) && (topPos < 210)) {
			sectionTopBrowserScreen.removeClass().addClass('trulia');
			sectionTopIcon.removeClass().addClass('abs-img over trulia');
		} else if(topPos > 210) {
			sectionTopBrowserScreen.removeClass().addClass('craigslist');
			sectionTopIcon.removeClass().addClass('abs-img over craigslist');
		}
		
		/* 'All of Your Lisitngs' Rules */
		if(topPos >= 280) {
			dataEntryAptOne.css('opacity', '1').animate({
				top: '0',
				left: '180',
				width: '120',
				height: '120',
			  }, {
				duration: 300, 
				easing: 'swing',
				complete: function() { // the callback
					dataEntryAptTwo.animate({
						top: '100',
						left: '260',
						width: '150',
						height: '150',
					}, {
						duration: 500, 
						easing: 'swing'
					});
				}
			  });
			dataEntryAptTwo.css('opacity', '1');
		}
		
		/* 'And listings from around town' Rules */
		if(topPos >= 660) {
			directoryAptOne.animate({
				top: '0',
			  }, {
				duration: 1000, 
				easing: 'easeOutElastic',
			  });
			directoryAptTwo.animate({
				top: '170',
			  }, {
				duration: 1200, 
				easing: 'easeOutElastic',
			  });
		}
		
		/* On all your websites » Browser Screen Switcher */
		if((topPos > 0) && (topPos < 1030)) {
			websitesBrowserScreen.removeClass().addClass('rentsfnow');
			websitesIcon.css('opacity', '0');
		} else if((topPos > 1030) && (topPos < 1250)) {
			websitesBrowserScreen.removeClass().addClass('hotpads');
			websitesIcon.removeClass().addClass('abs-img over hotpads').css('opacity', '1');
		} else if(topPos > 1250) {
			websitesBrowserScreen.removeClass().addClass('facebook');
			websitesIcon.removeClass().addClass('abs-img over facebook').css('opacity', '1');
		}
		
		/* Even if you dont... » Browser Screen Switcher */
		if((topPos > 0) && (topPos < 1300)) {
			jpScreen.removeClass().addClass('pre-juice');
		} else if((topPos > 1300) && (topPos < 1400)) {
			jpScreen.removeClass().addClass('mid-juice');
		} else if (topPos > 1400) {
			jpScreen.removeClass().addClass('post-juice');
		}
	}

	function setupPage() {
		jpScreen.removeClass().addClass('pre-juice');
		aptOne.css('top', '-180px');
		aptTwo.css('top', '-180px');
		dataEntryCircle.css({'top':'190px','left':'180px','width':"0",'height':'0','opacity':"0"});
	}

	function cacheSelectors() {
		$win = $(global);
		jpScreen = $('#juicepress #screen');
		aptOne = $('#directory #apt-one');
		aptTwo = $('#directory #apt-two');
		scrollingGraphic = $('#scrolling-graphic');

		dataEntryCircle = $('#data-entry .circle');
		dataEntryAptOne = $('#data-entry #apt-one');
		dataEntryAptTwo = $('#data-entry #apt-two');

		directoryAptOne = $('#directory #apt-one');
		directoryAptTwo = $('#directory #apt-two');

		websitesBrowserScreen = $('#websites #browser #screen');
		websitesIcon = $('#websites #icon');

		// section top
		sectionTopBrowserScreen = $('#section-top #browser #screen');
		sectionTopIcon = $('#section-top #icon');
	}

	function init() {
		cacheSelectors();
		setupPage();
		$win.scroll(onScroll);
	}

	$(init);
})(window, jQuery);
