document.getElementById("triangleBtn").addEventListener("click", function () {
  let base = parseFloat(document.getElementById("base").value);
  let height = parseFloat(document.getElementById("height").value);

  let calculate = 0.5 * base * height;

  let displayValue = document.getElementById("displayValue");
  let displayError = document.getElementById("displayError");
  if (isNaN(base) || isNaN(height)) {
    displayError.innerText = "Please insert valid input";
  } else {
    displayValue.innerText = `${calculate}`;
  }
});

document.getElementById("rectangleBtn").addEventListener("click", function () {
  let width = parseFloat(document.getElementById("width").value);
  let length = parseFloat(document.getElementById("length").value);

  let calculate = width * length;

  let displayValue = document.getElementById("displayValueRect");
  let displayError = document.getElementById("displayErrorRect");
  if (isNaN(width) || isNaN(length)) {
    displayError.innerText = "Please insert valid input";
  } else {
    displayValue.innerText = `${calculate}`;
  }
});
