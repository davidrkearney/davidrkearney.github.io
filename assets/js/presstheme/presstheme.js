(function($) {
	
	$('.hamburger-menu-icon').on('click', function() {

		$(this).toggleClass('active');
		$(this).parent().find('.hamburger-menu-content').toggle();

	});
	

})(jQuery);
