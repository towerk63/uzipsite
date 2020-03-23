<?php
include("server.php");
include("consolelog.php");
$id = $_POST["id"];
$act = $_POST["act"];
$sql1 = "SELECT *  FROM user";
$sql2 = "UPDATE user SET active = '0' WHERE id = '$id'";
$sql3 = "UPDATE user SET password = 'c4ca4238a0b923820dcc509a6f75849b' WHERE id = '$id'";
$sql4 = "DELETE FROM user WHERE id = '$id'";
$sql5 = "UPDATE user SET active = '1' WHERE id = '$id'";
$result = mysqli_query($conn,$sql1);
$count = 1;
if(mysqli_num_rows($result) > 0){
    if(mysqli_num_rows($result)){
        while($row = mysqli_fetch_assoc($result)){
            if($row['id'] == $id){
                $count = 1;
            }
        }
    }
}
if($count == 1 && $act == "deactivate"){
    $result = mysqli_query($conn,$sql2);
    echo '1';
}else if($count == 1 && $act == "delete"){
    $result = mysqli_query($conn,$sql4);
    echo '1';
}else if($count == 1 && $act == "reset"){
    $result = mysqli_query($conn,$sql3);
    echo '1';
}else if($count == 1 && $act == "active"){
    $result = mysqli_query($conn,$sql5);
    echo '1';
}else{
    echo '0';
}
mysqli_close($conn);