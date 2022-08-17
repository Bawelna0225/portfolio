<?php 
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $messageInput = $_POST['message-input'];
    $date = date('Y-m-d');
    $message = "
    <html>
    <head>
    <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
        <title></title>
    </head>
    <body style='width: 100%; margin: 0; padding: 0px;'>
        <div style='width: min(100%, 500px); margin: 0 auto; padding: 20px; border-radius: 12px; background-color: #2a2a2a; color: white;'>
            <h1>Message From <span style='color: orange'>Portfolio</span></h1>
            <h3 style='color: orange'>Subject: <span style='color: white'>$subject</span></h3>
            <p style='color: orange'>From: <span style='color: white'>$name</span></p>
            <p style='color: orange'>At: <span style='color: white'>$email</span></p>
            <p style='color: orange'>Message: <span style='color: white'>$messageInput</span></p>
        </div>
    </body>
    </html>";

    $to = 'pawelczarnecki0225@gmail.com';

    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

    $headers .= 'To: ' .$to. "\r\n";
    $headers .= 'From: ' .$email. "\r\n";


    mail($to, $subject, $message, $headers);
    
    echo "New Mail Recived! $headers Subject: $subject\n\r Message: $messageInput\n\r Destined for $to ";

    $conn = new mysqli('localhost', '', '', '');
    $query = "INSERT INTO maile VALUES(null, '$name', '$email', '$subject', '$messageInput', '$date')";
    mysqli_query($conn, $query);
    mysqli_close($conn)
?>