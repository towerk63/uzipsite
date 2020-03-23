<?php
    $conn= mysqli_connect('localhost','root','', 'uzip');
	if($conn->connect_errno){
		echo("truy cập thất bại".$conn->connect_errno);
	}
	mysqli_set_charset($conn, 'UTF8');
?>