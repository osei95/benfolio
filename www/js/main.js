		// listen for scroll
		var positionElementInPage = $('#controllers-fixed').offset().top;
		$(window).scroll(
			function() {
				if ($(window).scrollTop() >= 30) {
					// fixed
					$('#controllers-fixed').addClass("floatable");
				} else {
					// relative
					$('#controllers-fixed').removeClass("floatable");
				}
			}
		);