
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