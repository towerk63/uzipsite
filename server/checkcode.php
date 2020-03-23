<?php 
    include("consolelog.php");
    include('server.php');
    $usernamelog = $_GET['username'];
    $code = $_GET['code'];
    $sql = 'SELECT * FROM user';
    $sql2 = "UPDATE user SET active = '1' WHERE username = '$usernamelog'";
    $result=mysqli_query($conn,$sql);
    $count = 0;
    if(mysqli_num_rows($result)>0){
		while($row = mysqli_fetch_assoc($result)){
			if($row['username'] == $usernamelog && $row['code'] == $code){
                $count = 1;
            }
		}
    }
    if($count == 1){
        $result=mysqli_query($conn,$sql2);
        echo 'Account activation successfully <a href="../index.html"> to home page </a>';
    }else{
        echo 'Unable to activate account <a href="../index.html"> to home page </a>';
    }
    mysqli_close($conn);

?>

