function topNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

var elem = document.querySelector('.carousel');
var flkty = new Flickity( elem, {
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
    fullscreen: true,
});
