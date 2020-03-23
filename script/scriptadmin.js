$count_menu = 0;
$(".nav-link").click(function () {
    this.classList.add("active");
    for ($i = 0; $i < $(".nav-link").length; $i++) {
        if (this != $(".nav-link")[$i]) {
            $(".nav-link")[$i].classList.remove("active");
        } else {
            $count_menu = $i;
        }
    }
    if ($count_menu == 0) {
        $("#qluser").addClass("main_active");
    } else {
        $("#qluser").removeClass("main_active");
    }
    if ($count_menu == 1) {
        $("#qladmin").addClass("main_active");
    } else {
        $("#qladmin").removeClass("main_active");
    }
    if ($count_menu == 2) {
        $("#qlfile").addClass("main_active");
    } else {
        $("#qlfile").removeClass("main_active");
    }
    if ($count_menu == 3) {
        $("#qlmail").addClass("main_active");
    } else {
        $("#qlmail").removeClass("main_active");
    }
});