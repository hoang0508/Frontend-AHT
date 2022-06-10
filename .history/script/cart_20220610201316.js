let prodCart = [];

const products = document.querySelectorAll(".product-item");

[...products].forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.classList.contains("select-cart")) {
      const productId = e.target.dataset.productId;
      console.log(
        "🚀 ~ file: cart.js ~ line 9 ~ item.addEventListener ~ productId",
        productId
      );
      const productName = item.querySelector(".product-name").innerHTML;
      const productImage = item.querySelector(".product-item--image").src;
      const productPrice = item.querySelector("product-price").innerHTML;
      let product = {
        name: productName,
        image: productImage,
        price: productPrice,

        count: 1,
      };
    }
  });
});
