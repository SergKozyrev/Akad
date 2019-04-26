var menuBtn = document.querySelector(".open-menu");
var menu = document.querySelector(".header-menu__list");
menuBtn.addEventListener("click", function () {
    this.classList.toggle("open-menu--active");
    menu.classList.toggle("header-menu__list--active");
});