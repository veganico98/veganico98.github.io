export default function initMenumobile(){}

const mobileMenu = document.querySelector("#mobileMenu");
const mobileBtn = document.querySelector("#mobileButton");

mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
    mobileMenu.classList.add("cursor-pointer");
});

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("flex");
    mobileMenu.classList.remove("cursor-pointer");
})