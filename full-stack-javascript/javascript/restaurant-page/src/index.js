import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';
import './style.css';


function clearContent() {
  const content = document.getElementById("content");
  content.innerHTML = '';
}

document.getElementById("homeBtn").addEventListener("click", () => {
  clearContent();
  loadHome();
});

document.getElementById("menuBtn").addEventListener("click", () => {
  clearContent();
  loadMenu();
});

document.getElementById("contactBtn").addEventListener("click", () => {
  clearContent();
  loadContact();
});


loadHome();
