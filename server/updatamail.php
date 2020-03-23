<?php
include("server.php");
$id = $_POST["id"];
$email = $_POST["email"];
$sql1 = "SELECT *  FROM emailcontactus";
$sql2 = "UPDATE emailcontactus SET email = '$email' WHERE id = '$id'";
$result = mysqli_query($conn,$sql1);
$count = 0;
if(mysqli_num_rows($result)>0){
    while($row=mysqli_fetch_assoc($result)){
        if($row["id"] == $id){
            $count = 1;
        }
    }
}
if($count == 1){
    $result = mysqli_query($conn,$sql2);
    echo '1';
}else{
    echo '0';
}
mysqli_close($conn);