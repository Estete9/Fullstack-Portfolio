// DYNAMICALLY POPULATED PROJECTS
const workSection = document.getElementById('works-container');
const projects = [];

for (let i = 0; i < 4; i++) {
  const project = {
    name: 'Tonic',
    client: 'CANOPY',
    role: 'Back End Dev',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',
    imgSrc: 'assets/works/Portfolio1.png',
    techs: ['HTML', 'CSS', 'JavaScript'],
    liveVersion: '/',
    source: '/',
    year: '2022',
  };
  projects.push(project);
}

for (const project of projects) {
  const cardWrapper = document.createElement('div');
  cardWrapper.className = 'card work';
  const cardWrapperHtml = `
    <img
      class='card-img'
      src='${project.imgSrc}'
      alt='project screenshot'
    />
    <div class='card-content'>
      <h1 class='card-title'>${project.name}</h1>
      <div class='details-container'>
        <p class='client'>${project.client}</p>
        <img src='assets/works/Counter.png' alt='' />
        <p class='role'>${project.role}</p>
        <img src='assets/works/Counter.png' alt='' />
        <p class='year'>${projects.year}</p>
      </div>
      <p class='work-description'>
        ${project.description}
      </p>
      <ul class='tags'>
        <li class='tag'>${project.techs[0]}</li>
        <li class='tag'>${project.techs[1]}</li>
        <li class='tag'>${project.techs[2]}</li>
      </ul>
      <button id='see-project-btn' class='cta-btn'>See project</button>
    </div>
  `;

  cardWrapper.innerHTML = cardWrapperHtml;
  workSection.appendChild(cardWrapper);
}
// MOBILE MENU LOGIC
const menuBtn = document.querySelector('#menu-btn img');
const menu = document.querySelector('#menu');
const menuElems = document.querySelectorAll('#menu a');
let showMenu = false;
menuBtn.style.zIndex = '3';

menuBtn.onclick = function () {
  if (!showMenu) {
    menu.classList.add('mobile-menu');
    menu.style.display = 'flex';
    menuBtn.setAttribute('src', 'assets/header/menu-close.svg');
    showMenu = true;
  } else {
    menu.classList.remove('mobile-menu');
    menu.style.display = 'none';
    menuBtn.setAttribute('src', 'assets/header/menu.svg');
    showMenu = false;
  }
};

menuElems.forEach((element) => {
  element.onclick = function () {
    menu.classList.remove('mobile-menu');
    menu.style.display = 'none';
    menuBtn.setAttribute('src', 'assets/header/menu.svg');
    showMenu = false;
  };
});

// POPUP LOGIC
const projectBtsNodes = document.querySelectorAll('.card-content .cta-btn');
const overlay = document.querySelector('#overlay');
const blur = document.querySelector('#blur');

const popupCard = `
<div id='popup-header'>
  <h1 id='popup-title'>${projects[0].name}</h1>
  <img id='popup-close' src='assets/header/cancel.svg' alt=''>
</div>
<div class='details-container'>
  <p class='client'>${projects[0].client}</p>
  <img src='./assets/works/Counter.png' alt='' />
  <p class='role'>${projects[0].role}</p>
  <img src='./assets/works/Counter.png' alt='' />
  <p class='year'>${projects[0].year}</p>
</div>
<img src='${projects[0].imgSrc}' alt='' />
<div id='popup-content'>
  <p id='popup-description'> ${projects[0].description}</p>
  <div id='interactions'>
    <ul class='tags'>
      <li class='tag'>HTML</li>
      <li class='tag'>CSS</li>
      <li class='tag'>JavaScript</li>
    </ul>
    <hr class='dividers' />
    <div class='cta-btns'>
      <button class='cta-btn'>See live <img src='./assets/header/Export.svg' alt='see live project button'/></button>
      <button class='cta-btn'>See source <img src='./assets/header/Frame.svg' alt='see code button'/></button>
    </div>
  </div>
</div>
`;
overlay.innerHTML = popupCard;

const projectBtns = Array.from(projectBtsNodes);

const closeBtn = document.querySelector('#popup-close');

function closePopup() {
  overlay.className = '';
  blur.className = '';
  closeBtn.className = '';
}

function openPopUp() {
  if (overlay.className !== 'open') {
    overlay.className = 'open';
    blur.className = 'open';
    closeBtn.className = 'open';
  }
}
closeBtn.onclick = closePopup

for (const btn of projectBtns) {
  btn.addEventListener('click', openPopUp);
}


