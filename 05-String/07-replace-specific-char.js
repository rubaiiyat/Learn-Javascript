let str = "hello world";
let charToReplace = "o";
let newChar = "O";

let str2 = "";
for (let i = 0; i < str.length; i++) {
  if (str[i] != charToReplace) {
    str2 += str[i];
  } else {
    str2 += newChar;
  }
}

console.log(str2);
