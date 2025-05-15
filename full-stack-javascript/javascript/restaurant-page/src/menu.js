export default function loadMenu() {
  const content = document.getElementById("content");
  const menuDiv = document.createElement("div");

  const title = document.createElement("h2");
  title.textContent = "Our Menu";

  const item1 = document.createElement("p");
  item1.textContent = "🍕 Pizza - Fresh from the oven!";

  const item2 = document.createElement("p");
  item2.textContent = "🥗 Caesar Salad - Crisp and refreshing!";

  const item3 = document.createElement("p");
  item3.textContent = "🍔 Burger - Juicy and delicious!";

  menuDiv.appendChild(title);
  menuDiv.appendChild(item1);
  menuDiv.appendChild(item2);
  menuDiv.appendChild(item3);

  content.appendChild(menuDiv);
}
