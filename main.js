$(document).ready(function () {
	$('.nav ul li').hover(function () {
		$('ul', this).stop().slideDown(100);
	},
	function() {
		$('ul', this).stop().slideUp(100);
	}
);
});