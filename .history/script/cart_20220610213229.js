let productCart = [];

const products = document.querySelectorAll(".product-item");
const popupCart = document.querySelector(".popup-cart");
const hiddenCart = document.querySelector(".hidden-cart");
[...products].forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.classList.contains("select-cart")) {
      const productId = e.target.dataset.productId;
      const productName = item.querySelector(".product-name").innerHTML;
      const productImage = item.querySelector(".product-item--image img").src;
      const productPrice = item.querySelector(".product-price").innerHTML;
      console.log(
        "🚀 ~ file: cart.js ~ line 13 ~ item.addEventListener ~ productPrice",
        productPrice
      );
      let product = {
        name: productName,
        image: productImage,
        price: productPrice,
        id: productId,
        count: 1,
        totalPrice: +productPrice,
      };
      UpdateProductCart(product);
      UpdateProductHTML();
    }
  });
});

const UpdateProductCart = (product) => {
  for (let i = 0; productCart.length > 0; i++) {
    if (productCart[i].id == product.id) {
      // productCart.count += 1;
      // productItem.price = productItem.price * product.count;
      return;
    }
  }
  productCart.push(product);
};

const UpdateProductHTML = () => {
  popupCart.innerHTML = "";
  if (productCart.length > 0) {
    let result = productCart.map((item) => {
      return `
      <div class="flex popup-cart--item">
      <img
        src="${item.image}"
        class="popup-cart--image"
        alt=""
      />
      <div class="popup-cart--info">
        <h3 class="popup-cart--name">${item.name}</h3>
        <div class="popup-cart--price">${item.price}</div>
      </div>
    </div>
      `;
    });
    hiddenCart.classList.add("show");
    popupCart.insertAdjacentHTML("beforeend", result);
  } else {
    popupCart.innerHTML = `
    <div>
    <i class="fas fa-shopping-basket"></i>
    <div>Chưa có mặt hàng nào</div>
  </div>`;
  }
};
updateShoppingCartHTML();
