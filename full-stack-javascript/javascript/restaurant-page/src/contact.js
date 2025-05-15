export default function loadContact() {
  const content = document.getElementById("content");
  const contactDiv = document.createElement("div");

  const title = document.createElement("h2");
  title.textContent = "Contact Us";

  const info = document.createElement("p");
  info.textContent = "📞 123-456-7890 | ✉️ contact@restaurant.com";

  const address = document.createElement("p");
  address.textContent = "📍 123 Main Street, Foodie City";

  contactDiv.appendChild(title);
  contactDiv.appendChild(info);
  contactDiv.appendChild(address);

  content.appendChild(contactDiv);
}
