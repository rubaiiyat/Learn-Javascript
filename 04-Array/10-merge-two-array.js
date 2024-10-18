let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr3 = [];

for (arr of arr1) {
  arr3.push(arr);
}
for (arr of arr2) {
  arr3.push(arr);
}

console.log(arr3);
