window.loadGoogleMaps = function () {

    var mapStyle = [
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#404548"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#404548"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#404548"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#404548"
                },
                {
                    "lightness": 29
                },
                {
                    "weight": 0.2
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#404548"
                },
                {
                    "lightness": 18
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#404548"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#404548"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#404548"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "saturation": 36
                },
                {
                    "color": "#404548"
                },
                {
                    "lightness": 50
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#404548"
                },
                {
                    "lightness": 19
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#404548"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#404548"
                },
                {
                    "lightness": 17
                },
                {
                    "weight": 1.2
                }
            ]
        }
    ];

    var latlng = new google.maps.LatLng(-27.549372,-48.490355);
     
    var options = {
        zoom: 15,
        center: latlng,
        scrollwheel: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        overviewMapControl: false,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        backgroundColor: '#6e767b',
        styles: mapStyle
    };

    var map = new google.maps.Map(document.getElementById('map'), options);
     
    var marker1 = new google.maps.Marker({
        position: new google.maps.LatLng(-27.548041, -48.498655),
        map: map
    });
};
;// 21 Dez 2012, 4:42
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