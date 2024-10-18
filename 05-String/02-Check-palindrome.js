let str = "RaCeCar";
let str2 = "";

for (let i = str.length - 1; i >= 0; i--) {
  str2 += str[i];
}
let flag = true;
for (let i = 0; i < str.length; i++) {
  if (str[i] != str2[i]) flag = false;
  break;
}

if (flag == true) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
}
