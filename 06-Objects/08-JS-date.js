//--Current Date--//
const currentDate = new Date();

console.log(currentDate);

//---Extract Day Month And Year--//

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

const yearDate = `${day}-${month}-${year}`;
console.log(yearDate);

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let getdays = days[date.getDay()];

console.log(getdays);

let getTime = date.getTime();
let gethour = date.getHours();
let getminute = date.getMinutes();
let getsecond = date.getSeconds();
console.log(`${gethour}-${getminute}-${getsecond}`);
