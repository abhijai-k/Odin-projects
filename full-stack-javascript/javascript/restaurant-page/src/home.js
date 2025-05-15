export default function loadHome() {
  const content = document.getElementById("content");
  const homeDiv = document.createElement("div");

  const headline = document.createElement("h1");
  headline.textContent = "Welcome to Abhijai’s Restaurant";

  const image = document.createElement("img");
  image.src = "https://via.placeholder.com/400x200";
  image.alt = "Restaurant Image";

  const description = document.createElement("p");
  description.textContent = "We serve the best food with fresh ingredients and love!";

  homeDiv.appendChild(headline);
  homeDiv.appendChild(image);
  homeDiv.appendChild(description);

  content.appendChild(homeDiv);
}
