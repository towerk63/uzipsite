$(document).ready(function () {
    $.getJSON("server/getuser.php", function (data) {
        var _slt = "";
        var _slt1 = "";
        var _slt2 = "";
        var _slt3 = "";
        var _slt4 = "";
        var _slt5 = "";
        $.each(data, function (key, val) {
            _slt += '<p class="testtb">' + val.fullname + '</p>';
            _slt1 += '<p class="testtb">' + val.username + '</p>';
            _slt2 += '<p class="testtb">' + val.email + '</p>';
            _slt3 += '<p class="testtb">' + val.phonenumber + '</p>';
            _slt4 += '<p class="testtb">' + val.status + '</p>';
            if (val.status == 1) {
                _slt5 += '<div class="btnuser"><button onclick="clickbtnuser('
                    + val.id + ', \'deactivate\')" class="btn btn-warning" > deactivate </button > <button onclick="clickbtnuser('
                    + val.id + ', \'delete\')"  class="btn btn-danger">delete</button> <button onclick="clickbtnuser('
                    + val.id + ', \'reset\')" class="btn btn-primary">reset Password</button></div > ';
            } else {
                _slt5 += '<div class="btnuser"><button onclick="clickbtnuser('
                    + val.id + ', \'active\')" class="btn btn-success" > active </button > <button onclick="clickbtnuser('
                    + val.id + ', \'delete\')"  class="btn btn-danger">delete</button> <button onclick="clickbtnuser('
                    + val.id + ', \'reset\')" class="btn btn-primary">reset Password</button></div > ';
            }
        });
        $('#Fullname').append(_slt);
        $('#Username').append(_slt1);
        $('#Email').append(_slt2);
        $('#Phone').append(_slt3);
        $('#status').append(_slt4);
        $('#btnur').append(_slt5);
    });
});
function clickbtnuser(id, name) {
    if (name == "deactivate") {
        $.post("server/unactive.php",
            {
                id: id,
                act: name,
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
    if (name == "delete") {
        $.post("server/unactive.php",
            {
                id: id,
                act: name,
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
    if (name == "reset") {
        $.post("server/unactive.php",
            {
                id: id,
                act: name,
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
    if (name == "active") {
        $.post("server/unactive.php",
            {
                id: id,
                act: name,
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
}