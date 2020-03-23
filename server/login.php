<?php 
    include("consolelog.php");
    include('server.php');
    $usernamelog = $_POST['username'];
    $pass = $_POST['passlog'];
    $sql = 'SELECT * FROM user';
    $result=mysqli_query($conn,$sql);
    $count = 0;
    $pass = md5($pass);
    if(mysqli_num_rows($result)>0){
		while($row = mysqli_fetch_assoc($result)){
			if($row['username'] == $usernamelog && $row['password'] == $pass){
                $count = 1;
                if($row['active'] == 1){
                    $count = 2;
                }
            break;
			}else{
                $count = 0;
            }
		}
    }
    if($count == 1){
        echo "The account has not been activated";
    }else if($count == 2){
        setcookie('login', 'ok', time() + 999999);
        setcookie('fullname', $row["fullname"], time() + 999999);
        echo $row["fullname"];
        
    }else {
        echo "Login failed";
    }
    mysqli_close($conn);
?>