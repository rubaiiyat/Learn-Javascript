const arr = [2, 5, 7, 9, 10, 11, 13, 25, 43, 46, 76, 78, 23, 54, 65];
let evenArr = [];
function evenOdd(numbers) {
  for (const num of numbers) {
    if (num % 2 == 0) {
      evenArr.push(num);
      console.log(num);
    }
  }
}

evenOdd(arr);
console.log(evenArr);
