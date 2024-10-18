let arr = [1, 2, 2, 3, 4, 4, 5];

let arr2 = [];

for (let i = 0; i < arr.length; i++) {
  let isDuplicate = false;
  for (let j = 0; j < arr.length; j++) {
    if (arr2[j] == arr[i]) {
      isDuplicate = true;
    }
  }
  if (!isDuplicate) {
    arr2.push(arr[i]);
  }
}

console.log(arr2);
