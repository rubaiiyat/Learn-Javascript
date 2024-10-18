let arr = [1, 2, 2, 3, 4, 4, 4];
let element = 4;

cnt = 0;

for (ar of arr) {
  if (ar == element) {
    cnt++;
  }
}

console.log(`${element} have in array total ${cnt} Times`);
