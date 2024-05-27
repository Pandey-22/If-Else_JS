const prompt=require('prompt-sync')();
let num1=prompt("please enter your 1st number");
let num2=prompt("please enter your 2nd number");
let operator=prompt("please enter a operator");
num1=parseInt(num1);
num2=parseInt(num2);
if (operator=="+"){
    console.log(num1+num2);
}
else if (operator=="-"){
    console.log(num1-num2);
}
else if (operator=="*"){
    console.log(num1*num2);
}
else{
    console.log(num1/num2);
}