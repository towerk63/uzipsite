<?php 
    function consolelog($data){
		echo '<script>';
		echo 'console.log("php = " + '.json_encode($data).')';
		echo '</script>';
	}
	$key = "c";
	$key = md5($key);
?>