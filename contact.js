$(function() {
	$('.error').hide();	// hide labels with the error class
	$('.button').click(function() { // call the function on click
	
		// validate and process form here
		
		$('.error').hide(); // initially hide all the error messages
				var name = $('input#name').val(); //get the name typed in by the user
				if(name == "") { // if it's blank...
			$('label#name_error').show(); //show the error...
			$('input#name').focus(); // set focus to the name field...
			return false; // and stop the function here to prevent page refresh
		} // end if name == ""
		
				var email = $('input#email').val();
				if(email == "") {
			$('label#email_error').show();
			$('input#email').focus();
			return false;
		} // end if email == ""
		
				var comment = $('input#comment').val();
				if(comment == "") {
			$('label#comment_error').show();
			$('input#comment').focus();
			return false;
		}
		
		var dataString = 'name=' + name + '&email=' + email + '&comment=' + comment;
		//alert (dataString); return false;
		$.ajax({
			type: "POST",
			url: "handler.php",
			data: dataString,
			success: function() {
				//display message back to user here
				$('#contact_form').html('<div id="message"></div>');
				$('#message').html('<h2>Contact Form Submitted!</h2>')
					.append('<p>We will be in touch soon.</p>')
					.hide()
					.fadeIn(1500, function() {
						$('#message');
					}); // end fadeIn function
			} // end success function
		}); // end ajax
		return false;
		
	}); // end button click function
}); //end anonymous function that executes on load