function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
const n = 5;
const fact = factorial(n);
console.log(`The Factorial of ${n} is: ${fact}`);
