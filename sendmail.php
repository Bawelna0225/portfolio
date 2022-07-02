<?php 
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message-input'];

    $mailheader = "From: ".$name." <".$email.">\r\n";

    $to = 'pawelczarnecki0225@gmail.com';

    mail($to, $subject, $message, $mailheader);
    
    echo "New Mail Recived! $mailheader Subject: $subject\n\r Message: $message\n\r Destined for $to ";

    $conn = new mysqli('localhost', 'root', '', 'maile');
    $query = "INSERT INTO maile VALUES(null, '$name', '$email', '$subject', '$message')";
    mysqli_query($conn, $query);
?>