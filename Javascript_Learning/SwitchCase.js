function checkDayOfWeek(day){
    switch(day){
        case 1:day="Monday";break;
        case 2:day="Tuesday";break;
        case 3:day="Wednesday";break;
        case 4:day="Thursday";break;
        case 5:day="Friday";break;
        case 6:day="Saturday";break;
        case 7:day="Sunday";break;
       default:day="Invalid day";break;
    }
    //Below is wrong
    //  switch(day){
    //     case 1:day="Monday";
    //     case 2:day="Tuesday";
    //     case 3:day="Wednesday";
    //     case 4:day="Thursday";
    //     case 5:day="Friday";
    //     case 6:day="Saturday";
    //     case 7:day="Sunday";
    //    default:day="Invalid day";
    // }
    //console.log(day);
    return day; // Return the day for further processing if needed
}
console.log(checkDayOfWeek(1)); // Output: Wednesday
//checkDayOfWeek(1);
function checkBrowser(browser){
    switch(browser){
        case "chrome":browser="Chrome";break;
        case "firefox":browser="Firefox";break;
        case "safari":browser="Safari";break;
        case "edge":browser="Edge";break;
        case "opera":browser="Opera";break;
       default:browser="Invalid browser";break;
    }
    // console.log(browser);
    return browser; // Return the browser for further processing if needed
}
console.log(checkBrowser("chrome")); // Output: Chrome
//checkBrowser("chrome");
