function sum(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n + sum(n - 1);
  }
}

const n = 20;
const total = sum(n);
console.log(`The Sum of ${n - (n - 1)} to ${n} is: ${total}`);
