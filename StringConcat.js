function stringConcat(str1,str2){    
    let concatString;
    concatString=str1+str2;
    console.log(concatString);
}
stringConcat("Hello ","Shuv!");
let str1="Hello Shuv!";
//slice extract string from start index till whole string exlusive of last index
let partStr1=str1.slice(0,8);
console.log(partStr1);
console.log(str1.substring(7));
//substring extract string from start index till whole string exlusive of last index
console.log(str1.substring(0,7));
console.log(str1.includes("Shuv"));
console.log(str1.includes("shuv"));
//first index of string which is at 6.
console.log(str1.indexOf("Shuv"));
//this is also six but it starts from right although the index will be same.
console.log(str1.lastIndexOf("Shuv"));
console.log(str1.replace("Shuv","Shubham"));
let str2="   Hello Shuv!   ";
console.log(str2.trim());
console.log(str2.trimEnd());
console.log(str2.trimStart());
let str3="Hello how are you?";
console.log(str3.split(" ")); // Split by space,[ 'Hello', 'how', 'are', 'you?' ]
console.log(str3.split("are"));//Split by are,[ 'Hello how ', ' you?' ]
console.log(str3.charAt(7));
console.log(str3.repeat(2));// repetition of string for specified number of times.
console.log((str3 + " ").repeat(2).trim());// if we want space between each occurences.
console.log(str3.padEnd(30,"."));// Pads the string with "." at the end until it reaches length 30.
console.log(str3.padStart(20,"0"));// Pads the string with "0" at the start until it reaches length 3.
//str1.localeCompare(str2) returns:
//-1 → if str1 comes before str2
//1 → if str1 comes after str2
//0 → if equal
//localeCompare() is useful to sort an array.
let str4 = 'apple';
let str5 = 'banana';
console.log(str4.localeCompare(str5)); // Output: -1
console.log(str5.localeCompare(str4)); // Output: 1
let fruits = ['apple', 'banana', 'cherry'];
//ascending sort
fruits.sort((a,b) => a.localeCompare(b));
console.log(fruits); // Output: [ 'apple', 'banana', 'cherry' ]
//descending sort
fruits.sort((a,b) => b.localeCompare(a));
console.log(fruits); // Output: [ 'cherry', 'banana', 'apple' ]
let num=[5,2,9,1,5,6];
//ascending sort
num.sort((a,b) => a-b);
console.log(num); // Output: [ 1, 2, 5, 5, 6, 9 ]
//descending sort
num.sort((a,b) => b-a);
console.log(num); // Output: [ 9, 6, 5, 5, 2, 1 ]
// g is a global flag used only when to replace all occurences, if only one occurence need to be repalced then simple replace will work
let str = 'Hello World Hello';
let newStr = str.replace(/Hello/g, 'Hi');
console.log(newStr); // 'Hi World Hi'
let s="Hello World!";
//This starts from 6th index and extract till 12 th index but leaves last index.
console.log(s.substring(6,12));
//This starts from 6th index and extract 6 characters.
console.log(s.substr(6,6));
//Reverse string word by word without using any built-in methods.
let st="Hello Shuv how are you !";
let newSt=st.split(" ");
console.log(newSt);
let revString = "";
for(let i=newSt.length-1;i>=0;i--){
    revString =revString+" "+newSt[i];
}
console.log(revString);
//Reverse string character by character without using any built-in methods.
let st3="Hello Shuv how are you !";
let newSt3=st3.split("");
console.log(newSt3);
let revString3 = "";
for(let i=newSt3.length-1;i>=0;i--){
    revString3 =revString3+newSt3[i];
}
console.log(revString3);

// Optimised with built in method
let st1 = "Hello Shuv how are you !";
let revString1 = st.split(" ").reverse().join(" ");
console.log(revString1);
// Optimised with built in method
let st2="Hello";
let revString2=st2.split("").reverse().join("");
console.log(revString2);
let sb = "Heello";
let sb1 = sb.split("");
let count = 0, sb2 = [];
let charCount = {};

// Count each character first
for (let i of sb1) {
    charCount[i] = (charCount[i] || 0) + 1;
}
console.log(charCount); // { H: 1, e: 1, l: 2, o: 1 }
// Check for characters that appear more than once
// for (let i of sb1) {
//     if (charCount[i] > 1 && !sb2.includes(i)) { // avoid duplicates in sb2
//         sb2.push(i);
//         count++;
//     }
// }
//If we want exact duplicated count
for (let i of sb1) {
    if (charCount[i] > 1 ) { // provides duplicates in sb2
        sb2.push(i);
        count++;
    }
}

console.log(count); // number of characters with duplicates
console.log(sb2);   // the characters themselves
/**Variable->Purpose
charCount ->Tracks frequency of each character
sb2       ->Stores unique characters that repeat
count     ->Stores number of unique characters that repeat*/

//Regex to create a slug from a title,Breaking down the regex /\s+/g
/*  \s	Matches any whitespace character (space, tab, newline)
+	Matches one or more occurrences of the previous pattern
/.../g	g = global flag, replaces all matches in the string, not just the first

So /\s+/g → all groups of spaces → replaced with -
let title = 'JavaScript Advanced String Handling';
let slug = title.toLowerCase().replace(/\s+/g, '-');
console.log(encodeURI(slug)); // Output: 'javascript-advanced-string-handling'
// A slug is a URL-friendly version of a string, usually used in web addresses to identify a page in a readable way.SEO preference*/
let title = 'JavaScript Advanced String Handling';
let slug = title.toLowerCase().replace(/\s+/g, '-');
console.log(encodeURI(slug)); // Output: 'javascript-advanced-string-handling'