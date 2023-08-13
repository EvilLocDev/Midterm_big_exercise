// Click để mở sub-menu
let clickSubMenu = document.querySelectorAll('.menu > li > span');
let subMenu = document.querySelectorAll('.sub-menu');
for (let i = 0; i < clickSubMenu.length; ++i) {
    clickSubMenu[i].addEventListener('click', function() {
        subMenu[i].classList.toggle('block');
    })
};


