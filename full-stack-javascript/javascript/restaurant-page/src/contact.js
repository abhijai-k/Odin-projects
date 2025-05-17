export default function loadContact() {
  const content = document.getElementById('content');
  const contactDiv = document.createElement('div');

  const title = document.createElement('h2');
  title.textContent = 'Contact Us';

  const phone = document.createElement('p');
  phone.textContent = 'Phone: (123) 456-7890';

  const email = document.createElement('p');
  email.textContent = 'Email: info@restaurant.com';

  contactDiv.appendChild(title);
  contactDiv.appendChild(phone);
  contactDiv.appendChild(email);
  content.appendChild(contactDiv);
}
