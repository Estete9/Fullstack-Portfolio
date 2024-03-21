// DYNAMICALLY POPULATED PROJECT  \\
const workSection = document.getElementById('works-container');
const project1 = {
  name: 'BookCar Rental',
  client: 'Personal Project',
  role: 'Full Stack Developer',
  shortDescription:
  'A seamless and user-friendly platform for users to view and reserve cars for rides. The application is built with React and communicates with a Rails API backend named BookCar-API.',
  description:
  'BookCar is a car booking application developed as part of the Microverse Full-Stack Web Development Program’s capstone project. it provides a seamless and user-friendly platform for users to view and reserve cars for rides. The application is built with React and communicates with a Rails API backend named BookCar-API. This application demonstrates proficiency in full-stack web development, including React, Redux, Tailwind CSS, React-Router, and Rails API development. It showcases the ability to build a robust frontend that communicates effectively with a backend service, and manage application state using modern tools and libraries.',
  imgsSrc: [
    'assets/works/Desktop/second-project/Screenshot 2024-03-19 154852.png',
    'assets/works/Desktop/second-project/Screenshot 2024-03-19 154910.png',
    'assets/works/Desktop/second-project/Screenshot 2024-03-19 154932.png',
    'assets/works/Desktop/second-project/Screenshot 2024-03-19 154947.png',
    'assets/works/Desktop/second-project/Screenshot 2024-03-19 155031.png',
  ],
  techs: ['React', 'Tailwind', 'PostgreSQL', 'Ruby on Rails', 'Redux'],
  liveVersion: '/',
  source: '/',
  year: '2024',
};

const project2 = {
  name: 'TodoList - Task Manager',
  client: 'Microverse',
  role: 'Full Stack Dev',
  shortDescription:
    "A minimalist task manager that allows you to add and remove tasks, and also update their contents or it's status to completed.",
  description:
    "A minimalist task manager that allows you to add and remove tasks, and also update their contents or it's status to completed.",
  imgsSrc: ['assets/works/Desktop/first-project/Screenshot-todo-list-orange.png'],
  techs: ['HTML', 'SCSS', 'JavaScript', 'Webpack', 'Jest'],
  liveVersion: '/',
  source: '/',
  year: '2023',
};

const projects = [project1, project2];

projects.forEach((project, index) => {
  const cardWrapper = document.createElement('div');
  cardWrapper.className = 'card work';
  const cardWrapperHtml = `
  <img
  class='card-img'
  src='${project.imgsSrc[0]}'
  alt='project screenshot'
  />
  <div class='card-content'>
  <h1 class='card-title'>${project.name}</h1>
  <div class='details-container'>
  <p class='client'>${project.client}</p>
  <img src='assets/works/Counter.png' alt='' />
  <p class='role'>${project.role}</p>
  <img src='assets/works/Counter.png' alt='' />
  <p class='year'>${project.year}</p>
  </div>
  <p class='work-description'>
  ${project.shortDescription}
  </p>
  <ul id='tech${index}' class='tags'>
  </ul>
  <button id='see-project-btn' class='cta-btn'>See project</button>
  </div>
  `;
  
  cardWrapper.innerHTML = cardWrapperHtml;
  workSection.appendChild(cardWrapper);
  const tagsContainer = document.getElementById(`tech${index}`);
  
  project.techs.forEach((tech) => {
    const li = document.createElement('li');
    li.className = 'tag';
    li.textContent = tech;
    tagsContainer.appendChild(li);
  });
});

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
    // hides menu if only if it's in a mobile screen
    if(window.innerWidth <= 768){
      menu.style.display = 'none';
    } 
    menuBtn.setAttribute('src', 'assets/header/menu.svg');
    showMenu = false;
  };
});

// POPUP LOGIC  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const projectBtsNodes = document.querySelectorAll('.card-content .cta-btn');
const overlay = document.querySelector('#overlay');
const blur = document.querySelector('#blur');

