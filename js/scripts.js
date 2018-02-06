$(function() {
	$('.nav-bar a').click(function () {
		$('.nav-bar a').removeClass('active');
		$(this).addClass('active');
	});
});