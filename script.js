// ナビゲーションメニューの背景色変更
window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.style.backgroundColor = "#333";  // スクロール後に背景色を変更
    } else {
        navbar.style.backgroundColor = "transparent";  // 元の状態に戻す
    }
};
