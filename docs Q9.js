const prompt=require('prompt-sync')();
let number=prompt("please enter your number");
number=parseInt(number);
if (number>=100){
    console.log("Water is boilling");
}
else{
    console.log("Water is not boilling");
}