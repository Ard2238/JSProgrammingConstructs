const prompt = require('prompt-sync')();

let num1 = prompt("Enter the first number: ");
let num2 = prompt("Enter the second number: ");
let num3 = prompt("Enter the third number: ");

let op1_result = Integer.parseInt(num1) + num2 * num3;
let op2_result = num1 % num2 + Integer.parseInt(num3);
let op3_result = Integer.parseInt(num3) + num1 / num2;
let op4_result = num1 * num2 + Integer.parseInt(num3);

let min = op1_result;
let max = op1_result;

if(op1_result > op2_result && op1_result > op3_result && op1_result > op4_result)
    max = op1_result;
else if(op2_result > op3_result && op2_result > op4_result)
    max = op2_result;
else if(op3_result > op4_result)
    max = op3_result;
else   
    max = op4_result;

if(op1_result < op2_result && op1_result < op3_result && op1_result < op4_result)
    min = op1_result;
else if(op2_result < op3_result && op2_result < op4_result)
    min = op2_result;
else if(op3_result < op4_result)
    min = op3_result;
else   
    min = op4_result;

console.log("op1_result " + op1_result)
console.log("op2_result " + op2_result)
console.log("op3_result " + op3_result)
console.log("op4_result " + op4_result)
console.log("Minimum: " + min)
console.log("Maximum: " + max)


