			</div>
			
			<div class="footer">
				<p>&copy; 2012 | <a href="http://validator.w3.org/check?uri=referer">HTML5 VALIDATED</a> | <a href="http://jigsaw.w3.org/css-validator/check/referer?profile=css3">CSS VALIDATED</a></p>
			</div>
		</div>
	
		<!-- script tag -->
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
		<script type="text/javascript">
		
		// A function to enable adding custom formatting to the link for the current page
		$('#nav li a').each(function(){		//loop through each nav link
			$this = $(this);
			$this.removeClass('selected');	//if any of them already has a class of "selected", remove it
			var name = location.pathname;	//get the pathname for this webpage
			if (this.href == ('http://www.tanyalsweeney.com' + name)) { //if the href attribute of the a-tag being inspected is equal to the pathname for this webpage...
				$this.addClass('selected');	//add class="selected" to the element
			}
			
			// For troubleshooting transfer to client's host - use with firebug
			// console.log('this.href is ' + this.href + '\n');
		});
		
		//console.log('location.pathname is ' + name + '\n'); //more troubleshooting help

		
		// A function to expand the logo after page load or refresh.
		// This fails nicely - if no js/jq, the logo is visible.
		// The logo uses an A-B-A-B-C composition, where the 'A'
		// parts are always visible, the 'B' parts float into view first,
		// and the 'C' part floats into view last.
		var logo_load = function() {
			$('.logopart_b').hide(0);
			$('#logopart_c').hide(0);
			$('.logopart_b').show(1.2 * 1000);
			$('#logopart_c').show(1.2 * 1000);
		}
		
		logo_load();
		
		/* jquery for the gallery */
		
		
		/* end jquery for the gallery */
		
		
		//A function to cause home page large icons to change color on mouseover
		var mouseOver = function() {
			var $this = $(this);
			$this.css('border-color', '#9acd32');
		}

		//... and a second function to change the color back to grey on mouse off
		var mouseOff = function() {
			$this = $(this);
			$this.css('border-color', '#707070');
		}

		//Calling the two functions into the 'hover' feature
		$('.home-link').hover(mouseOver, mouseOff);
		
	</script>
	</body>
</html>