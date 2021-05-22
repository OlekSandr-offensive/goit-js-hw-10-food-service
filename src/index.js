import './sass/main.scss';
import menu from './menu.json';
import template from './templates/menu-template.hbs';

const STORAGE_KEY = 'changeTheme';

const refs = {
  themeSwitchCheckbox: document.querySelector('#theme-switch-toggle'),
  myBodyTheme: document.querySelector('body'),
  menuTemplate: document.querySelector('.menu.js-menu'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

loadPage();

const cardMarkup = template(menu);

refs.menuTemplate.insertAdjacentHTML('beforeend', cardMarkup);
refs.themeSwitchCheckbox.addEventListener('change', switchCheckbox);

function switchCheckbox(evt) {
  if (refs.themeSwitchCheckbox.checked) {
    replaceTheme(Theme.LIGHT, Theme.DARK);
  } else {
    replaceTheme(Theme.DARK, Theme.LIGHT);
  }
}
  localStorage.setItem(STORAGE_KEY, newTheme);
  refs.myBodyTheme.classList.add(newTheme);
};

function loadPage() {
  const currentTheme = localStorage.getItem(STORAGE_KEY);
  if (currentTheme) {
    refs.myBodyTheme.classList.add(currentTheme);
  }

  if (currentTheme === Theme.DARK) {
    refs.themeSwitchCheckbox.checked = true;
  }
}
