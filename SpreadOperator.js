//Spread Operator(...)
let v=[1,2,3,4,5];
console.log(...v);
let d=["Shuv","Raj","Ronit"];
console.log(...d);
//Copying arrays (without mutating original).
let arr1 = [1, 2, 3];
let arr2 = [...arr1]; // shallow copy
arr2.push(4);
console.log(arr1); // [1, 2, 3]
console.log(arr2); // [1, 2, 3, 4]
//Merging arrays,Cleaner alternative to concat().
let fruits = ["apple", "banana"];
let veggies = ["carrot", "spinach"];
let food = [...fruits, ...veggies];
console.log(food);
// ["apple", "banana", "carrot", "spinach"]
//Converting strings to array of characters,Makes string manipulation easier.
let str = "Hello";
let chars = [...str];
console.log(chars); // ["H", "e", "l", "l", "o"]
//Array destructuring syntax
let arr = [1, 2, 3, 4, 5];
let [first, , third, ...others] = arr;
console.log(first);  // 1
console.log(third);  // 3
console.log(others); // [4, 5]
// Swapping values without temp variables
let j=2,k=1;
[j,k]=[k,j];
console.log(j)
console.log(k);
//Swapping 3 variables.
let av = 1, bv = 2, cv = 3;
// Rotate values: av → bv, bv → cv, cv → av
[av, bv, cv] = [bv, cv, av];
console.log(av); // 2
console.log(bv); // 3
console.log(cv); // 1
//Rotate Left by One.
let arrs = [1, 2, 3, 4, 5];
// Left rotation: first element moves to the end.
[arrs[0], arrs[1], arrs[2], arrs[3], arrs[4]] = [arrs[1], arrs[2], arrs[3], arrs[4], arrs[0]];
console.log(arrs); // [2, 3, 4, 5, 1]
let arrs1 = [1, 2, 3, 4, 5];
//Rotate Right by One.
//Right rotation: last element moves to the front.
[arrs1[0], arrs1[1], arrs1[2], arrs1[3], arrs1[4]] = [arrs1[4], arrs1[0], arrs1[1], arrs1[2], arrs1[3]];
console.log(arrs1); // [5,1,2, 3, 4]
//Rotate Left by ks,How it works:
//arr.slice(ks) → from index ks to end → [3, 4, 5]
//arr.slice(0, ks) → first k elements → [1, 2]
//Spread (...) joins them into [3, 4, 5, 1, 2].
//slice() is used to cut part of array.
let arr3 = [1, 2, 3, 4, 5];
let ks = 2; // rotate left by 2
ks = ks % arr3.length; // handle ks > length
arr3 = [...arr3.slice(ks), ...arr3.slice(0, ks)];
console.log(arr3); // [3, 4, 5, 1, 2]

//Rotate Right by ks1
//How it works:
//arr.slice(-ks1) → last ks1 elements → [4, 5]
//arr.slice(0, -ks1) → rest → [1, 2, 3]
//Spread joins them into [4, 5, 1, 2, 3].
let arrg = [1, 2, 3, 4, 5];
let ks1 = 2; // rotate right by 2
ks1 = ks1 % arrg.length; // handle ks1 > length
arrg = [...arrg.slice(-ks1), ...arrg.slice(0, -ks1)];
console.log(arrg); // [4, 5, 1, 2, 3]

//Skipping unwanted values
let arrc=["John","Doe","Developer"];
let [firstName, ,profession]=arrc;
//let [profession, ,firstName]=arrc;
console.log(firstName);
console.log(profession);
//Parsing function return values.
function employeeDetail(){
    return ["Shuv",31,"India"];
}
let [name,age,country]=employeeDetail();
console.log(name,age,country);
//Destructuring in loops,Makes iterating structured data cleaner.
let users=[["Alice",25],["Bob",34],["Ram",32]];
for (let [name,age] of users){
    console.log(`${name} is ${age} years old.`);
    }