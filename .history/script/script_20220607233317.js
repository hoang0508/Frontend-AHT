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
  console.log(
    "🚀 ~ file: script.js ~ line 30 ~ handleIsAvtive ~ tabNumber",
    tabNumber
  );
}
