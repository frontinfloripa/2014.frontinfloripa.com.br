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
;
!
function () {
    var id, target, current, previous
 
    function step() {
        current = window.pageYOffset - (window.pageYOffset - target) / (target ? 5 : 2)
 
        document.body.scrollTop = current
        document.documentElement.scrollTop = current
 
        if (previous != current) {
            window.requestAnimationFrame(step)
        } else {
            document.location.hash = id
            delete step.runnig
        }
        previous = current
    }
 
    function handler(event) {
        event.preventDefault()
        id = this.getAttribute('href')
        if (id == '#') {
            target = 0;
        } else {
            target = document.querySelector(id).getBoundingClientRect().top + window.pageYOffset
        }
 
        if (!step.runnig) {
            previous = null
            step.runnig = true
            step()
        }
    }
 
    var links = document.querySelectorAll('a[href*="#"]');
    [].slice.call(links).forEach(function (link) {
        link.addEventListener('click', handler)
    })
}();

!function () {
  function ScrollSpy() {
    this.scrollLast = 0
    this.nav = document.querySelector('[data-nav]')
    this.active = null
  }

  ScrollSpy.prototype.init = function () {
    this.addEventListeners()
    this.updateSections()
  }

  ScrollSpy.prototype.updateSections = function () {
    var elements = document.querySelectorAll('header, section')
    this.sections = this.getSections(elements)
    this.nav_offset = this.nav.getBoundingClientRect().top + window.pageYOffset;
    this.menu()
  }

  ScrollSpy.prototype.getSections = function (elements) {
    return [].slice.call(elements).map(function (element) {
      return {
        id: element.id
      , offset: element.getBoundingClientRect().top + window.pageYOffset - 20
      }
    })
  }

  ScrollSpy.prototype.getActive = function () {
    var scroll = window.pageYOffset
      , section

    for (var i = 0, l = this.sections.length; i < l; i++) {
      this.sections[i].offset <= scroll && (section = this.sections[i])
    }
    return section.id
  }

  ScrollSpy.prototype.addEventListeners = function () {
    document.addEventListener('scroll', this.onScroll.bind(this))
    document.addEventListener('DOMContentLoaded', this.updateSections.bind(this))
    document.addEventListener('resize', this.updateSections.bind(this))
    window.addEventListener('load', this.updateSections.bind(this))
  }

  ScrollSpy.prototype.onScroll = function (event) {
    if ((Date.now() - this.scrollLast) > 50) {
      this.scrollLast = Date.now()
      this.menu()
    }
  }

  ScrollSpy.prototype.menu = function () {
    var id = this.getActive()
      , item = this.nav.querySelector('a[href="#' + id + '"]')

    this.active && this.active.classList.remove('active')
    item && item.classList.add('active')
    this.nav.classList[this.nav_offset < window.pageYOffset ? 'add' : 'remove']('main-menu-fixed')
    this.active = item
  }

  ;(new ScrollSpy).init()
}();