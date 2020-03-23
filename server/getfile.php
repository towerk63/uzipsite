<?php
include("server.php");
$user = [];
$sql1 = "SELECT *  FROM file";
$result = mysqli_query($conn,$sql1);
$i = 1;
if(mysqli_num_rows($result)>0){
    while($row=mysqli_fetch_assoc($result)){
        $user[$i] = ['id'=>$row['id'],
        'linkfile'=>$row['linkfile']
    ];
        $i = $i + 1;
    }
}
$chuoi = json_encode($user);
echo $chuoi;