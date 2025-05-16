import loadHome from './home';

console.log('JavaScript is running!');

// Initially load home page content
loadHome();

// Setup tab switching logic
const content = document.getElementById('content');

const homeBtn = document.getElementById('home-btn');
const menuBtn = document.getElementById('menu-btn');
const contactBtn = document.getElementById('contact-btn');

homeBtn.addEventListener('click', () => {
  content.innerHTML = '';
  loadHome();
});

menuBtn.addEventListener('click', () => {
  content.innerHTML = '';
  import('./menu').then(module => {
    module.default();
  });
});

contactBtn.addEventListener('click', () => {
  content.innerHTML = '';
  import('./contact').then(module => {
    module.default();
  });
});
