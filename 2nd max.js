const prompt=require('prompt-sync')();
let num1=prompt("please enter the 1st number");
let num2=prompt("please enter the 2nd number");
let num3=prompt("please enter the 3rd number");
if (num1>num2 && num1>num3){
    if (num2>num3){
        console.log("The second max number is",num2);
    }
    else{
        console.log("The second max number is",num3);
    }
}
else if (num2>num1 && num2>num3){
    if (num1>num3){
        console.log("The second max number is", num1);
    }
    else{
        console.log("The second max number is", num3);
    }
}
else{
    if (num1>num2){ 
        console.log("The second max number is",num1);
    }
    else{
        console.log("The second max number is", num2);
    }
}