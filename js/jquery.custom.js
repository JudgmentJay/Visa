$(document).ready(() => {
	$('#headerNav li a').click(function() {
		$('#headerNav li a').removeClass('active');
		$(this).toggleClass('active');
		
		var bounds = $('#headerNav li a.active').offset();
		var width = $('#headerNav li a.active').outerWidth();

		$('#nav-indicator-bar').css('background-position', 2500 + bounds.left + width/2 - 15);

		$('#nav-indicator').css('left', bounds.left + width/2 - 15);
		$('#nav-indicator').addClass('visible');
	});
});

$(window).resize(function() {
	var bounds = $('#headerNav li a.active').offset();
	var width = $('#headerNav li a.active').outerWidth();

	$('#nav-indicator-bar').css('background-position', 2500 + bounds.left + width/2 - 15);

	$('#nav-indicator').css('left', bounds.left + width/2 - 15);
});