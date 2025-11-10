const mainNav = document.getElementById("main-nav");
const bttns = mainNav.querySelectorAll("a");

bttns.forEach((bttn) => {
    bttn.onmouseenter = () => {
        bttn.classList.add("hover");
    }
    bttn.onmouseleave = () => {
        bttn.classList.remove("hover");
    }
});