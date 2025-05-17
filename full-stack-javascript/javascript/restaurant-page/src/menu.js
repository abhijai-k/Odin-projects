export default function loadMenu() {
  const content = document.getElementById('content');
  const menuDiv = document.createElement('div');

  const title = document.createElement('h2');
  title.textContent = 'Our Menu';

  const item1 = document.createElement('p');
  item1.textContent = 'Pizza - $12';

  const item2 = document.createElement('p');
  item2.textContent = 'Pasta - $10';

  menuDiv.appendChild(title);
  menuDiv.appendChild(item1);
  menuDiv.appendChild(item2);
  content.appendChild(menuDiv);
}
