const body = document.querySelector("body");

// MOBILE MENU LOGIC
const menuBtn = document.querySelector("#menu-btn img");
const menu = document.querySelector("#menu");
const menuElems = document.querySelectorAll("#menu a");
const workSection = document.getElementById("works-container");
let showMenu = false;

// DYNAMICALLY POPULATED PROJECTS
let projects = [];

for (let i = 0; i < 4; i++) {
  let project = {
    name: "Tonic",
    client: "CANOPY",
    role: "Back End Dev",
    description:
      "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    imgSrc: "assets/works/Portfolio1.png",
    techs: ["HTML", "CSS", "JavaScript"],
    liveVersion: "/",
    source: "/",
    year: "2022",
  };
  projects.push(project);
}

for (const project of projects) {
  const cardWrapper = document.createElement("div");
  cardWrapper.className = "card work";
  let cardWrapperHtml = `
    <img
      class="card-img"
      src="${project.imgSrc}"
      alt="project screenshot"
    />
    <div class="card-content">
      <h1 class="card-title">${project.name}</h1>
      <div class="details-container">
        <p class="client">${project.client}</p>
        <img src="assets/works/Counter.png" alt="" />
        <p class="role">${project.role}</p>
        <img src="assets/works/Counter.png" alt="" />
        <p class="year">${projects.year}</p>
      </div>
      <p class="work-description">
        ${project.description}
      </p>
      <ul class="tags">
        <li class="tag">${project.techs[0]}</li>
        <li class="tag">${project.techs[1]}</li>
        <li class="tag">${project.techs[2]}</li>
      </ul>
      <button id="see-project-btn" class="cta-btn">See project</button>
    </div>
  `;

  cardWrapper.innerHTML = cardWrapperHtml;
  workSection.appendChild(cardWrapper);
}

menuBtn.style.zIndex = "3";

menuBtn.onclick = function () {
  if (!showMenu) {
    menu.classList.add("mobile-menu");
    menu.style.display = "flex";
    menuBtn.setAttribute("src", "assets/header/menu-close.svg");
    showMenu = true;
  } else {
    menu.classList.remove("mobile-menu");
    menu.style.display = "none";
    menuBtn.setAttribute("src", "assets/header/menu.svg");
    showMenu = false;
  }
};

menuElems.forEach((element) => {
  element.onclick = function () {
    menu.classList.remove("mobile-menu");
    menu.style.display = "none";
    menuBtn.setAttribute("src", "assets/header/menu.svg");
    showMenu = false;
  };
});

// POPUP LOGIC
const projectBtns = document.querySelectorAll(".card-content .cta-btn");
const overlay = document.querySelector(".overlay");
const blur = document.querySelector('.blur')

let popupCard = `
<h1 id="popup-title">${projects[0].name}</h1>
<img src="./assets/header/cancel.svg" alt="close button" />
<div class="details-container">
  <p class="client">${projects[0].client}</p>
  <img src="./assets/works/Counter.png" alt="" />
  <p class="role">${projects[0].role}</p>
  <img src="./assets/works/Counter.png" alt="" />
  <p class="year">${projects[0].year}</p>
</div>

<img src="${projects[0].imgSrc}" alt="" />
<p> ${projects[0].description}</p>
<ul class="tags">
  <li class="tag">HTML</li>
  <li class="tag">CSS</li>
  <li class="tag">JavaScript</li>
</ul>
<hr class="dividers" />
<div class="cta-btns">
  <button class="cta-btn">See live</button>
  <button class="cta-btn">See source</button>
</div>
`;

projectBtns.forEach((btn) => {
  btn.onclick = function () {
    overlay.style.display = "flex";
    blur.style.display = "flex";
    overlay.innerHTML = popupCard;
    body.appendChild(popupWrapper);
  };
});

const closeBtn = document.querySelector("#popup-close-btn");

closeBtn.onclick = function () {
  overlay.style.display = "none";
  blur.style.display = "none";
};
