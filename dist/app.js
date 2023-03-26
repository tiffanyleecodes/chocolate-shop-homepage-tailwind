const open = document.querySelector(".open");
const menu = document.querySelector(".mobileMenu");
const close = document.querySelector(".close");
const cart = document.querySelector(".cartContent");
const cartIcon = document.querySelector(".cartIcon");
const wrapper = document.querySelector(".wrapper");
const cartClose = document.querySelector(".cartClose");

open.addEventListener("click", function () {
  menu.classList.remove("-translate-x-full");
  menu.classList.add("translate-x-0");
});

close.addEventListener("click", function () {
  menu.classList.remove("translate-x-0");
  menu.classList.add("-translate-x-full");
});
cartIcon.addEventListener("click", function () {
  cart.classList.remove("translate-x-full");
  cart.classList.add("-translate-x-0");
});

cartClose.addEventListener("click", function () {
  cart.classList.remove("-translate-x-0");
  cart.classList.add("translate-x-full");
});
