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
        $(".menu a  ").parent().removeClass("color-click");
        $(this).parent().addClass("color-click");
         // click mở nội dung tương ứng
        $(".main-content > div").hide();
        $($(this).attr("href")).show();
    });

    let windowSize = $(window).resize().width();
    if(windowSize < 740) {
        $(".open-menu").click(function() {
            $(".side-bar-info").removeClass("remove-menu");
            $(".side-bar-info").addClass("move-menu");
            $(".side-bar-info").show();
            $(".open-menu").hide();
        });
        //CLICK TKB
        $(".click-menu > li:first-child > a").click(function() {
            $(".side-bar-info").addClass("remove-menu");
            $(".side-bar-info").hide(600);
            $(".open-menu").show(500);
        })
        // CLICK SUB_MENU
        $(".click-sub-menu").click(function() {
            $(".side-bar-info").addClass("remove-menu");
            $(".side-bar-info").hide(600);
            $(".open-menu").show(500);
        })
        // JS reponsive trên thiết bị di động:
       
    }
    else {
        $("page-info").addClass("block");
    }
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
                            <p>Đối tượng tham gia: ${inform.member}</p>
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
    // VĂN BẢN BIỂU MẪU
    // === CẤP TRƯỜNG ===
    fetch("./json/van-ban-cap-truong.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(texts) {
        let place = document.querySelector("#cap-truong");
        let out = "";
        for (let text of texts) {
            out += `
            <div class="flex box">
                <div class="sub-picture">
                    <img src="${text.image}" alt="${text.name}">
                </div>
                <div class="short-content">
                    <h3>
                        <a href="${text.link}">${text.name}</a>
                    </h3>
                    <div class="sub-info">
                        <div class="flex ">
                            <p> <i class="fa-regular fa-clock"></i> ${text.time}</p>
                            <p class="view"><i class="fa-regular fa-eye"></i> Đã xem: ${text.view} </p>
                            <p><i class="fa-regular fa-comment"></i> Phản hồi: ${text.comment}</p>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }
        place.innerHTML = out;
    })

    // === CẤP SỞ ===
    fetch("./json/van-ban-cap-so.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(texts) {
        let place = document.querySelector("#cap-so");
        let out = "";
        for (let text of texts) {
            out += `
            <div class="flex box">
                <div class="sub-picture">
                    <img src="${text.image}" alt="${text.name}">
                </div>
                <div class="short-content">
                    <h3>
                        <a href="${text.link}">${text.name}</a>
                    </h3>
                    <div class="sub-info">
                        <div class="flex ">
                            <p> <i class="fa-regular fa-clock"></i> ${text.time}</p>
                            <p class="view"><i class="fa-regular fa-eye"></i> Đã xem: ${text.view} </p>
                            <p><i class="fa-regular fa-comment"></i> Phản hồi: ${text.comment}</p>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }
        place.innerHTML = out;
    })
    
    // === CẤP BỘ ===
    fetch("./json/van-ban-cap-bo.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(texts) {
        let place = document.querySelector("#cap-bo");
        let out = "";
        for (let text of texts) {
            out += `
            <div class="flex box">
                <div class="sub-picture">
                    <img src="${text.image}" alt="${text.name}">
                </div>
                <div class="short-content">
                    <h3>
                        <a href="${text.link}">${text.name}</a>
                    </h3>
                    <div class="sub-info">
                        <div class="flex ">
                            <p> <i class="fa-regular fa-clock"></i> ${text.time}</p>
                            <p class="view"><i class="fa-regular fa-eye"></i> Đã xem: ${text.view} </p>
                            <p><i class="fa-regular fa-comment"></i> Phản hồi: ${text.comment}</p>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }
        place.innerHTML = out;
    })
})
