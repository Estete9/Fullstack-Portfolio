let menuBtn = document.querySelector("#menu-btn img");
let menu = document.querySelector("#menu");
let showMenu = false;
let menuElems = document.querySelectorAll("#menu a");
let main = document.querySelector("main");

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

menuElems.forEach(
  (element) =>
    (element.onclick = function () {
      menu.classList.remove("mobile-menu");
      menu.style.display = "none";
      menuBtn.setAttribute("src", "assets/header/menu.svg");
      showMenu = false;
    })
);
