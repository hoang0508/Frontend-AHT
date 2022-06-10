/// Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".header-menu");
const scrim = document.querySelector(".scrim");
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("show");
  scrim.classList.toggle("show-scrim");
});

scrim.addEventListener("click", () => {
  menu.classList.remove("show");
  scrim.classList.remove("show-scrim");
});

// Active Tab Product
const tabActive = document.querySelectorAll(".product-tab--action");
const productList = document.querySelectorAll(".product-list");
//
[...tabActive].forEach((item) =>
  item.addEventListener("click", handleIsAvtive)
);

function handleIsAvtive(e) {
  // Tab is-active
  [...tabActive].forEach((item) => item.classList.remove("is-active"));
  e.target.classList.add("is-active");

  // get data
  const tabNumber = e.target.dataset.tab;

  [...productList].forEach((item) => {
    item.classList.remove("active-product");

    if (item.getAttribute("data-tab") === tabNumber) {
      item.classList.add("active-product");
    }
  });
}

// slick slider

$(".about-main").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  prevArrow: false,
  nextArrow: false,
});

// Page down

function handlePageDown(e) {
  const down = document.querySelector(".page-down");
  if (this.scrollY >= 300) {
    down.classList.add("is-show");
  } else {
    down.classList.remove("is-show");
  }
}

window.addEventListener("scroll", handlePageDown);

// Validate Form, submit form

const loginForm = document.querySelector(".login");
const loginText = document.querySelector(".login-text");
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = this.elements["email"].value.trim();
  const password = this.elements["password"].value.trim();

  const regexEmail =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!regexEmail.test(email)) {
    loginText.textContent = "You need to enter the correct email character";
    loginText.style.color = "#f00";
  } else {
    loginText.textContent = "Email with correct syntax";
  }
});
