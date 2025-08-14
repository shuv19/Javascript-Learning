let browser="Firefox";
//Here even though we pass chrome , it will print "You re using chrome" and after that it goes to firefox and since it will be incorrect it will again go to else block and hence unknown browser,if we pass firefox since firefox if is associated with else so only if block will execute , actually this type of if blocks is a buggy code
//Prints both You are using Chrome & Unknown browser
// if (browser === "Chrome") {
//     console.log("You are using Chrome");
// }  if (browser === "Firefox") {
//     console.log("You are using Firefox");
// } else {
//     console.log("Unknown browser");
// }
//Logic wise it is correct but performance wise it is very slow,because if the logic satisfies at 100 th index it will unnecessarily iterate and check through 99 items.
if (browser === "Chrome") {
    console.log("You are using Chrome");
} else if (browser === "Firefox") {
    console.log("You are using Firefox");
} else {
    console.log("Unknown browser");
}

function checkGrade(score){
    if (score >= 90) {
        console.log("Grade: A");
    } else if (score >= 80) {
        console.log("Grade: B");
    } else if (score >= 70) {
        console.log("Grade: C");
    } else {
        console.log("Grade: D");
    }
}
checkGrade(85);
