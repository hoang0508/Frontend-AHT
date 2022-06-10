let productCart = JSON.parse(localStorage.getItem("ShoppingCart")) || [];

const products = document.querySelectorAll(".product-item");
const popupCart = document.querySelector(".popup-cart");
const hiddenCart = document.querySelector(".hidden-cart");

let productId = 1;
console.log("🚀 ~ file: cart.js ~ line 8 ~ productId", productId);
[...products].forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.classList.contains("select-cart")) {
      productId = e.target.dataset.productId;
      const productName = item.querySelector(".product-name").innerHTML;
      const productImage = item.querySelector(".product-item--image img").src;
      const productPrice = item.querySelector(".product-price").innerHTML;
      let product = {
        name: productName,
        image: productImage,
        price: productPrice,
        id: Number(productId),
        count: 1,
        totalPrice: +productPrice,
      };
      UpdateProductCart(product);
      UpdateProductHTML();
    }
  });
});

const UpdateProductCart = (product) => {
  for (let i = 0; i < productCart.length; i++) {
    if (productCart[i].id === product.id) {
      return;
    }
  }
  productCart.push(product);
};

const UpdateProductHTML = () => {
  localStorage.setItem("ShoppingCart", JSON.stringify(productCart));
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
      <div class="popup-cart--remove">
       <i class="fas fa-times icon-remove"></i>
      </div>
    </div>
      `;
    });
    hiddenCart.classList.add("show");
    popupCart.insertAdjacentHTML("beforeend", result);
  } else {
    let template = `
    <div class="hidden-cart">
    <i class="fas fa-shopping-basket"></i>
    <div>Chưa có mặt hàng nào</div>
   </div>`;
    popupCart.insertAdjacentHTML("beforeend", template);
  }
};
UpdateProductHTML();

popupCart.addEventListener("click", (e) => {
  if (e.target.classList.contains("icon-remove")) {
    const cartItem = e.target.parentNode.parentNode;
    cartItem.parentNode.removeChild(cartItem);

    const cart = productCart.filter((item) => item.id !== Number(productId));
    console.log(
      "🚀 ~ file: cart.js ~ line 77 ~ popupCart.addEventListener ~ cart",
      cart
    );
    localStorage.setItem("ShoppingCart", JSON.stringify(cart));
  }
});

//
let nunber = document.querySelector(".cart-number");
nunber.textContent =
  productCart &&
  productCart.length > 0 &&
  productCart.map((item) => item).length;
