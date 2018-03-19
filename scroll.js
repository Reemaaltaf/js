//scrolling function. linking menu list to relevant content

$(document).ready(function() {

$("#postOne").click(function() {
    $('html, body').animate({
        scrollTop: $("#Lean").offset().top
    }, 2000);
});
$("#postTwo").click(function() {
    $('html, body').animate({
        scrollTop: $("#Agila-metoder").offset().top
    }, 2000);
});
$("#postThree").click(function() {
    $('html, body').animate({
        scrollTop: $("#Projektmetodiken").offset().top
    }, 2000);
});

})
