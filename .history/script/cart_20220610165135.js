let prodCart = [];

const products = document.querySelectorAll(".product-item");

[...products].forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target);
  });
});
