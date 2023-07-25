const menuBtn = document.querySelector("#menu-btn img");
const menu = document.querySelector("#menu");
let showMenu = false;
const menuElems = document.querySelectorAll("#menu a");
class Project {
  constructor(name, description, img, techs, liveVersion, source) {
    (this.name = name),
      (this.description = description),
      (this.img = img),
      (this.techs = techs),
      (this.liveVersion = liveVersion),
      (this.source = source);
  }
}
let projects = [
  new Project(
    "Tonic",
    "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    "assets/works/Snapshoot Portfolio.png",
    ["HTML", "CSS", "JavaScript"],
    "/",
    "/"
  ),
  new Project(
    "Multi-Post Stories",
    "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    "assets/works/Snapshoot Portfolio (3).png",
    ["HTML", "CSS", "JavaScript"],
    "/",
    "/"
  ),
  new Project(
    "Facebook 360",
    "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    "assets/works/Snapshoot Portfolio (1).png",
    ["HTML", "CSS", "JavaScript"],
    "/",
    "/"
  ),
  new Project(
    "Uber Navigation",
    "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
    "assets/works/Snapshoot Portfolio (2).png",
    ["HTML", "CSS", "JavaScript"],
    "/",
    "/"
  ),
];

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
