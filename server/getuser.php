<?php
include("server.php");
$user = [];
$sql1 = "SELECT *  FROM user";
$result = mysqli_query($conn,$sql1);
$i = 1;
if(mysqli_num_rows($result)>0){
    while($row=mysqli_fetch_assoc($result)){
        $user[$i] = ['fullname'=>$row['fullname'],
        'username'=>$row['username'], 
        'email'=>$row['email'], 
        'phonenumber'=>$row['phonenumber'], 
        'status'=>$row['active'], 
        'id'=>$row['id']
    ];
        $i = $i + 1;
    }
}
$chuoi = json_encode($user);
echo $chuoi;