export default function loadContact() {
  const content = document.getElementById('content');

  const headline = document.createElement('h1');
  headline.textContent = 'Contact Us';

  const phone = document.createElement('p');
  phone.textContent = 'Phone: 123-456-7890';

  const email = document.createElement('p');
  email.textContent = 'Email: contact@restaurant.com';

  content.appendChild(headline);
  content.appendChild(phone);
  content.appendChild(email);
}
