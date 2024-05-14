// Menu mobile e tablet

let menuButton = document.getElementById("menu-button");
let menu = document.getElementById("menu-mobile");
let overlay = document.getElementById("overlay-menu");
let mainButton = document.getElementById("mainButton");

// Adiciona o ouvinte de evento para o clique
mainButton.addEventListener("click", () => {
  // Redireciona para a seção com o ID "Contact"
  document.getElementById("Contact").scrollIntoView({ behavior: "smooth" });
});

menuButton.addEventListener("click", () => {
  menu.classList.add("open");
});

menu.addEventListener("click", () => {
  menu.classList.remove("open");
});

overlay.addEventListener("click", () => {
  menu.classList.remove("open");
});


