// Browser detection for when you get desparate. A measure of last resort.
// http://rog.ie/post/9089341529/html5boilerplatejs

// var b = document.documentElement;
// b.setAttribute('data-useragent',  navigator.userAgent);
// b.setAttribute('data-platform', navigator.platform);

// sample CSS: html[data-useragent*='Chrome/13.0'] { ... }


// remap jQuery to $
(function($){


/* trigger when page is ready */
$(document).ready(function (){

	// your functions go here

	var $submit = $(".submit input");
	var $required = $(".required");
	function containsBlanks(){
		var blanks = $required.map(function(){ return $(this).val() == "";});
		return $.inArray(true, blanks) != -1;
	}

	function isValidEmail(email){
		return email.indexOf("@") != -1;
	}

	function requiredFilledIn(){
		if(containsBlanks() || !isValidEmail($("#email").val())) 
			$submit.attr("disabled","disabled");
		else 
			$submit.removeAttr("disabled");
	}

	$("#form span").hide();
	$("input,textarea").focus(function(){
		$(this).next().fadeIn("slow");
	}).blur(function(){
		$(this).next().fadeOut("slow");
	}).keyup(function(){
		//Check all required fields.
		requiredFilledIn();
	});

	$("#email").keyup(function(){
		//Check for a valid email.
		if(isValidEmail($(this).val()))
		 $(this).next().removeClass("error").addClass("valid");
		else 
		 $(this).next().removeClass("valid").addClass("error");
	});

	requiredFilledIn();

	/*var firstName = "Caleb";
	var middleName = "S";
	var lastName = "Sylvest";
	var streetAddress = "312 S. Kentucky Street";
	var city = "McKinney":
	var state = "TX";
	var zipCode = "75069";*/


  
});


/* optional triggers

$(window).load(function() {
	
});

$(window).resize(function() {
	
});

*/


})(window.jQuery);