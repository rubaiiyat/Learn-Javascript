document
  .getElementById("addProductCart")
  .addEventListener("click", function () {
    const productName = document.getElementById("productName").value;
    const productQuantity = document.getElementById("productQuantity").value;

    displayData(productName, productQuantity);
    saveProductLocalStorage(productName, productQuantity);
  });

function displayData(productName, productQuantity) {
  const addProduct = document.getElementById("addProduct");

  const ul = document.createElement("ul");

  ul.innerHTML = `
    
    <li class="mt-5 text-xl text-white">${productName}: ${productQuantity}</li>
    
    `;

  addProduct.appendChild(ul);
}

const getStoredShoppingCart = () => {
  let cart = {};
  const storedCart = localStorage.getItem("cart");

  if (storedCart) {
    cart = JSON.parse(storedCart);
  }

  return cart;
};

const saveProductLocalStorage = (product, quantity) => {
  const cart = getStoredShoppingCart();
  cart[product] = quantity;

  const stringified = JSON.stringify(cart);
  localStorage.setItem("cart", stringified);
};

const displayDataFromLocaStorage = () => {
  const savedCart = getStoredShoppingCart();

  for (const product in savedCart) {
    const quantity = savedCart[product];
    displayData(product, quantity);
  }
};

displayDataFromLocaStorage();
