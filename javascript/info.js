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
    
    let viewTest = 0;
    let totalClassView = $(".view");
    let click = $(".short-content h3 a");
    for(let i = 0; i < totalClassView.length; i++) {
        $((click)[i]).click(function (){
            viewTest++;
            $(totalClassView[i]).html(`<i class="fa-regular fa-eye"></i> Đã xem: ` + viewTest);
            console.log($(totalClassView)[i]);
        })
    }
    
})




