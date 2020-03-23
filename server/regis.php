<?php 
  include("consolelog.php");
  include('server.php');
  $active = 0;
  if(isset($_POST['fullnamer'])){
    $fullnamer = addslashes($_POST['fullnamer']);
  }

  if(isset($_POST['usernamer'])){
    $usernamer = addslashes($_POST['usernamer']);
  }

  if(isset($_POST['passwordr'])){
    $passwordr = addslashes($_POST['passwordr']);
  }

  if(isset($_POST['cpasswordr'])){
    $cpasswordr = addslashes($_POST['cpasswordr']);
  }

  if(isset($_POST['emailr'])){
    $emailr = addslashes($_POST['emailr']);
  }

  if(isset($_POST['phonenbr'])){
    $phonenbr = addslashes($_POST['phonenbr']);
  }else{
    $phonenbr = "000";
  }
  
  if(isset($_POST['companyr'])){
    $companyr = addslashes($_POST['companyr']);
  }else{
    $companyr = "NO";
  }

  if(isset($_POST['addr'])){
    $addr = addslashes($_POST['addr']);
  }else{
    $addr = "NO";
  }
  
  if(isset($_POST['titler'])){
    $titler = addslashes($_POST['titler']);
  }else{
    $titler = "NO";
  }
  $passwordr = md5($passwordr);
  $rand = rand(100000, 999999);
  $sql ="INSERT INTO user (fullname, username, password, email, phonenumber, title, company, address, active, code) 
          VALUE ('$fullnamer', '$usernamer', '$passwordr', '$emailr', '$phonenbr', '$titler', '$companyr', '$addr', '$active', '$rand')";
  $sql1="SELECT * FROM user";
  $result=mysqli_query($conn,$sql1);
  $count = 0;

  $query_user = mysqli_query($conn,"select * from user where username = $usernamer");
  $query_email = mysqli_query($conn,"select * from user where email = $emailr");
  //  if(mysqli_num_rows($query_user) == 1){
  //    $count = 1;
  //  }
  //  if(mysqli_num_rows($query_email) == 1){
  //    $count = 2;
  //  }



  if(mysqli_num_rows($result)){
    
    while($row = mysqli_fetch_assoc($result)){
      if($row['username'] == $usernamer){
        $count = 1;
      }
      if($row['email'] == $emailr){
        $count = 2;
      }
    }
  }


  if($count == 2){
    echo "email";
  }else if($count == 1){
    echo "username";
  }else if($count == 0){
    $result1=mysqli_query($conn,$sql);
    echo "ok";
  }
  mysqli_close($conn);
?>