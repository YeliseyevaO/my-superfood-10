import templateMarkUp from './templates.hbs';
import dishes from './menu.json';

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const bodyEl= document.querySelector("body");
const toggleEl=document.getElementById('theme-switch-toggle');
const listEl=document.querySelector('.js-menu');
console.dir(toggleEl);

function createListMarkUp(dishes) {
return dishes.map(dish => templateMarkUp(dish)).join('');
}
const cardMarkUp= createListMarkUp(dishes);
listEl.insertAdjacentHTML('beforeend', cardMarkUp);
toggleEl.addEventListener("change", onToggleChange);


function onPageLoad() {
    if (localStorage.getItem('theme') === Theme.DARK) {
        toggleEl.checked = true;
        bodyEl.classList.add(localStorage.getItem('theme'));
    } else {
        bodyEl.classList.add(Theme.LIGHT);
    }
    }
    
    onPageLoad();
    
    function  onToggleChangeс(evt) {
        
        if (toggleEl.checked === true) {
            localStorage.setItem('theme', Theme.DARK);
            bodyEl.classList.replace(Theme.LIGHT, Theme.DARK);
        } else {
            localStorage.setItem('theme', Theme.LIGHT);
             bodyEl.classList.replace(Theme.DARK, Theme.LIGHT);
        }
    }