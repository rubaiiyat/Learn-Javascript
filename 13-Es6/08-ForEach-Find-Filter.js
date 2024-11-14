// ForEach
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result = arr.forEach((ar) => console.log(ar * 2));

// Filter

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const filters = numbers.filter((num) => num > 5 && num < 9);
filters ? console.log(filters) : console.log("Not Found");

// Find
const findNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const finds = findNumbers.find((num) => num > 9);
finds ? console.log(finds) : console.log("Not found");
