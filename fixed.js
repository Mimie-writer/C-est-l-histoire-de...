(function(){

    var scrollY = function () {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
        return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    }

        // Variables
        var element = document.querySelector('.menu')
        var rect = element.getBoundingClientRect()
        var top = rect.top + scrollY()
        var fake = document.createElement('div')
        fake.style.width = rect.width + "px"
        fake.style.height = rect.height + "px"
        // Fonctions
        var onScroll = function () { 
            var hasScrollClass = element.classList.contains('fixed')
            if (scrollY() > top && !hasScrollClass) {
                element.classList.add('fixed')
                element.style.width = rect.width + "px"
                element.parentNode.insertBefore(fake, element)
            }  else if (scrollY() < top && hasScrollClass){
                element.classList.remove('fixed')
                element.parentNode.removeChild(fake)
            }
        }

        var onresize = function () {
        element.style.width = "auto"
        element.classList.remove('fixed')
        fake.style.display = "none"
    rect = element.getBoundingClientRect()
    top = rect.top + scrollY() 
    fake.style.width = rect.width + "px"
    fake.style.height = rect.height + "px"
    fake.style.display = "block"
    onScroll()
    }

  // Listener
  window.addEventListener('scroll', onScroll)
  window.addEventListener('resize', onresize)


})() 

/* Lorsque l’utilisateur défile vers le bas, masquer la barre de navigation. 
Lorsque l’utilisateur défile vers le haut, afficher la barre de navigation */

/*var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById(".menu").style.top = "0";
  } else {
    document.getElementById(".menu").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}*/