const prompt = require('prompt-sync')();

let input = prompt("Enter a number : ");
let count = 0;
let i = 1;
while(Math.pow(2,i) <= 256 && count <= input){
    console.log(Math.pow(2,i));
    i ++;
    count ++;
}