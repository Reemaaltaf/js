//text styling using jQuery (used vanilla in style.js )
$(document).ready(function() {

$( document.body ).click(function() {
  $( "h1" ).each(function( i ) {
    if ( this.style.color !== "white" ) {
      this.style.color = "blue";
    }
    else {
      this.style.color = "red";
    }
  });
  $( "p" ).each(function( i ) {
    if ( this.style.color !== "black" ) {
      this.style.color = "brown";
    }
    else {
      this.style.color = "grey";
    }
  });
});
})
