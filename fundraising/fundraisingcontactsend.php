<?php

date_default_timezone_set('US/Eastern');

$contactname     	= $_POST['contactname'];
$contactemail          = $_POST['contactemail'];
$contactmessage       = $_POST['contactmessage'];
$timestamp 	= date("F jS Y, h:i A", time());

$subject = 'Fundraising Online Inquiry';
$mailto  = 'dreamcentrefundraising@gmail.com';
$mailfrom  = $contactemail;

// HTML for email to send submission details
$body = "
<h3>Fundraising Online Inquiry</h3>
<div>Sent $timestamp</div>
<br>
<div><b>From:</b> $contactname</div>
<div><b>Email:</b> $contactemail</div>
<br>
<div><b>Message:</b> $contactmessage</div>
";

//$headers = "From: $contactname <$contactemail> \r\n";
$headers = "From: $mailfrom \r\n";
$headers .= "Reply-To: $contactemail \r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
$message = "<html><body>$body</body></html>";

if (mail($mailto, $subject, $message, $headers)) {
    echo "<script>alert('Message sent successfully!');</script>";
    echo "<script>document.location.href='index.html'</script>";
} else {
    echo "<script>alert('Unknown error occurred... message delivery failed. Please try again later or email us directly at dreamcentrefundraising@gmail.com.');</script>";
    echo "<script>document.location.href='index.html'</script>";
}

?>