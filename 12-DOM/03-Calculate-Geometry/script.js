function CalculateArea(num1, num2) {
  const number1 = parseFloat(document.getElementById(num1).value);
  const number2 = parseFloat(document.getElementById(num2).value);

  if (!isNaN(number1) && !isNaN(number2)) {
    const area = number1 * number2;
    return area;
  } else {
    return "Insert valid input";
  }
}
// Triangle
document.getElementById("triangleBtn").addEventListener("click", function () {
  let base = "base";
  let height = "height";

  let area = CalculateArea(base, height);

  let displayValue = document.getElementById("displayValueTriangle");
  if (typeof area === "number") {
    displayValue.innerHTML = `
      <p >Area (A) = ${0.5 * area} cm<sup>2</sup></p>
    `;
  } else {
    displayValue.innerHTML = `
      <p id="displayError">Insert Valid Input</p>
    `;

    let displayError = document.getElementById("displayError");
    displayError.style.color = "#f23737";
  }
});
// Rectangle
document.getElementById("rectangleBtn").addEventListener("click", function () {
  let width = "width";
  let length = "length";

  let area = CalculateArea(width, length);

  let displayValue = document.getElementById("displayValueRectangle");
  if (typeof area === "number") {
    displayValue.innerHTML = `
      <p >Area (A) = ${area} cm<sup>2</sup></p>
    `;
  } else {
    displayValue.innerHTML = `
      <p id="displayErrorRectangle">Insert Valid Input</p>
    `;

    let displayError = document.getElementById("displayErrorRectangle");
    displayError.style.color = "#f23737";
  }
});

/* document.getElementById("triangleBtn").addEventListener("click", function () {
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
}); */
