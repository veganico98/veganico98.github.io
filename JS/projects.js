// Caminho do JSON com os projetos
fetch('data/projects.json')
  .then(res => res.json())
  .then(data => {
    const frontendContainer = document.getElementById('frontend-projects');
    const fullstackContainer = document.getElementById('fullstack-projects');

    data.forEach(project => {
      const slide = document.createElement('div');
      slide.className = 'swiper-slide';

      slide.innerHTML = `
        <img src="${project.imagem}" class="w-full shadow-md shadow-yellow-900/50" />
        <div class="textCard flex flex-col gap-2">
          <p>Projeto: <span class="text-orange-800">${project.nome}</span>${project.tipo ? ` - ${project.tipo}` : ''}</p>
          <p>${project.descricao}</p>
          <p>${project.tecnologias}</p>
          ${project.url ? `<p class="url">URL: <a href="${project.url}" target="_blank">${project.url}</a></p>` : ''}
          ${project.status ? `<p>${project.status}</p>` : ''}
        </div>
      `;

      if (project.categoria === "Front-End") {
        frontendContainer.appendChild(slide);
      } else if (project.categoria === "Full-Stack") {
        fullstackContainer.appendChild(slide);
      }
    });

    new Swiper('.proj1 .swiper', {
      navigation: {
        nextEl: '.proj1 .swiper-button-next',
        prevEl: '.proj1 .swiper-button-prev',
      },
      loop: true
    });

    new Swiper('.proj2 .swiper', {
      navigation: {
        nextEl: '.proj2 .swiper-button-next',
        prevEl: '.proj2 .swiper-button-prev',
      },
      loop: true
    });
  })
  .catch(err => {
    console.error('Erro ao carregar os projetos:', err);
  });
