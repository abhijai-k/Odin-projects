import loadHome from './home';

function clearContent() {
  const content = document.getElementById('content');
  content.innerHTML = '';
}

function initializeWebsite() {
  document.getElementById('home-tab').addEventListener('click', () => {
    clearContent();
    loadHome();
  });

  document.getElementById('menu-tab').addEventListener('click', () => {
    clearContent();
    loadMenu();
  });

  document.getElementById('contact-tab').addEventListener('click', () => {
    clearContent();
    loadContact();
  });

  loadHome();
}

import loadMenu from './menu';
import loadContact from './contact';

initializeWebsite();
