// ナビゲーションメニューにスクロール時に動きをつける
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add("navbar-active");
    } else {
        navbar.classList.remove("navbar-active");
    }
}
