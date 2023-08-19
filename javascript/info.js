// Click để mở sub-menu
$(document).ready(() => {
    let clickSubMenu = document.querySelectorAll('.menu > li > span');
    let subMenu = document.querySelectorAll('li > .sub-menu');
    for (let i = 0; i < clickSubMenu.length; ++i) {
        clickSubMenu[i].addEventListener('click', function() {
            subMenu[i].classList.toggle('block');
        })
    };

    // ẩn hiện nội dung thời khóa biểu
    $(".main-content > div:not(#main)").hide();
    $(".menu a").click(function() {
        // click mở tab
        $(this).parent().removeClass("color-click");
        $(this).parent().addClass("color-click");
         // click mở nội dung tương ứng
        $(".main-content > div").hide();
        $($(this).attr("href")).show();
        
    });

    //ẩn nội dung sub-content
    $(".main-content > div:not(#main)").hide();
    $(".menu a").click(function() {
        // click mở tab
        $(".menu a").parent().removeClass("color-click");
        $(this).parent().addClass("color-click");
        // click mở nội dung tương ứng
        $(".main-content > div").hide();
        $($(this).attr("href")).show();
        $(".menu a").not($(this)).parent().removeClass("color-click");
        
    });
    
    // Đọc dữ liệu từ file JSON
    // ===== CHUYÊN MÔN =====
    fetch("./json/chuyen-mon.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(informs) {
        let place = document.querySelector("#chuyen-mon");
        let out = "";
        for (let inform of informs) {
            out += `
            <div class="flex box">
                <div class="sub-picture">
                    <img src="${inform.image}" alt="${inform.name}">
                </div>
                <div class="short-content">
                    <h3>
                        <a href="${inform.link}">${inform.name}</a>
                    </h3>
                    <div class="sub-info">
                        <div class="flex ">
                            <p> <i class="fa-regular fa-clock"></i> ${inform.time}</p>
                            <p class="view"><i class="fa-regular fa-eye"></i> Đã xem: ${inform.view} </p>
                            <p><i class="fa-regular fa-comment"></i> Phản hồi: ${inform.comment}</p>
                        </div>
                        <div>
                            <p>Đối tượng tham gia: ${inform.member}}</p>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }
        place.innerHTML = out;
    })

    // ===== CUỘC THI =====
    fetch("./json/cuoc-thi.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(competitions) {
        let place = document.querySelector("#cuoc-thi");
        let out = "";
        for (let competition of competitions) {
            out += `
                <div class="flex box">
                    <div class="sub-picture">
                        <img src="${competition.image}" alt="${competition.name}">
                    </div>
                    <div class="short-content">
                        <h3>
                            <a href="${competition.link}">${competition.name}</a>
                        </h3>
                        <div class="sub-info">
                            <div class="flex ">
                                <p> <i class="fa-regular fa-clock"></i> ${competition.time}</p>
                                <p class="view"><i class="fa-regular fa-eye"></i> Đã xem: ${competition.view} </p>
                                <p><i class="fa-regular fa-comment"></i> Phản hồi: ${competition.comment}</p>
                            </div>
                            <div>
                                <p>Đối tượng tham gia: ${competition.member}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }
        place.innerHTML = out;
    })

    // JS reponsive trên thiết bị di động:
        $(".open-menu").click(function() {
            $(this).hide();
            $(".close-menu").show();
            $(".menu").show();
            $(".thong-ke").show();
        });
        $(".close-menu").click(function() {
            $(this).hide();
            $(".open-menu").show();
            $(".menu").hide();
            $(".thong-ke").hide();
        });
        // $(window).resize(function() {
        //     $(".open-menu").hide();
        //     $(".close-menu").hide();
        //     $(".menu").show();
        //     $(".thong-ke").show();
        // })
})




