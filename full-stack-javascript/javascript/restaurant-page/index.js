import loadHome from './Home';

console.log("Webpack is running!");

loadHome();

const content = document.getElementById('content');

const clearContent = () => {
  content.innerHTML = '';
};

document.getElementById('homeBtn').addEventListener('click', () => {
  clearContent();
  loadHome();
});

import loadMenu from './Menu';
document.getElementById('menuBtn').addEventListener('click', () => {
  clearContent();
  loadMenu();
});

import loadContact from './Contact';
document.getElementById('contactBtn').addEventListener('click', () => {
  clearContent();
  loadContact();
});
