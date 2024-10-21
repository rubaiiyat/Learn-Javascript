function addition(num1, num2) {
  return `Addition= ${num1 + num2}, Subtraction= ${
    num1 - num2
  }, Multiplication= ${num1 * num2}, Division= ${num1 / num2}, Modulus= ${
    num1 % num2
  }`;
}

const add = addition(10, 20);
console.log(add);
