// Google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-46316402-2', 'auto');
ga('send', 'pageview');

// default initiators for all plugins
$(function () {
	if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
    skrollr.init({
        forceHeight: false
    });
	};
	window.sr = new scrollReveal();
	$(document).foundation();
	$('.bxslider').bxSlider();
});

// loading animation script
$(document).ready(function () {
	setTimeout(function () {
		$('#loading').css('opacity', '0');
	}, 250);
	setTimeout(function () {
		$('#loading').remove();
	}, 1500);
});


// BeforeAfter image slider for the NOS caseStudy
$(window).load(function() {
  $(".NOSBeforeAfter").twentytwenty();
});

// Scroll To Top button that only appears at the end of the page
$(window).scroll(function () {
		var 	vH = $(window).height(),
				bodyHeight = ($(document).height() - (vH * 2)),
				scrolledPX = $(window).scrollTop();
		if (scrolledPX > bodyHeight) {
			$('.scrollTopButton').css('opacity', '1');
		} else {
			$('.scrollTopButton').css('opacity', '0');
		}
});

$('.scrollTopButton').click(function(e) {
	e.preventDefault();
	$("html, body").animate({ scrollTop: 0 }, 1000, "easeOutQuart");
});


// CaseStudy triangle of the container; calculation of height
function triangleContainer () {
	var 	vW = $(window).width(),
			triangleHeight = vW * 0.2679497913,
			triangleHeightPX = triangleHeight + 'px',
			triangleTopPX = '-' + (triangleHeight - 1) + 'px';
	$('.triangleContainer').css('height', triangleHeightPX);
	$('.triangleContainer').css('top', triangleTopPX);
};

$(triangleContainer);

var resizeTimer;
$(window).resize(function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(triangleContainer, 100);
});

$(document).ready(function() {
	$('#grid').imagesLoaded( function() {
		/* initialize shuffle plugin */
		$('#grid').shuffle({
			itemSelector: 'li', // the selector for the items in the gride
			speed: 500,
		});
	});
});

$('#filter a').click(function (e) {
	e.preventDefault();

	// set active class
	$('#filter a').removeClass('active');
	$(this).addClass('active');

	// get group name from clicked item
	var groupName = $(this).attr('data-group');

	// reshuffle grid
	$('#grid').shuffle('shuffle', groupName );
});

// detect orientation & apply image(rotateDevice) if landscape
$(window).on("resize", "load", function() {
	// get windowSize and exclude tablet & above
	var	vh 	= 	$(window).innerHeight(),
			vw 	= 	$(window).innerWidth(),
			mql 	=	window.matchMedia("(orientation: portrait)");

	if (vh < 600) {
		// orientation check
		if(mql.matches) {  
			$('.rotateDevice').remove();
		} else {  
			$('body').append('<div class="rotateDevice"></div>');
		}
		mql.addListener(function(m) {
			if(m.matches) {
				$('.rotateDevice').remove();
			}
			else {
				$('body').append('<div class="rotateDevice"></div>');
			}
		});	
	}
});

// Afstudeer projecten hover fades others
$('#mijnWerk .itemBlock').mouseover(function() {
	$('#mijnWerk .itemBlock').not(this).addClass('fadeOut');
});

$('#mijnWerk .itemBlock').not('.itemBlock.fadeOut').mouseout(function() {
	$('#mijnWerk .itemBlock.fadeOut').removeClass('fadeOut');
});

// contact form
$(document).ready(function() {
		// Contact Form
	$("#contactform").submit(function(e){
	  e.preventDefault();
	  var name = $("#name").val();
	  var email = $("#email").val();
	  var text = $("#text").val();
	  var dataString = 'name=' + name + '&email=' + email + '&text=' + text;
	  function isValidEmail(emailAddress) {
	    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
	    return pattern.test(emailAddress);
	  };

	  if (isValidEmail(email) && (text.length > 1) && (name.length > 1)) {
	    $.ajax({
		    type: "POST",
		    url: "script/functions.php",
		    data: dataString,
		    success: function(){
		      $('.success').fadeIn(1000, function() {
						$(this).delay(5000).fadeOut(1000);
		      });
		    }
	    });
	  } else{
		  $('.error').fadeIn(1000, function() {
				$(this).delay(5000).fadeOut(1000);
		  });
	  }
	  return false;
	});
});