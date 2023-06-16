 <?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message_from_customer = $_POST['message'];

        $to = $email;
        $subject = 'Message Received Confirmation';
        $message = "Dear $name,<br><br>Thank you for your message. We have received it and will respond as soon as possible.<br><br>Best regards,<br>VonJon team";
        $header = "From:vonjon@vonjon.com \r\n";
        $header .= "MIME-Version: 1.0\r\n";
        $header .= "Content-type: text/html\r\n";
        
        $retval = mail ($to,$subject,$message,$header);

        $to = "deviatkin.oleksandr@gmail.com";
        $subject = 'Message Received Confirmation';
        $message = "$email <br> $message_from_customer";
        $header = "From:reciever@vonjon.com \r\n";
        $header .= "MIME-Version: 1.0\r\n";
        $header .= "Content-type: text/html\r\n";

        $retval = mail($to,$subject,$message,$header);
        
    }
?>
