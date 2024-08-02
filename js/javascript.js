let btnOpenMenu = document.querySelector("#open-menu");
let btnClosenMenu = document.querySelector("#close-menu");
let menu = document.querySelector("#mobile-menu");

btnOpenMenu.addEventListener("click", () => {
    menu.classList.remove("disabled");
})

btnClosenMenu.addEventListener("click", () => {
    menu.classList.add("disabled");
})