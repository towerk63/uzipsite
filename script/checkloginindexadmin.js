window.onload = function () {
    $.post("server/cookieaddmin.php",
        function (data) {
            if (data != "lỗi đăng nhập") {
                window.location = "./adminok.php";
            }
        }
    );
}