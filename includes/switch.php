<?php
	//switch.php - will allow us to swap pieces of html
    
	//The line below is to test that this page is working.
    //echo basename($_SERVER['PHP_SELF']);
  	
	switch(basename($_SERVER['PHP_SELF']))
	{
		case "bellingham.php":
			$myTitle = "Bellingham Attractions";
			$myPageID = "Bellingham";
			break;
		
		case "olympia.php":
			$myTitle = "Olympia Attractions";
			$myPageID = "Olympia";
			break;
		
		case "seattle.php":
			$myTitle = "Seattle Attractions";
			$myPageID = "Seattle";
			break;
		
		default:
			$myTitle = "Pacific NW Attractions";
			$myPageID = "Welcome";
	}  
    
	//The line below is to test that this page is working.
	//echo $myTitle;
?>