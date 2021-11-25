let menuBtn = document.querySelector('#menu__btn');
let menu = document.querySelector('.header .menu');
let body = document.querySelector('body');

menuBtn.onclick = () => {
  menuBtn.classList.toggle('fa-times');
  menu.classList.toggle('_active');
  body.classList.toggle('_lock');
}