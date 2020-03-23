window.onload = function () {
    $.post("server/cookieaddmin.php",
        function (data) {
            if (data == "lỗi đăng nhập") {
                window.location = "./admin.html";
            } else {
                data += '<i class="fas fa-sign-out-alt"></i>';
                $("#logout").html(data);
            }
        }
    );
}
$('#logout').click(function () {
    $.post("server/delcookieadmin.php",
        function () {
            location.reload();
        }
    )
});