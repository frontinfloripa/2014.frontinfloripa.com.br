// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
      
    var mapStyle = [
        {
            "stylers": [
                {
                    "hue": "#69797e"
                },
                {
                    "invert_lightness": true
                },
                {
                    "saturation": -100
                },
                {
                    "lightness": 33
                },
                {
                    "gamma": 0.5
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#69797e"
                }
            ]
        }
    ];

    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        zoom: 15,

        center: new google.maps.LatLng(-27.548041, -48.498655),

        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,

        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        overviewMapControl: false,
        backgroundColor: "transparent",


        //styles: mapStyle

    };

    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
}


var mainMenu = $('.main-menu'),
    mainMenuFixed = 'main-menu-fixed'
    headerSize = $('.header').height()
    bodyOffset = $(window).scrollTop();
 
$(window).scroll(function () {
    if ($(this).scrollTop() > headerSize + 180) {
        mainMenu.addClass(mainMenuFixed);
    } else {
        mainMenu.removeClass(mainMenuFixed);
    }
});

if (bodyOffset > headerSize + 180) {
    mainMenu.addClass(mainMenuFixed);
}