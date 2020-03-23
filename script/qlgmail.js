$(document).ready(function () {
    $.getJSON("server/getgmail.php", function (data) {
        var _slt = "";
        var _slt1 = "";
        $i = 0;
        $.each(data, function (key, val) {
            _slt += '<input class="inputtb" type="text" name="mailcus" id="mailcus" placeholder="' + val.email + '">';
            _slt1 += '<button onclick="btnonclclick()" class="btnfile btn btn-primary">Save</button>';
        });
        $('#emailctu').append(_slt);
        $('#btnemail').append(_slt1);
    });

});
function btnonclclick () {
    $email = $("#mailcus").val();
    $.post("server/updatamail.php",
        {
            id: 1,
            email: $email
        },
        function (data) {
            if (data == 1) {
                alert("Successfully executed the query");
                location.reload();
            } else {
                alert("Failed to execute query");
            }
        }
    );
}
