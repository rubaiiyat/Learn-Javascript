let arr = [5, 8, 12, 20, 30];
let element = 12;

let cnt = 0;

for (ar of arr) {
  cnt++;
  if (ar == element) {
    console.log(true);
    console.log("Index: ", cnt - 1);
    console.log("Element: ", element);
  }
}
