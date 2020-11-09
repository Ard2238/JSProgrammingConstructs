const HEAD = 1;
const TAIL = 0;

let win_Heads = 0;
let win_Tails = 0;

while(win_Heads == 11 || win_Tails == 11){
    let toss = Math.floor(Math.random() * 2) % 2;
    if(toss == TAIL){
        console.log("TAIL");
        win_Tails++;
    }
    else{
        console.log("HEAD");
        win_Heads++;
    }
}