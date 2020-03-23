<?php 
    include("consolelog.php");
    include('server.php');
    $uname = $_POST['uname'];
    $pwd = $_POST['pswd'];
    $sql = 'SELECT * FROM admin';
    $result=mysqli_query($conn,$sql);
    $count = 0;
    // $pass += $key;
    $pwd = md5($pwd);
    if(mysqli_num_rows($result)>0){
		while($row = mysqli_fetch_assoc($result)){
			if($row['username'] == $uname && $row['password'] == $pwd){
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
        echo 'Tài khoản chưa được kích hoạt <a href="../admin.html"> quay lại </a>';
    }else if($count == 2){
        setcookie('fullnameadmin', $row["fullname"], time() + 999999);
        header('Location: ../adminok.php');
    }else {
        echo 'Sai tên tài khoản hoặc mật khẩu <a href="../admin.html"> quay lại </a>';
    }
    mysqli_close($conn);
?>