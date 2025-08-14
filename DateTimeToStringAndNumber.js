const date = new Date();
//Full date with timezone
console.log("Current Date:", date);
// Current timestamp in milliseconds/number
console.log("Current Timestamp:", new Date().getTime());

const dateString = date.toString();
const dateString2 = date.toLocaleString();
const dateString3 = date.toDateString();
const dateNumber = Date.parse(dateString);
console.log("Date String:", dateString);
console.log("Date String 2:", dateString2);
console.log("Date String 3:", dateString3);
console.log("Date Number:", dateNumber);
const time = date.toLocaleTimeString();
console.log(time); // 1:13:12 PM