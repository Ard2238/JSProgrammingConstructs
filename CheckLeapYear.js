const prompt = require('prompt-sync')();

let year = prompt("Enter the year: ");
let check_leap = false;
if(year % 4 == 0){
    if( year % 100 == 0){
        if ( year % 400 == 0)
            check_leap = true;
        else
            check_leap = false;
        }
    else
        check_leap = true;
    }
else
    check_leap = false;

if(check_leap)
    console.log("The given year is a leap year.")
else
console.log("The given year is not a leap year.")