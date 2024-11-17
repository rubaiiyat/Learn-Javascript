function loadData() {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => displayData(data));
}

function displayData(data) {
  for (const product of data) {
    const productList = document.getElementById("productList");

    const mainDiv = document.createElement("div");
    mainDiv.classList = "";
    mainDiv.innerHTML = `
    
      <div class="card bg-base-100 w-96 shadow-xl">
        <figure class="px-10 pt-10">
          <img
            src="${product.image}"
            alt="Shoes"
            class="rounded-xl"
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">${product.title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    
    `;

    productList.append(mainDiv);
  }
}
