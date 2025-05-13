export default function loadHome() {
  const content = document.getElementById('content');
  const homeDiv = document.createElement('div');

  const heading = document.createElement('h1');
  heading.textContent = "Welcome to Abhijai's Restaurant";

  const para = document.createElement('p');
  para.textContent = "We serve delicious food with love and tradition.";

  homeDiv.appendChild(heading);
  homeDiv.appendChild(para);

  content.appendChild(homeDiv);
}
