<?php
	if(isset($_POST['your-name'])){
	    $to = "totallyrandommail21293@gmaixl.com";
	    $from = $_POST['your-email'];
	    $first_name = $_POST['your-name'];
	    $subject = $_POST['your-subject'];
	    $message = $first_name . " wrote the following:" . "\n\n" . $_POST['your-message'];

	    $headers = "From:" . $from;
	    mail($to,$subject,$message,$headers);	
	}
?>
