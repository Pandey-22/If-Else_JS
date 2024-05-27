const prompt=require('prompt-sync')();
let num1=prompt("please enter your 1st number");
let num2=prompt("please enter your 2nd number");
num1=parseInt(num1);
num2=parseInt(num2);
if (num1>num2 || num1<num2){
    console.log("Rectangle");
}
else{
    console.log("Square");
}