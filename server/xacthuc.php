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
  if(isset($_POST['emailr'])){
    $emailr = $_POST['emailr'];
  }
  if(isset($_POST['usernamer'])){
    $username = $_POST['usernamer'];
  }
//   $emailr = "doikotinh99@gmail.com";
//     $username = "abc";
  $sql1 = "SELECT *  FROM user";
    $result = mysqli_query($conn,$sql1);
    $code = 0;
    if(mysqli_num_rows($result)>0){
        while($row=mysqli_fetch_assoc($result)){
            if($row["username"] == $username){
                $code = $row["code"];
            }
        }
    }
  $mess = 'http://localhost/www/uzip/server/checkcode.php?username=' 
  . $username . '&code=' . $code;
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
        $mail->setFrom("embupbelv@gmail.com", "UZIP");
        $mail->addAddress($emailr, $username);                
        // $mail->addReplyTo('embupbelv@gmail.com', 'khách hàng');
        // Content
        $mail->isHTML(true);                                  
        $mail->Subject = 'UZIP';
        $mail->Body    = $mess;
        $mail->AltBody = '';
        $mail->send();
        echo 'Message has been sent';  
    } catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>