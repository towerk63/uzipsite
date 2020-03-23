<?php
include("server.php");
$user = [];
$sql1 = "SELECT *  FROM emailcontactus";
$result = mysqli_query($conn,$sql1);
$i = 1;
if(mysqli_num_rows($result)>0){
    while($row=mysqli_fetch_assoc($result)){
        $user[$i] = ['id'=>$row['id'],
        'email'=>$row['email']
    ];
        $i = $i + 1;
    }
}
$chuoi = json_encode($user);
echo $chuoi;