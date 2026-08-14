import { renderTools, renderLinks } from "./projects.js";

export default function initCarousel(){
  return carousel();
}

function carousel(){
  const customControls = document.querySelector(".custom-controls");
  const slide = document.querySelector(".slide");

  return fetch("./src/json/projects.json")
    .then(response => response.json())
    .then(body => {
      body.forEach(item => {
        const li = document.createElement('li');
        const thumb = document.createElement('img');
        thumb.src = `./src/img/projects/thumb/${item.img}.png`;
        li.classList.add("cursor-pointer")
        li.appendChild(thumb);
        customControls.appendChild(li);

        slideCard(slide, item.title, item.img, item.desc, item.tools, item.rep, item.deploy);
      });
    });
}

function slideCard(slide, title, img, desc, tools, rep, deploy){
  const li = document.createElement('li');
  const card = document.createElement('div'); // "card" não é uma tag válida, troquei pra div
  const cardImg = document.createElement('img');
  cardImg.src = `./src/img/projects/${img}.png`;

  card.appendChild(cardImg);
  card.appendChild(titleDesc(title, desc));
  card.appendChild(renderTools(tools));
  card.appendChild(renderLinks(rep, deploy));

  li.appendChild(card);
  slide.appendChild(li);
}

function titleDesc(title, desc){
  const divCard = document.createElement('div');
  const h1 = document.createElement('h1');
  const p = document.createElement('p');

  divCard.classList.add("p-5");
  h1.classList.add("text-yellow-400");
  p.classList.add("text-neutral-300");

  h1.innerText = title;
  p.innerText = desc;

  divCard.appendChild(h1);
  divCard.appendChild(p);

  return divCard;
}