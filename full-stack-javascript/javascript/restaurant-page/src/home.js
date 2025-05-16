export default function loadHome() {
  const content = document.getElementById('content');

  const headline = document.createElement('h1');
  headline.textContent = 'Welcome to Our Restaurant!';

  const image = document.createElement('img');
  image.src = 'https://via.placeholder.com/600x300.png?text=Delicious+Food';
  image.alt = 'Delicious Food';

  const description = document.createElement('p');
  description.textContent = 'Experience the best food in town with fresh ingredients and a cozy atmosphere.';

  content.appendChild(headline);
  content.appendChild(image);
  content.appendChild(description);
}
