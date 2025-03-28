let showItemCount = 5;
let allRecipe = [];
let searchRecipe = [];
document.getElementById("searchBtn").addEventListener("click", function () {
  const searchValue = document.getElementById("default-search").value;
  const errorText = document.getElementById("ErrorText");
  if (!searchValue == "") {
    fetch(`https://dummyjson.com/recipes/search?q=${searchValue}`)
      .then((res) => res.json())
      .then((data) => {
        allRecipe = data.recipes;
        displayData();
      });
    errorText.innerText = "";
  } else {
    errorText.innerText = "No Item Found . Please Enter Valid Input";
  }
});

function displayData() {
  const totalFood = document.getElementById("totalFood");
  totalFood.innerText = allRecipe.length;

  const limitedData = allRecipe.slice(0, showItemCount);

  console.log(showItemCount);
  const mainDiv = document.getElementById("mainDiv");
  mainDiv.innerHTML = "";
  limitedData.forEach((recipes) => {
    const price = Math.round(Math.random() * 15) + 5;

    const newDiv = document.createElement("div");
    newDiv.classList =
      "card bg-base-100 w-96 shadow-xl hover:shadow-2xl hover:cursor-pointer";

    newDiv.innerHTML = `

    <a href="#">
        <img class="p-8 rounded" src="${recipes.image}" alt="product image" />
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${recipes.name}</h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
            <div class="flex items-center space-x-1 rtl:space-x-reverse">
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
            </div>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">${recipes.rating}</span>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">$${price}</span>
            <button onclick='showDetails(${recipes.id})' class="btn btn-accent">Show Details</button>
        </div>
    </div>
    
    `;

    mainDiv.appendChild(newDiv);
  });
}

document
  .getElementById("showMoreItemBtn")
  .addEventListener("click", function () {
    showItemCount += 5;
    const errorText = document.getElementById("ErrorText");
    if (showItemCount < allRecipe.length) {
      displayData();
      errorText.innerText = "";
    } else {
      errorText.innerText = "No more items to display!";
    }
  });

function showDetails(id) {
  fetch(`https://dummyjson.com/recipes/${id}`)
    .then((res) => res.json())
    .then((data) => modalData(data));
}

function modalData(data) {
  my_modal_4.showModal();

  const myModal = document.getElementById("my_modal_4");

  const itemName = (document.getElementById("itemName").innerText = data.name);

  const description = (document.getElementById("description").innerText =
    data.instructions);

  const rating = (document.getElementById("rating").innerText = data.rating);
  const review = (document.getElementById("review").innerText =
    data.reviewCount);
  const tags = (document.getElementById("tags").innerText = data.tags);

  const modalDiv = document.getElementById("modalDiv");

  const img = document.getElementById("myImg");
  img.src = data.image;
  console.log(data);
}
/* 
document.getElementById("searchBtn").addEventListener("click", function () {
  const searchValue = document
    .getElementById("default-search")
    .value.toLowerCase();

  allRecipe.forEach((recipe) => {
    const filtervalue = recipe.name.filter(searchValue);
    console.log(filtervalue);
  });
}); */
