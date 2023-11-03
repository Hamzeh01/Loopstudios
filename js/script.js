"use strict";

const btnMenu = document.getElementById("btn-menu");
const menuEl = document.getElementById("menu");

// TODO: Change event handler for hamburger menu
btnMenu.addEventListener("click", () => {
  btnMenu.classList.toggle("open");
  menuEl.classList.toggle("flex");
  menuEl.classList.toggle("hidden");
});
