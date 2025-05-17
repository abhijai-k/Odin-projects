export default function loadHome() {
  const content = document.getElementById('content');
  const homeDiv = document.createElement('div');

  const headline = document.createElement('h1');
  headline.textContent = 'Welcome to Our Restaurant!';

  const description = document.createElement('p');
  description.textContent = 'The best food in town with a cozy atmosphere.';

  const image = document.createElement('img');
  image.src = 'https://via.placeholder.com/300x200'; // Replace with real image later
  image.alt = 'Restaurant view';

  homeDiv.appendChild(headline);
  homeDiv.appendChild(description);
  homeDiv.appendChild(image);
  content.appendChild(homeDiv);
}
