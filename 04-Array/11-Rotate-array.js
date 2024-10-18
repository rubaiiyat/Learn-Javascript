let arr = [1, 2, 3, 4];

let last = arr[arr.length - 1];

arr.splice(0, 0, last);
arr.pop();

console.log(arr);
