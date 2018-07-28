AOS.init();

new Flickity( '#carousel-responsive', {
  draggable: true,
  autoPlay: 3000,
  prevNextButtons: false
});

new Flickity( '#carousel-features', {
  draggable: true,
  prevNextButtons: false,
  contain: true,
  groupCells: true
});