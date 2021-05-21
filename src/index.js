import './sass/main.scss';
import menu from './menu.json';
import template from './templates/menu-template.hbs';

// const STORAGE_KEY = 'changeTheme';

const refs = {
  themeSwitchCheckbox: document.querySelector('#theme-switch-toggle'),
  myBodyTheme: document.querySelector('body'),
  menuTemplate: document.querySelector('.menu.js-menu'),
};

const cardMarkup = template(menu);

refs.menuTemplate.insertAdjacentHTML('beforeend', cardMarkup);
refs.themeSwitchCheckbox.addEventListener('change', switchCheckbox);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function switchCheckbox(evt) {
  if (refs.themeSwitchCheckbox.checked) {
    switchColorTheme();
  } else {
    switchColorTheme();
  }
}

function switchColorTheme() {
  console.log('DArk');
  refs.myBodyTheme.classList.remove(Theme.LIGHT);
  //   localStorage.setItem(STORAGE_KEY, Theme.DARK);
  refs.myBodyTheme.classList.add(Theme.DARK);
  refs.themeSwitchCheckbox.checked = true;
}

function switchColorTheme() {
  refs.myBodyTheme.classList.remove(Theme.DARK);
  //   localStorage.setItem(STORAGE_KEY, Theme.LIGHT);
  refs.myBodyTheme.classList.add(Theme.LIGHT);
}
