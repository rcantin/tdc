<?php

date_default_timezone_set('US/Eastern');

/* Configuration */
$subject = 'Fundraising Online Inquiry'; // Set email subject line here
$mailto  = 'ryan.cantin@gmail.com'; // Email address to send the form to
$mailfrom  = 'do-not-reply@thedreamcentre.ca'; // Email address to send the form from
/* END Configuration */

$contactname     	= $_POST['contactname'];
$contactemail          = $_POST['contactemail'];
$contactmessage       = $_POST['contactmessage'];
$documentlocation       = $_POST['documentlocation'];
$timestamp 	= date("F jS Y, h:iA.", time());

// HTML for email to send submission details
$body = "
<h3>Fundraising Online Inquiry</h3>
<div>Sent $timestamp</div>
<br>
<div><b>From:</b> $contactname</div>
<div><b>Email:</b> $contactemail</div>
<br>
<div><b>Message:</b> $contactmessage</div>
<br>
<hr>
<small>Form submitted from $documentlocation</small>
";

// Success Message
$success = "
<div class=\"h5 text-success pt-2\"><i class=\"fa fa-check-circle fa-lg\"></i> Message sent successfully!</div>
<div class=\"text-dark pt-2 font-weight-light\">Thanks for your inquiry.  We will respond using the information you provided.</div>
";

// Failure Message
$failure = "
<div class=\"h5 text-danger pt-2\"><i class=\"fa fa-exclamation-circle fa-lg\"></i> Message not sent!</div>
<div class=\"text-dark p-2 font-weight-light\">Something went wrong while sending your message.  Please try again.  Sorry for the trouble!</div>
";

//$headers = "From: $contactname <$contactemail> \r\n";
$headers = "From: $mailfrom \r\n";
$headers .= "Reply-To: $contactemail \r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
$message = "<html><body>$body</body></html>";

if (mail($mailto, $subject, $message, $headers)) {
    echo "$success"; // success
} else {
    echo "$failure"; // failure
}

?>