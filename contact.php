<?php include('includes/top.php'); ?>
<div id="contact_form">
	<form name="contact" action="handler.php" method="post">
		<fieldset>
			<label for="name" id="name_label">Name:</label>
			<input type="text" name="name" id="name" size="100" value="" class="text-input" />
			<label class="error" for="name" id="name_error">This field is required.</label>
			<br />
			
			<label for="email" id="email_label">Return Email:</label>
			<input type="text" name="email" id="email" size="100" value="" class="text-input" />
			<label class="error" for="email" id="email_error">This field is required.</label>
			<br />
			
			<label for="comment" id="comment_label">Comments:</label>
			<input type="text" name="comment" id="comment" size="100" value="" class="text-input" />
			<label class="error" for="comment" id="comment_error">This field is required.</label>
			<br />
			
			<input type="submit" name="submit" class="button" id="submit_btn" value="send" />
			
		</fieldset>
	</form>
</div>

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script src="contact.js"></script>
<?php include('includes/bottom.php'); ?>
