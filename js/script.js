'use strict';

const hamburger = document.querySelector('.hamburger-block');
const menu = document.querySelector('.header__nav-block');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
})