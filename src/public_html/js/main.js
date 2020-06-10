/*
	Barber Shop Theme Scripts
*/

(function($){ "use strict";

    $(window).on('load', function() {
        $('body').addClass('loaded');
    });

/*=========================================================================
    	Sticky Header
=========================================================================*/
    $(function() {
        var header = $("#header"),
            yOffset = 0,
            triggerPoint = 100;
        $(window).on( 'scroll', function() {
            yOffset = $(window).scrollTop();

            if (yOffset >= triggerPoint) {
            	header.removeClass("animated fadeIn");
                header.addClass("navbar-fixed-top animated fadeInDown");
            } else {
                header.removeClass("navbar-fixed-top animated fadeInDown");
                header.addClass("animated fadeIn");
            }

        });
    });
/*=========================================================================
        Vdeo Background
=========================================================================*/
    $(".video_bg").YTPlayer();

/*=========================================================================
    Main Slider
=========================================================================*/
    $('#main-slider').owlCarousel({
        loop:true,
        autoplay: true,
        smartSpeed: 500,
        autoplayTimeout: 12000,
        autoplayHoverPause: true,
        items: 1,
        nav:true,
        navText: ['<i class="arrow_carrot-left"></i>', '<i class="arrow_carrot-right"></i>']
    });

    $("#main-slider").on("translate.owl.carousel", function(){
        $(".main_slide .slider_content h3").removeClass("animated fadeInUp").css("opacity", "0");
        $(".main_slide .slider_content h1").removeClass("animated fadeInUp").css("opacity", "0");
        $(".main_slide .slider_content p, .main_slide .slider_content .btn_group").removeClass("animated fadeInUp").css("opacity", "0");
    });

    $("#main-slider").on("translated.owl.carousel", function(){
        $(".main_slide .slider_content h3").addClass("animated fadeInUp").css("opacity", "1");
        $(".main_slide .slider_content h1").addClass("animated fadeInUp").css("opacity", "1");
        $(".main_slide .slider_content p, .main_slide .slider_content .btn_group").addClass("animated fadeInUp").css("opacity", "1");
    });

/*=========================================================================
    Gallery Slider
=========================================================================*/
    $('#gallery-slide').owlCarousel({
        loop:true,
        autoplay: true,
        smartSpeed: 500,
        items: 1,
        dots: false,
        nav:true,
        navText: ['<i class="arrow_carrot-left"></i>', '<i class="arrow_carrot-right"></i>']
    });

/*=========================================================================
        Mobile Menu
=========================================================================*/
    $(function(){
        $('#mainmenu').slicknav({
            prependTo: '.navbar-right',
            label: '',
            allowParentLinks: true
        });
    });

/*=========================================================================
    Isotope Active
=========================================================================*/
	$('.portfolio_items').imagesLoaded( function() {

		 // Add isotope click function
		$('.gallery_filter li').on( 'click', function(){
	        $(".gallery_filter li").removeClass("active");
	        $(this).addClass("active");

	        var selector = $(this).attr('data-filter');
	        $(".portfolio_items").isotope({
	            filter: selector,
	            animationOptions: {
	                duration: 750,
	                easing: 'linear',
	                queue: false,
	            }
	        });
	        return false;
	    });

	    $(".portfolio_items").isotope({
	        itemSelector: '.single_item',
	        layoutMode: 'fitRows',
	    });
	});


/*=========================================================================
        Initialize smoothscroll plugin
=========================================================================*/
	smoothScroll.init({
		offset: 60
	});


/*=========================================================================
        Testimonial Carousel
=========================================================================*/
	$('#testimonial_carousel').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 500,
        items: 1,
        nav: false
    });


 /*=========================================================================
    Food Carousel
=========================================================================*/
    $('#food_carousel').imagesLoaded( function() {
    	$('#food_carousel').owlCarousel({
            loop: true,
            margin: 10,
            autoplay: true,
            smartSpeed: 500,
            nav: false,
            dots: false,
            responsive : {
			    0 : {
			        items: 1
			    },
			    480 : {
			        items: 3,
			    },
			    768 : {
			        items: 4,
			    }
			}
        });
    });


/*=========================================================================
        Sponsor Carousel
=========================================================================*/
    $('#sponsor_carousel').imagesLoaded( function() {
    	$('#sponsor_carousel').owlCarousel({
            loop: true,
            margin: 10,
            autoplay: true,
            smartSpeed: 500,
            nav: false,
            dots: false,
            responsive : {
			    0 : {
			        items: 2
			    },
			    480 : {
			        items: 3,
			    },
			    768 : {
			        items: 6,
			    }
			}
        });
    });

/*=========================================================================
        Active venobox
=========================================================================*/
	$('.img_popup').venobox({
		numeratio: true,
		infinigall: true
	});

/*=========================================================================
  Scroll To Top
=========================================================================*/
    $(window).on( 'scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });

/*=========================================================================
       MAILCHIMP
=========================================================================*/

    if ($('.subscribe_form').length>0) {
        /*  MAILCHIMP  */
        $('.subscribe_form').ajaxChimp({
            language: 'es',
            callback: mailchimpCallback,
            url: "//alexatheme.us14.list-manage.com/subscribe/post?u=48e55a88ece7641124b31a029&amp;id=361ec5b369"
        });
    }

    function mailchimpCallback(resp) {
        if (resp.result === 'success') {
            $('#subscribe-result').addClass('subs-result');
            $('.subscription-success').text(resp.msg).fadeIn();
            $('.subscription-error').fadeOut();

        } else if(resp.result === 'error') {
            $('#subscribe-result').addClass('subs-result');
            $('.subscription-error').text(resp.msg).fadeIn();
        }
    }
    $.ajaxChimp.translations.es = {
        'submit': 'Submitting...',
        0: 'We have sent you a confirmation email',
        1: 'Please enter your email',
        2: 'An email address must contain a single @',
        3: 'The domain portion of the email address is invalid (the portion after the @: )',
        4: 'The username portion of the email address is invalid (the portion before the @: )',
        5: 'This email address looks fake or invalid. Please enter a real email address'
    };

/*=========================================================================
       CSS-able SVGs
=========================================================================*/
    $('img.svg-img').each(function(){
        var $img = $(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        $.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = $(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');
    });
})(jQuery);
