// DYNAMICALLY POPULATED PROJECT  \\
const workSection = document.getElementById('works-container');
const project1 = {
  name: 'BookCar Rental',
  client: 'Personal Project',
  role: 'Full Stack Developer',
  sourceUrl: 'https://github.com/fmanimashaun/book-car',
  demoUrl: 'https://fmanimashaun.github.io/book-car/',
  shortDescription:
    'A seamless and user-friendly platform for users to view and reserve cars for rides. The application is built with React and communicates with a Rails API backend named BookCar-API.',
  description:
    'BookCar is a car booking app developed as part of the Microverse Full-Stack Web Development Program. It offers seamless car browsing and reservation. Built with React, it communicates with a Rails API backend called BookCar-API. This project showcases expertise in full-stack web development, including React, Redux, Tailwind CSS, React-Router, and Rails API.',
  featuredImg: 'assets/works/Desktop/first-project/Screenshot 2024-03-19 154852.png',
  imgsSrc: [
    'assets/works/Desktop/first-project/Screenshot 2024-03-19 154852.png',
    'assets/works/Desktop/first-project/Screenshot 2024-03-19 154910.png',
    'assets/works/Desktop/first-project/Screenshot 2024-03-19 154932.png',
    'assets/works/Desktop/first-project/Screenshot 2024-03-19 154947.png',
    'assets/works/Desktop/first-project/Screenshot 2024-03-19 155031.png',
  ],
  techs: ['React', 'Tailwind', 'PostgreSQL', 'Ruby on Rails', 'Redux', 'RSpec/Capybara', 'RSwag'],
  liveVersion: '/',
  source: '/',
  year: '2024',
};

const project2 = {
  name: "Where's the Money - Budget Manager",
  client: 'Personal Project',
  role: 'Full Stack Developer',
  sourceUrl: 'https://github.com/Estete9/where-s-the-money',
  demoUrl: 'https://where-s-the-money.onrender.com',
  shortDescription:
    'Take control of your finances easily! A mobile web application where you can manage your budget.',
  description: `Take control of your finances easily! 
  This mobile web app help users manage their budget by creating custom categories and tracking expenses with detailed activity lists 
  so users can see exactly where their money goes and make informed spending decisions.`,
  featuredImg: 'assets/works/Desktop/second-project/Screenshot 2024-02-10 085240.png',
  imgsSrc: [
    'assets/works/Desktop/second-project/Screenshot 2024-02-10 085240.png',
    'assets/works/Desktop/second-project/Screenshot 2024-02-10 085305.png',
    'assets/works/Desktop/second-project/Screenshot 2024-02-10 085350.png',
    'assets/works/Desktop/second-project/Screenshot 2024-02-10 085405.png',
    'assets/works/Desktop/second-project/Screenshot 2024-02-10 085428.png',
  ],
  techs: ['Ruby on Rails', 'PostgreSQL', 'SCSS', 'RSpec/Capybara', 'Devise', 'Cancancan'],
  liveVersion: '/',
  source: '/',
  year: '2023',
};

const project3 = {
  name: 'Bookstore - Book Manager',
  client: 'Personal Project',
  role: 'Full Stack Developer',
  sourceUrl: 'https://github.com/Estete9/bookstore-react',
  demoUrl: null,
  shortDescription:
    'Built a functional book list application using React for a a user-friendly interface.',
  description: `Built a functional bookstore website using React for a dynamic user experience. 
  Users can browse a list of books, add new ones to their collection, and remove them as needed. 
  The app leverages Redux for state management and SCSS for maintainable and customizable styling.`,
  featuredImg: 'assets/works/Desktop/third-project/Screenshot 2024-03-21 155139.png',
  imgsSrc: [
    'assets/works/Desktop/third-project/Screenshot 2024-03-20 203836.png',
    'assets/works/Desktop/third-project/Screenshot 2024-03-21 155129.png',
    'assets/works/Desktop/third-project/Screenshot 2024-03-21 155139.png',
  ],
  techs: ['React', 'JSX', 'SCSS', 'Redux'],
  liveVersion: '/',
  source: '/',
  year: '2023',
};

const projects = [project1, project2, project3];

