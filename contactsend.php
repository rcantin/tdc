<?php

if (!empty($_POST['website'])) {
    echo "<div class=\"bg-danger text-white p-3 font-weight-bold mt-3\"><i class=\"fa fa-exclamation-circle fa-lg\"></i> Message was not sent.  Suspected spam.</div>";
    die();
}

if (strpos($_POST['contactmessage'], 'http') !== false || strpos($_POST['contactmessage'], 'www') !== false) {
    echo "<div class=\"bg-danger text-white p-3 font-weight-bold mt-3\"><i class=\"fa fa-exclamation-circle fa-lg\"></i> To prevent spam, we don't allow links from the website.  Please remove the link and try again.</div>";
    die();
}

date_default_timezone_set('US/Eastern');

/* Configuration */
$subject = 'Website Inquiry - thedreamcentre.ca';
$mailto  = 'generalinquiries@thedreamcentre.ca';
$mailfrom  = 'do-not-reply@thedreamcentre.ca';
/* END Configuration */

$contactname     	= $_POST['contactname'];
$contactemail          = $_POST['contactemail'];
$contactphone       = $_POST['contactphone'];
$contactmessage       = $_POST['contactmessage'];
$documentlocation       = $_POST['documentlocation'];
$timestamp 	= date("F jS Y, h:iA.", time());

// HTML for email to send submission details
$body = "
<h3>Website Inquiry from thedreamcentre.ca</h3>
<div>Sent $timestamp</div>
<br>
<div><b>From:</b> $contactname</div>
<div><b>Email:</b> $contactemail</div>
<div><b>Phone:</b> $contactphone</div>
<br>
<div><b>Message:</b> $contactmessage</div>
<br>
<hr>
<small>Form submitted from $documentlocation</small>
";

// Success Message
$success = "<div class=\"bg-success text-white p-3 font-weight-bold mt-3\"><i class=\"fa fa-check-circle fa-lg\"></i> Message sent successfully</div>";
// $success = "
// <div class=\"h5 text-success pt-2\"><i class=\"fa fa-check-circle fa-lg\"></i> Message sent successfully!</div>
// <div class=\"text-dark pt-2 font-weight-light\">Thanks for your inquiry.  We will respond using the information you provided.</div>
// ";

// Failure Message
$failure = "<div class=\"bg-danger text-white p-3 font-weight-bold mt-3\"><i class=\"fa fa-exclamation-circle fa-lg\"></i> Message not sent.  Something went wrong.  Please try again.</div>";
// $failure = "
// <div class=\"h5 text-danger pt-2\"><i class=\"fa fa-exclamation-circle fa-lg\"></i> Message not sent!</div>
// <div class=\"text-dark p-2 font-weight-light\">Something went wrong while sending your message.  Please try again.  Sorry for the trouble!</div>
// ";

//$headers = "From: $contactname <$contactemail> \r\n";
$headers = "From: $mailfrom \r\n";
// $headers .= "Reply-To: $contactemail \r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
$message = "<html><body>$body</body></html>";

if (mail($mailto, $subject, $message, $headers)) {
    echo "$success"; // success
} else {
    echo "$failure"; // failure
}

?>