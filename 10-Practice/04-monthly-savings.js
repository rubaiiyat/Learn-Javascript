function monthlySavings(arr, livingCost) {
  if (Array.isArray(arr)) {
    let sum = 0;

    for (ar of arr) {
      if (ar >= 3000) {
        let tax = (3000 * 20) / 100;
        ar = ar - tax;

        sum += ar;
      } else {
        sum += ar;
      }
    }
    let savings = sum - livingCost;

    if (savings < 0) {
      return "earn more";
    }
    return savings;
  } else {
    return "invalid input";
  }
}

console.log(monthlySavings(100, [900, 2700, 3400]));
