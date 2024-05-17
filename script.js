// topNav
function topNav() {
    var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// Get the button:
let mybutton = document.getElementById("top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

// Flickity
var galleryElems = document.querySelectorAll('.carousel');

for ( var i=0, len = galleryElems.length; i < len; i++ ) {
    var galleryElem = galleryElems[i];
    new Flickity( galleryElem, {
        // options
        cellAlign: 'center',
        contain: true,
        pageDots: false,
        wrapAround: true,
        autoPlay: true,
        autoPlay: 1500,
        selectedAttraction: 0.01,
        friction: 0.15,
        cellSelector: '.carousel-cell',
        lazyLoad: 3
  });
}
