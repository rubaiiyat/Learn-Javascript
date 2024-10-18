let str = "hello world";
str.toLowerCase();
let count = 0;
for (st of str) {
  if ((st == "a") | (st == "e") || (st == "i") | (st == "o") | (st == "u")) {
    count++;
  }
}

console.log("Total Vowels:", count);
