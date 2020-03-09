$('#nav_item_au').hover(function () {
  $('#nav_link_icon_au').removeClass('fa-sort-down');
  $('#nav_link_icon_au').addClass('fa-sort-up');
});
$('#nav_item_au').mouseleave(function () {
  $('#nav_link_icon_au').removeClass('fa-sort-up');
  $('#nav_link_icon_au').addClass('fa-sort-down');
});

$('#nav_item_alcs').hover(function () {
  $('#nav_link_icon_alcs').removeClass('fa-sort-down');
  $('#nav_link_icon_alcs').addClass('fa-sort-up');
});
$('#nav_item_alcs').mouseleave(function () {
  $('#nav_link_icon_alcs').removeClass('fa-sort-up');
  $('#nav_link_icon_alcs').addClass('fa-sort-down');
});

$('#nav_item_n').hover(function () {
  $('#nav_link_icon_n').removeClass('fa-sort-down');
  $('#nav_link_icon_n').addClass('fa-sort-up');
});
$('#nav_item_n').mouseleave(function () {
  $('#nav_link_icon_n').removeClass('fa-sort-up');
  $('#nav_link_icon_n').addClass('fa-sort-down');
});

var video = document.getElementById("video_banner");
var btn = document.getElementById("btn_banner");

function videobanner() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
$('#nav_item_au_mb').click(function(){
  if ($('#nav_item_au_mb_show').attr('class') == "nav-item-clone-mobile"){
    $('#nav_item_au_mb_show').addClass('nav-item-clone-mobile_show');
    $('#nav_link_icon_au').addClass('fa-sort-up');
    $('#nav_link_icon_au').removeClass('fa-sort-down');
  }else{
    $('#nav_item_au_mb_show').removeClass('nav-item-clone-mobile_show');
    $('#nav_link_icon_au').removeClass('fa-sort-up');
    $('#nav_link_icon_au').addClass('fa-sort-down');
  }
  
});
$('#nav_item_alcs_mb').click(function () {
  if ($('#nav_item_alcs_mb_show').attr('class') == "nav-item-clone-mobile") {
    $('#nav_item_alcs_mb_show').addClass('nav-item-clone-mobile_show');
    $('#nav_link_icon_alcs').addClass('fa-sort-up');
    $('#nav_link_icon_alcs').removeClass('fa-sort-down');
  } else {
    $('#nav_item_alcs_mb_show').removeClass('nav-item-clone-mobile_show');
    $('#nav_link_icon_alcs').removeClass('fa-sort-up');
    $('#nav_link_icon_alcs').addClass('fa-sort-down');
  }

});
$('#nav_item_n_mb').click(function () {
  if ($('#nav_item_n_mb_show').attr('class') == "nav-item-clone-mobile") {
    $('#nav_item_n_mb_show').addClass('nav-item-clone-mobile_show');
    $('#nav_link_icon_n').addClass('fa-sort-up');
    $('#nav_link_icon_n').removeClass('fa-sort-down');
  } else {
    $('#nav_item_n_mb_show').removeClass('nav-item-clone-mobile_show');
    $('#nav_link_icon_n').removeClass('fa-sort-up');
    $('#nav_link_icon_n').addClass('fa-sort-down');
  }

});

$('#nav_btn_header').click(function(){
  $('#sidebar_mobile').addClass('sidebar_mobile_show');
});
$('#nav_close').click(function () {
  $('#sidebar_mobile').removeClass('sidebar_mobile_show');
});
$('#close_menu_mb').click(function () {
  $('#sidebar_mobile').removeClass('sidebar_mobile_show');
});