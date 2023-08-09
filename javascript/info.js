var a = document.querySelector('.menu > li:child(2) > a');
a.onclick = function(){
    a.querySelector('ul.sub-menu').style.display = "block";
}
