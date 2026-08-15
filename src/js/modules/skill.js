export default function initSkill(){

const skillDiv = document.querySelector('#skillsArea')

function skillGen(){
    fetch("./src/json/skill.json")
    .then(response => response.json())
    .then(body => {
        body.forEach(item => {
            const skillGrid = document.createElement("div");
            const skillIcon = document.createElement("i");
            const skillName = document.createElement("p");

            skillGrid.classList.add(...splitString("md:w-50 md:h-50 p-8 bg-neutral-800 flex flex-col gap-3 items-center justify-center rounded-2xl border-1 border-neutral-300/30 effect hover:[filter:drop-shadow(0_0_10px_rgba(250,204,21,0.35))] duration-700 cursor-pointer"));
            skillIcon.classList.add(...splitString("text-5xl text-yellow-400"));
            skillIcon.classList.add(`${item.icon}`);
            skillName.classList.add(...splitString("text-3xl text-white font-bold"));
            skillName.innerText = item.title

            skillGrid.appendChild(skillIcon);
            skillGrid.appendChild(skillName);
            skillDiv.appendChild(skillGrid);
        });
    });
};



skillGen();
};

export function splitString(text){
    return text.split(" ")
};