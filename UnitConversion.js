let feet = 1;
let inch = 1/12 * feet;

let toFindFeet = 42 * inch;
console.log("A: 42 inches = " + toFindFeet + " feet.");

let length = 60;
let breadth = 40;
let areaOfOneInFeet = length * breadth;
let areaOfOneInAcre = areaOfOneInFeet / 43560;

let areaOf25 = areaOfOneInAcre * 25;

console.log("B: Area of One field in square foot: " + areaOfOneInFeet + ",  in acres: " + areaOfOneInAcre);
console.log("C: Area of 25 such plots: " + areaOf25 + " acres");