<?php 
$to = 'czajnikelektryczny0225@gmail.com';
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message-input'];
$headers = 'From: '. $email . ' $name';

mail($to, $subject, $message, $headers);
// echo $name . $email . $subject;

echo 'kurwa';
?>