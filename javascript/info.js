// Click để mở sub-menu
$(document).ready(() => {
    let clickSubMenu = document.querySelectorAll('.menu > li > span');
    let subMenu = document.querySelectorAll('.sub-menu');
    for (let i = 0; i < clickSubMenu.length; ++i) {
        clickSubMenu[i].addEventListener('click', function() {
            subMenu[i].classList.toggle('block');
        })
    };

    $(".main-content > div:not(#main)").hide();
    $("sub-menu > li > a").click(function() {
        $("sub-menu > li > a").parent().remove("color-click");
        $(this).parent().addClass("color-click");
    })
})


