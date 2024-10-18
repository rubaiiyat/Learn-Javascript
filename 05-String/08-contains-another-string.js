let str = "data science";
let subStr = "science ";

const arr = str.split(" ");

let flag = false;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == subStr) {
    flag = true;
    break;
  }
}

console.log(flag);
