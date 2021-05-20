// import './sass/main.scss';
// import menu from './menu.json';
// import template from './templates/color-template.hbs';
// const THEME_KEY = 'myTheme';
// const CHECK_BOX = 'myCheckbox';

// const refs = {
//   switchCheckbox: document.querySelector('#theme-switch-toggle'),
//   myBodyThem: document.querySelector('body'),
//   menuTemplate: document.querySelector('.menu.js-menu'),
// };

// const Theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// };
// if (localStorage.getItem(THEME_KEY) == 'dark-theme') {
//   refs.switchCheckbox.checked = true;
// }

// const markup = template(menu);
// refs.menuTemplate.insertAdjacentHTML('beforeend', markup); //шаблонізація
// refs.myBodyThem.classList.add(localStorage.getItem(THEME_KEY));
// refs.switchCheckbox.addEventListener('change', funCheckbox);

// function funCheckbox(e) {
//   if (refs.switchCheckbox.checked) {
//     funCheckboxTrue();
//   } else {
//     funCheckboxFalse();
//   }
// }
// function funCheckboxTrue() {
//   refs.myBodyThem.classList.remove(localStorage.getItem(THEME_KEY));
//   localStorage.setItem(THEME_KEY, Theme.DARK);
//   refs.myBodyThem.classList.add(localStorage.getItem(THEME_KEY));
//   refs.switchCheckbox.checked = true;
// }
// function funCheckboxFalse() {
//   refs.myBodyThem.classList.remove(localStorage.getItem(THEME_KEY));
//   localStorage.setItem(THEME_KEY, Theme.LIGHT);
//   refs.myBodyThem.classList.add(localStorage.getItem(THEME_KEY));
// }
