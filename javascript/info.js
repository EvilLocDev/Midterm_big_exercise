// Click để mở sub-menu
$(document).ready(() => {
    let clickSubMenu = document.querySelectorAll('.menu > li > span');
    let subMenu = document.querySelectorAll('.sub-menu');
    for (let i = 0; i < clickSubMenu.length; ++i) {
        clickSubMenu[i].addEventListener('click', function() {
            subMenu[i].classList.toggle('block');
        })
    };
    //ẩn nội dung sub-content
    $(".main-content > div:not(#main)").hide();
    $(".sub-menu a").click(function() {
        // click mở tab
        $(".sub-menu a").parent().removeClass("color-click");
        $(this).parent().addClass("color-click");
         // click mở nội dung tương ứng
        $(".main-content > div").hide();
        $($(this).attr("href")).show();
        
    });
    // Số lượt truy cập vào cuộc thi
    let viewTest = 0;
    $(".short-content h3 > a").click(function() {
        viewTest++;
        $(this).parent().parent().find(".view").html(`<i class="fa-regular fa-eye"></i> Đã xem: ` + viewTest);
    })
})


