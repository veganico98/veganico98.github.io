export default function initTheme(){

const themeBtn = document.querySelectorAll(".themeBtn");
let isLight = false;

function changeTheme(){
    if (isLight) {
        location.reload();
        return;
    }

    isLight = true;

    const textHiglight = document.querySelectorAll(".text-yellow-400");
    const textDesc = document.querySelectorAll(".text-neutral-300");
    const mainBg = document.querySelectorAll(".bg-neutral-950");
    const secondaryBg = document.querySelectorAll(".bg-neutral-900");
    const buttonBg = document.querySelectorAll(".bg-yellow-400");
    const cardBg = document.querySelectorAll(".bg-neutral-800");
    const textCard = document.querySelectorAll(".text-neutral-500");
    const textWhite = document.querySelectorAll(".text-white");
    const effect = document.querySelectorAll(".effect");
    const divCircleGif = document.querySelectorAll(".divCircleGif");
    const circleGif = document.querySelector(".circleGif");
    const hoverLinks = document.querySelectorAll(".links");
    const imageHero = document.querySelector("#imageHero");
    const menu = document.querySelector("#menu");
    const socialLinks = document.querySelectorAll(".socialLinks");
    const name = document.querySelectorAll(".name");
    const mobileButton = document.querySelector("#mobileButton");
    console.log(menu);

    mainBg.forEach(item => {
        item.classList.toggle("bg-neutral-950");
        item.classList.toggle("bg-white");
    });

    secondaryBg.forEach(item => {
        item.classList.toggle("bg-neutral-900");
        item.classList.toggle("bg-slate-200");
    });

    cardBg.forEach(item => {
        item.classList.toggle("bg-neutral-800");
        item.classList.toggle("bg-slate-300/70");
    });

    buttonBg.forEach(item => {
        item.classList.toggle("bg-yellow-400");
        item.classList.toggle("bg-indigo-400");

        item.classList.toggle("text-black");
        item.classList.toggle("text-white");

        item.classList.toggle("hover:bg-amber-300");
        item.classList.toggle("hover:bg-indigo-500");
        
    });

    textHiglight.forEach(item => {
        item.classList.toggle("text-yellow-400");
        item.classList.toggle("text-indigo-400");
    });

    textDesc.forEach(item => {
        item.classList.toggle("text-neutral-300");
        item.classList.toggle("text-slate-700");
    });

    textWhite.forEach(item => {
        item.classList.toggle("text-white");
        item.classList.toggle("text-slate-700");
    });

    textCard.forEach(item => {
        item.classList.toggle("text-neutral-500");
        item.classList.toggle("text-slate-700");
    });

    effect.forEach(item => {
        item.classList.toggle("hover:[filter:drop-shadow(0_0_10px_rgba(250,204,21,0.35))]");
        item.classList.toggle("hover:[filter:drop-shadow(0_0_5px_rgba(79,70,229,0.90))]");
    });

    divCircleGif.forEach(item => {
        item.classList.toggle("[filter:drop-shadow(0_0_10px_rgba(250,204,21,0.35))]");
        item.classList.toggle("[filter:drop-shadow(0_0_15px_rgba(79,70,229,0.90))]");
        item.classList.toggle("border-yellow-400");
        item.classList.toggle("border-indigo-400");
    });

    hoverLinks.forEach(item => {
        item.classList.toggle("hover:bg-neutral-900");
        item.classList.toggle("hover:bg-slate-300");
    });

    socialLinks.forEach(item => {
        item.classList.toggle("*:*:text-white");
        item.classList.toggle("*:*:hover:text-yellow-400");

        item.classList.toggle("*:*:text-slate-400/80");
        item.classList.toggle("*:*:hover:text-indigo-600");
    });

    name.forEach(item => {
        item.classList.toggle("logo-liquid1");
        item.classList.toggle("logo-liquid2");
    });

    menu.classList.toggle("*:*:text-white");
    menu.classList.toggle("*:*:hover:text-yellow-400");
    menu.classList.toggle("*:*:after:bg-yellow-400");
    menu.classList.toggle("max-lg:divide-white/10");

    menu.classList.toggle("*:*:text-slate-400/80");
    menu.classList.toggle("*:*:hover:text-indigo-600");
    menu.classList.toggle("*:*:after:bg-indigo-600");
    menu.classList.toggle("max-lg:divide-slate-200/40");

    themeBtn.forEach(item => {
        item.classList.toggle("hover:text-yellow-400");
        item.classList.toggle("hover:text-indigo-600");
        item.innerText = "light_off"
    });

    circleGif.src = "./src/img/gif3.gif";
    imageHero.src = "./src/img/hero2.png";
    mobileButton.src = "./src/img/icon/hamburger-menu2.png"
};

themeBtn.forEach(item => {
    item.addEventListener("click", changeTheme)
});

}