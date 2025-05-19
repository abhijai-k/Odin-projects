import './style.css';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

function clearContent() {
  document.getElementById('content').innerHTML = '';
}

function initializeSite() {
  document.getElementById('home-btn').addEventListener('click', () => {
    clearContent();
    loadHome();
  });

  document.getElementById('menu-btn').addEventListener('click', () => {
    clearContent();
    loadMenu();
  });

  document.getElementById('contact-btn').addEventListener('click', () => {
    clearContent();
    loadContact();
  });

  loadHome(); // Load homepage on first visit
}

document.addEventListener('DOMContentLoaded', initializeSite);
