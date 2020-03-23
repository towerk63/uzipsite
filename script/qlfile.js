$(document).ready(function () {
    $.getJSON("server/getfile.php", function (data) {
        var _slt = "";
        var _slt1 = "";
        $i = 1;
        $.each(data, function (key, val) {
            _slt += '<input class="inputtb" type="text" name="link' + $i + '"  id="link' + $i + '" placeholder="' + val.linkfile + '">';
            _slt1 += '<button onclick="clickbtnfile(' + $i + ', \'#link' + $i + ' \')" class="btnfile btn btn-primary">Save</button>';
            $i++;
        });
        $('#Link').append(_slt);
        $('#btntb').append(_slt1);
    });

});
function clickbtnfile(id, linkfile) {
    $linkfile = $(linkfile).val();
    $.post("server/updatafile.php",
        {
            id: id,
            linkfile: $linkfile
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