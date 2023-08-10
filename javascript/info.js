// Click để mở sub-menu
let clickSubMenu = document.querySelector('.menu li p');
let subMenu = document.querySelector('.sub-menu');
clickSubMenu.addEventListener('click', function() {
    subMenu.classList.add('block');
})
