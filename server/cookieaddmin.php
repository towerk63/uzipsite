<?php 
    if (isset($_COOKIE['fullnameadmin']))
    {
    echo $_COOKIE['fullnameadmin'];
    }else{
        echo "lỗi đăng nhập";
        header('../admin.html');
    }
?>