const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".header-menu");
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});
