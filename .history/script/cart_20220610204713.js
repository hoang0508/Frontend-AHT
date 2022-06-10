let productCart = [];

const products = document.querySelectorAll(".product-item");

[...products].forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.classList.contains("select-cart")) {
      const productId = e.target.dataset.productId;
      const productName = item.querySelector(".product-name").innerHTML;
      const productImage = item.querySelector(".product-item--image").src;
      const productPrice = item.querySelector(".product-price").innerHTML;
      let product = {
        name: productName,
        image: productImage,
        price: +productPrice,
        id: productId,
        count: 1,
        totalPrice: +productPrice,
      };
      UpdateProductCart(product);
    }
  });
});

const UpdateProductCart = (product) => {
  for (const productItem of productCart) {
    if (productItem === product.id) {
      productItem.count += 1;
      productItem.price = productItem.price * product.count;
    }
  }
};
