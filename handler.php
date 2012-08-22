<!doctype html>
<html>
	<head>
		<title>Simple Form Handler</title>
	</head>
	<body>
		<?php
		
		ini_set ('display_errors', 1);
		error_reporting(E_ALL|E_STRICT);
		
			//Create variables to hold form data
			$name = $_POST['name'];
			$email = $_POST['email'];
			$comment = $_POST['comment'];
			
			//Print form data - good for testing
			//echo "<p>Thank you, $name, for your comments.</p><p>Your email: $email</p><p>Your comment: $comment</p>";
			
			//Email Warren
			$send_to = "tanyalsweeney@yahoo.com";
			$subject = "A message from WarrenWoo.com";
			$message = "Sender: $name \nEmail: $email \nComment: $comment";			
			
			mail($send_to, $subject, $message);
		
		?>
	</body>
</html>