projects.forEach((project, index) => {
  const cardWrapper = document.createElement('div');
  cardWrapper.className = 'card work';
  const cardWrapperHtml = `
  <img
  class='card-img'
  src='${project.featuredImg}'
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

// HEADER SCROLL LOGIC \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const logo = document.getElementById('logo')
const header = document.querySelector('header')

window.addEventListener('scroll', function() {
  const scrollY = window.scrollY
  const scrollTrigger = 350; // Initial trigger point
  const minScrollAmount = 20;

  if(scrollY > scrollTrigger && scrollY > minScrollAmount) {
    header.classList.add('scrolled')
    // header.classList.add('shrunk')
    // logo.classList.add('logoShrink');
  } else {
    header.classList.remove('scrolled');
    // header.classList.remove('shrunk');
    // logo.classList.remove('logoShrink');
  }
})

// MOBILE MENU LOGIC   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
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
    if (window.innerWidth <= 768) {
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
    <p id='popup-client'></p>
    <img src='./assets/works/Counter.png' alt='' />
    <p id='popup-role'></p>
    <img src='./assets/works/Counter.png' alt='' />
    <p id='popup-year'></p>
  </div>
  <div id="popup-wrapper">
    <!-- glide carousel  -->
    <div id="default-carousel" class="glide">
      <div id="carousel-wrapper" class="glide__track" data-glide-el="track">
        <ul id="carousel-list" class="glide__slides">
          <li class="glide__slide">
            <img id="img1" class="slide-img block h-full object-cover rounded-lg shadow-md" src="/" alt="first image" />
          </li>
          <li class="glide__slide">
            <img id="img2" class="slide-img block h-full object-cover rounded-lg shadow-md" src="/" alt="second image" />
          </li>
          <li class="glide__slide">
            <img id="img3" class="slide-img block h-full object-cover rounded-lg shadow-md" src="/" alt="third image" />
          </li>
        </ul>
      </div>
      <div class="carousel-navigation" data-glide-el="controls">
        <button class="carousel-navigation-btn" data-glide-dir="<">prev</button>
        <button class="carousel-navigation-btn" data-glide-dir=">">next</button>
      </div>
    </div>
    <!-- glide carousel  -->

    <div id='popup-content'>
      <p id='popup-description'></p>
      <div id='interactions'>
        <hr class='dividers' />
        <div class='cta-btns'>
          <a id="live-demo" class='cta-btn' href="#" target="_blank">See live <img src='./assets/header/Export.svg' alt='see live project button'/></a>
          <a id="source-code" class='cta-btn' href="#" target="_blank">See source <img src='./assets/header/Frame.svg' alt='see code button'/></a>
        </div>
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
    const sourceCodeBtn = document.getElementById('source-code');
    const liveDemoBtn = document.getElementById('live-demo');

    overlay.className = 'open';
    blur.className = 'open';
    closeBtn.className = 'open';
    document.getElementById('popup-title').textContent = projects[index].name;
    document.getElementById('popup-client').textContent = projects[index].client;
    document.getElementById('popup-role').textContent = projects[index].role;
    document.getElementById('popup-year').textContent = projects[index].year;
    document.getElementById('popup-description').textContent = projects[index].description;
    document.getElementById('img1').src = projects[index].imgsSrc[0];
    document.getElementById('img2').src = projects[index].imgsSrc[1];
    document.getElementById('img3').src = projects[index].imgsSrc[2];
    document.getElementById('carousel-list').style.width = '100%';

    document.querySelectorAll('.glide__slide').forEach((slide) => {
      slide.style.width = '100%';
    });

    sourceCodeBtn.addEventListener('click', (event) => {
      event.preventDefault;
      sourceCodeBtn.href = projects[index].sourceUrl;
    });

    if (projects[index].demoUrl == null) {
      console.log(projects[index].demoUrl);
      liveDemoBtn.style.display = 'none';
    } else {
      liveDemoBtn.style.display = 'flex';
      liveDemoBtn.addEventListener('click', (event) => {
        event.preventDefault;
        liveDemoBtn.href = projects[index].demoUrl;
      });
    }
  }
}

for (let i = 0; i < projectBtns.length; i += 1) {
  const btn = projectBtns[i];
  btn.addEventListener('click', () => openPopUp(i));
}

// KNOWLEDGE TOGGLE LOGIC \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const knowledgeHeaders = document.querySelectorAll('.knowledge-header');
const knowledgeListItems = Array.from(document.querySelectorAll('.knowledge-list-item'));

knowledgeHeaders.forEach((header) => {
  header.addEventListener('click', () => {
    const currentIndex = Array.from(knowledgeHeaders).indexOf(header);
    const arrowImage = header.querySelector('.knowledge-arrow');

    knowledgeListItems[currentIndex].classList.toggle('show');

    if(arrowImage.src.includes('Right')) {
      arrowImage.src = 'assets/about me/Icon - Chevron - Down - Larger.svg';
    } else {
      arrowImage.src = 'assets/about me/Icon - Chevron - Right - Larger.svg';
    }
  });
});
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














