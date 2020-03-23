<?php 
include("consolelog.php");
include("server.php");
include("PHPMailer-master//src//Exception.php");
include("PHPMailer-master//src//OAuth.php");
include("PHPMailer-master//src//PHPMailer.php");
include("PHPMailer-master//src//POP3.php");
include("PHPMailer-master//src//SMTP.php");
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
// $sql1="SELECT email FROM emailcontactus";
// $result1=mysqli_query($conn,$sql);
  if(isset($_POST['usernamemail'])){
    $usernamemail = addslashes($_POST['usernamemail']);
  }
  if(isset($_POST['emailmail'])){
    $emailmail = addslashes($_POST['emailmail']);
  }
  if(isset($_POST['usernamemail'])){
    $mess = addslashes($_POST['mess']);
  }
  $emailcus = "";
  $sql1="SELECT * FROM emailcontactus";
  $result=mysqli_query($conn,$sql1);
  if(mysqli_num_rows($result)){
    
    while($row = mysqli_fetch_assoc($result)){
      $emailcus = $row["email"];
    }
  }
    $mail = new PHPMailer(true);
    try {
        $mail->SMTPDebug = 0;
        $mail->isSMTP(); 
        $mail->Host       = 'smtp.gmail.com';                   
        $mail->SMTPAuth   = true;                                  
        $mail->Username   = 'embupbelv@gmail.com';                 
        $mail->Password   = '01632038412';                             
        $mail->SMTPSecure = 'tls';       
        $mail->Port       = 587;                                   

        //Recipients
        $mail->charset = 'UTF-8';
        $mail->setFrom($emailmail, $usernamemail);
        $mail->addAddress('doikotinh99@gmail.com', 'Ngọc Kenny');                
        // $mail->addReplyTo('embupbelv@gmail.com', 'khách hàng');
        // Content
        $mail->isHTML(true);                                  
        $mail->Subject = 'Phản hồi từ khách hàng';
        $mail->Body    = $mess;
        $mail->AltBody = '';
        $mail->send();
        echo 'Message has been sent';  
    } catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>