<?php
include("server.php");
$id = $_POST["id"];
$linkfile = $_POST["linkfile"];
$sql1 = "SELECT *  FROM file";
$sql2 = "UPDATE file SET linkfile = '$linkfile' WHERE id = '$id'";
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