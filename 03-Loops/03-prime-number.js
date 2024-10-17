let n = 49;
flag = true;
for (let i = 2; i <= n / 2; i++) {
  if (n % i == 0) {
    flag = false;
    console.log(i);
    break;
  }
}

if (flag) {
  console.log(n, "is a prime number");
} else {
  console.log(n, "not is prime number");
}
