var x=10;
function test() {
    var x = 20;
    console.log(x); }
test();
console.log(x);
//Redeclaration using var is possible in JS with latest value getting assigned ,which is not in java
var browser = "Chrome";
var browser = "Firefox";
browser = "Safari";
console.log(browser); // Output: Safari
var g;
console.log(g); // Output: undefined
g= 10;
console.log(g); // Output: 10
//Issue with var redeclaration, we can never use "Hey Shubham" as it will always be overwritten by "Hello Shuv"
//This is because var is function scoped and the last value assigned will be the one that is used.
var flag="Hey Shubham";
var t=4;
if(t>3) {
var flag="Hello Shuv";
}
console.log(flag);//Here Hey Shubham will never be printed as it is overridden by hello Shuv.
//let and const are block scoped, so they do not have the same issue as var,if let is blocked scoped then we can only use it in the block and becomes undefined if used outside the block
let y = "Hello Yuv";
let time = 5;
if (time > 3) {
    let msg = "Hey hw r u?";
    console.log(y); // Output: Hey Yuv
    console.log(msg); // Output: Hey hw r u?
}
console.log(y); // Output: Hey Yuv,we can access y because it is globally declared.
   // console.log(msg);
    let a=8;
   // let a=9;redclaration with  reinitialised is not possible in let but in var.
   a=9;//reinitialised is possible. 

const ab="Shuv";
// ab="Hello Shuv";
// console.log(ab); // Output: TypeError: Assignment to constant variable.
function calculateProduct(num1, num2) {
    let product=num1*num2;
    console.log("The product of num1 and num2 is %d.", product);
   
}
calculateProduct(3,67);
let count=8;
let message=`There are ${count} jet planes in the battleground.`;
console.log(message); // Output: There are 8 jet planes in the battleground.
let abc = 6;
let b = 9;
let c = abc * b;

// stops the execution
debugger;

console.log(c);