const popupCard = `
  <div id='popup-header'>
    <h1 id='popup-title'></h1>
    <img id='popup-close' src='assets/header/cancel.svg' alt=''>
  </div>
  <div class='details-container'>
    <p id='client'></p>
    <img src='./assets/works/Counter.png' alt='' />
    <p id='role'></p>
    <img src='./assets/works/Counter.png' alt='' />
    <p id='year'></p>
  </div>
    <div id="default-carousel" class="relative">
      <!-- Carousel wrapper -->
        <div id="carousel-wrapper" class="overflow-hidden relative h-56 rounded-lg sm:h-64">
        <!-- Item 1 -->
        <div class="duration-700 ease-in-out" data-carousel-item>
            <span class="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
            <img id="img1" class="block absolute top-1/2 left-1/2 h-full -translate-x-1/2 -translate-y-1/2" alt="...">
        </div>
        <!-- Item 2 -->
        <div class=" duration-700 ease-in-out" data-carousel-item>
            <img id="img2" class="block absolute top-1/2 left-1/2 h-full -translate-x-1/2 -translate-y-1/2" alt="...">
        </div>
        <!-- Item 3 -->
        <div class=" duration-700 ease-in-out" data-carousel-item>
            <img id="img3" class="block absolute top-1/2 left-1/2 h-full -translate-x-1/2 -translate-y-1/2" alt="...">
        </div>
        <!-- Slider controls -->
        <button type="button" class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
            <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                <span class="hidden">Previous</span>
            </span>
        </button>
        <button type="button" class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
            <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span class="hidden">Next</span>
            </span>
        </button>
        </div>
        <!-- Slider indicators -->
        <div class="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        </div>
    </div>
  <div id='popup-content'>
    <p id='popup-description'></p>
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

closeBtn.onclick = closePopup;

function openPopUp(index) {
  if (overlay.className !== 'open') {
    overlay.className = 'open';
    blur.className = 'open';
    closeBtn.className = 'open';
    console.log(projects[index].client)
    document.getElementById('popup-title').textContent = projects[index].name;
    document.getElementById('client').textContent = projects[index].client;
    document.getElementById('role').textContent = projects[index].role;
    document.getElementById('year').textContent = projects[index].year;
    document.getElementById('popup-description').textContent = projects[index].description;
    document.getElementById('img1').src = projects[index].imgsSrc[0];
    document.getElementById('img2').src = projects[index].imgsSrc[0];
    document.getElementById('img3').src = projects[index].imgsSrc[0];
  }
}

for (let i = 0; i < projectBtns.length; i += 1) {
  const btn = projectBtns[i];
  btn.addEventListener('click', () => openPopUp(i));
}

// FORM VALIDATION LOGIC \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const form = document.getElementById('contact-form');

function showError() {
  const error = document.querySelector('small');
  error.className = 'show';
  error.innerText = 'Please, email with only lowercase.';
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailForm = form.elements['user-email'];
  let emailValid = false;
  if (emailForm.value === emailForm.value.toLowerCase()) {
    emailValid = true;
  }
  if (emailValid) {
    form.submit();
    form.reset();
  } else {
    showError();
  }
});

// FORM'S LOCAL STORAGE \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const formElements = document.querySelectorAll('#contact-form *');
const elemArr = Array.from(formElements);
// save the form's elements' values into the local storage
function storeFormValues(element) {
  localStorage.setItem(element.id, element.value);
}
// loop through all these elements
for (let i = 0; i < elemArr.length; i += 1) {
  // set an onchange function that saves the value in the form's element
  elemArr[i].onchange = () => storeFormValues(elemArr[i]);
}

//  REPOPULATE FORM'S ELEMENTS' CONTENT \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function getFromStorage(id) {
  return localStorage.getItem(id);
}

// loads from local storage and updates the form's content
function repopulateForm() {
  for (let i = 0; i < elemArr.length; i += 1) {
    elemArr[i].value = getFromStorage(elemArr[i].id);
  }
}

window.onload = repopulateForm();
















