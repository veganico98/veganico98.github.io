import { splitString } from "./skill.js"

export default function initProjects(){

    const projectGrid = document.querySelector('#projectsArea')

    function getProjects(){
        fetch('./src/json/projects.json')
        .then(response => response.json())
        .then(body => {
            body.forEach(item => {
                const card = document.createElement("div");

                card.classList.add(...splitString("bg-neutral-800 flex flex-col rounded-2xl border border-neutral-300/30 hover:[filter:drop-shadow(0_0_15px_rgba(250,204,21,0.35))] duration-700"));
                card.appendChild(renderImageCard(item.img));
                card.appendChild(renderDataCard(item.title, item.desc, item.tools, item.rep, item.deploy));


                projectGrid.appendChild(card)
            })
        })
    }

    function renderImageCard(image){
        const cardImage = document.createElement("img");
        cardImage.classList.add(...splitString("w-full aspect-video object-cover rounded-t-2xl"));
        cardImage.src = `./src/img/projects/${image}.png`;
        return cardImage;
    }

    function renderDataCard(title, desc, tool, github, deploy){
        const dataDiv = document.createElement("div");
        const cardTitle = document.createElement("h1");
        const cardDesc = document.createElement("p");

        cardTitle.innerText = title;
        cardDesc.innerText = desc;

        dataDiv.classList.add(...splitString("w-full py-6 px-5 flex flex-col gap-3"));
        cardTitle.classList.add(...splitString("text-2xl font-bold text-yellow-400"));
        cardDesc.classList.add(...splitString("text-sm text-neutral-300 break-words"));

        dataDiv.appendChild(cardTitle);
        dataDiv.appendChild(cardDesc);
        dataDiv.appendChild(renderTools(tool))
        dataDiv.appendChild(renderLinks(github, deploy))
        

        return dataDiv;
    }

    


    getProjects()
}

export function renderTools(tool){
    const toolsDiv = document.createElement("div");
    toolsDiv.classList.add(...splitString("grid grid-cols-2 md:grid-cols-3 gap-2 p-5"));

    tool.forEach(item => {
        const tools = document.createElement("p");
        tools.innerText = item;
        tools.classList.add(...splitString("bg-neutral-950 text-neutral-500 rounded-md flex items-center justify-center py-1"));
        toolsDiv.appendChild(tools)
    })

    return toolsDiv;
}

export function renderLinks(github, deploy){    
    const linkDiv = document.createElement("div");
    linkDiv.classList.add(...splitString("grid grid-cols-2 gap-2 p-5"));
    const linkStyles = "bg-neutral-950 text-neutral-500 rounded-md flex items-center justify-center gap-2 py-1 hover:bg-neutral-900 hover:[filter:drop-shadow(0_0_2px_rgba(250,204,21,0.35))] duration-500";

    const githubLink = document.createElement("a");
    const deployLink = document.createElement("a");
    const githubIcon = document.createElement("i");
    githubIcon.classList.add("devicon-github-original");

    githubLink.classList.add(...splitString(linkStyles));
    githubLink.innerText = "Github";
    githubLink.prepend(githubIcon);
    githubLink.href = github;

    deployLink.classList.add(...splitString(linkStyles));
    deployLink.innerText = "Deploy"
    deployLink.href = deploy;

    linkDiv.appendChild(githubLink);
    linkDiv.appendChild(deployLink);
    return linkDiv
}