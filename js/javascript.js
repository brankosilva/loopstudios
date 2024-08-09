const navbar = document.querySelector("#navbar");
const open = document.querySelector("#openmenu");
const close = document.querySelector("#closemenu");

openmenu.addEventListener ("click", () => {
    navbar.classList.add("visible");
})

closemenu.addEventListener ("click", () => {
    navbar.classList.add("closing");
    setTimeout(() => {
        navbar.classList.remove("visible");
        navbar.classList.remove("closing");
    }, 300);
})

