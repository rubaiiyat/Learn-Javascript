function ourApi() {
  fetch("https://dummyjson.com/recipes")
    .then((res) => res.json())
    .then((data) => displayData(data.recipes));
}

ourApi();

function displayData(data) {
  const totalFood = document.getElementById("totalFood");
  totalFood.innerText = data.length;
  data.forEach((recipes) => {
    const mainDiv = document.getElementById("mainDiv");

    const newDiv = document.createElement("div");
    newDiv.classList =
      "card bg-base-100 w-96 shadow-xl hover:shadow-2xl hover:cursor-pointer";

    newDiv.innerHTML = `

    <figure class="px-10 pt-10">
            <img
              src="${recipes.image}"
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
    
    `;

    mainDiv.appendChild(newDiv);
  });
}
