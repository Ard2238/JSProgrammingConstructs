const prompt = require('prompt-sync')();

let choice = prompt("1. Feet to Inch \n2. Inch To Feet \n3. Feet To Meter \n4. Meter To Feet");
switch(choice){
    case 1:{
        let num = prompt("Enter the number in Feet : ");
        console.log(num * 12);
        break;
    }
    case 2:{
        let num = prompt("Enter the number in Meter : ");
        console.log(num / 12);
        break;
    }
    case 3:{
        let num = prompt("Enter the number in Feet : ");
        console.log(num * 3 / 10);
        break;
    }
    case 4:{
        let num = prompt("Enter the number in Meter : ");
        console.log(num * 10 / 3);
        break;
    }
    default:{
        console.log("Wrong Input !");
    }
}

