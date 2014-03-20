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
		
		
		var positionElementInPage = $('.display-bubble').offset().top;
		$(window).scroll(
			function() {
				if ($(window).scrollTop() >= 900) {
					// fixed
					$('.display-bubble').css('display', 'block').addClass("animated bounceIn");
				} else {
					// relative
					$('.display-bubble').css('display', 'none').removeClass("animated bounceIn");
				}
				
			}
		);