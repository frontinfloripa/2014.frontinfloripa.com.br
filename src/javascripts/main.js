// 21 Dez 2012, 4:42
;(function ($, window, document, undefined) {
	'use strict';
	({
		animateScroll : function () {
			$(".main-menu").find('.main-menu-link').on('click', function (event) {

				var $this = $(this),
					$htmlBody = $('html, body'),
					linkTarget = $this.attr('href'),
					offSetTop;

				// If not start with #, stop here!
				if (linkTarget[0] !== '#') {
					return false;
				}

				event.preventDefault();

				// Get distance of top
				offSetTop = $(linkTarget).offset().top;

				// Animate the scroll
				$htmlBody.stop().animate({scrollTop : offSetTop}, function () {
					location.hash = linkTarget;
				});
			});
		},

		init : function () {
			var that = this;

			$(function () {
				that.animateScroll();
			});
		}
	}).init();
}(jQuery, window, document));

var mainMenu = $('.main-menu'),
    mainMenuFixed = 'main-menu-fixed'
    headerSize = $('.header').height()
    bodyOffset = $(window).scrollTop();
 
$(window).scroll(function () {
    if ($(this).scrollTop() > headerSize + 190) {
        mainMenu.addClass(mainMenuFixed);
    } else {
        mainMenu.removeClass(mainMenuFixed);
    }
});

if (bodyOffset > headerSize + 190) {
    mainMenu.addClass(mainMenuFixed);
}