let x=5;
console.log(++x);
console.log(x);
console.log(x++);
console.log(x);
console.log("Exponentiation: x ** 3 =", x ** 3);
const a=6;
//Since js compares from left to right, 6>2 becomes true(1) and 1>1 returns false.
console.log(6>2>1);
let r=2,t='2';
//Here js converts string t into number hence comparison results in true.
console.log(r==t);
//Here with strict equal operator js automatically doesnt converts string to number hence false.
console.log(r===t);
const z = 5, y = 3;
console.log((z< 6) && (y < 5));
console.log((z> 6) || (y < 5));
//Comma operator picks the last operand(hence 4)
let s = (1, 3, 4);
console.log(s);
let g=5>8?true:false;
console.log(g);
function basicCalculator(num1, op, num2) {
    let result;
    if(op === '+'){
        result = num1 + num2;
    } else if(op === '-'){
        result = num1 - num2;
    } else if(op === '*'){
        result = num1 * num2;
    } else if(op === '/'){
        result = num1 / num2;
    } else {
        result = num1 % num2;
    }
    console.log(result);
}
basicCalculator(2, '%', 3); // Output: 2