let prodCart = [];

const products = document.querySelectorAll(".product-item");

[...products].forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.classList.contains("select-cart")) {
      const productName = item.querySelector(".product-name").innerHTML;
      console.log(
        "🚀 ~ file: cart.js ~ line 9 ~ item.addEventListener ~ productName",
        productName
      );
    }
  });
});
