let icon = document.querySelector(".menu__icon");
let menu = document.querySelector(".nav__list");

icon.addEventListener("click", function() {
    if (icon.classList.contains("fa-bars")) {
        menu.style.left = 0;
        icon.classList = "fa fa-times menu__icon";
    } else {
        menu.style.left = "-250px";
        icon.classList = "fa fa-bars menu__icon";
    }
})
