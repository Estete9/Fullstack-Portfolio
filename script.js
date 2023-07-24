const menuBtn = document.querySelector('#menu-btn img');
const menu = document.querySelector('#menu');
let showMenu = false;
const menuElems = document.querySelectorAll('#menu a');

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
