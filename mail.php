<?php


	if(isset($_POST['your-name'])){
	    $to = "chameryka@gmail.com"; // this is your Email address
	    $from = $_POST['your-email']; // this is the sender's Email address
	    $first_name = $_POST['your-name'];
	    $subject = $_POST['your-subject'];
	    $subject2 = $_POST['your-subject'];
	    $message = $first_name . " wrote the following:" . "\n\n" . $_POST['your-message'];
	    $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['your-message'];

	    $headers = "From:" . $from;
	    $headers2 = "From:" . $to;
	    mail($to,$subject,$message,$headers);
	    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
	    // You can also use header('Location: thank_you.php'); to redirect to another page.
			
	    }

    //  header('Location: /coolSidebarr/web/contact');



?>
