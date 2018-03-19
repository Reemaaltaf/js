
//for scroll up button

$(document).ready(function(){

	//button display check
	$(window).scroll(function(){
		if ($(this).scrollTop() > 1200) {
			$('.goback').fadeIn();
		} else {
			$('.goback').fadeOut();
		}
	});

	//click event for scrolling up
	$('.goback').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

});
