// const prompt=require('prompt-sync')();
// let num1=parseInt(prompt("please enter the first number:-"));
// let num2=parseInt(prompt("please enter the second number:-"));
// if (num1<num2){
//     number="the lowest number";
// }
// else{ 
//     number="not lowest number";
// }   
// console.log("the first number is",number)




const prompt=require('prompt-sync')();
let num1=parseInt(prompt("please enter the 1st number:-"));
let num2=parseInt(prompt("please enter the 2nd number:-"));
let op=prompt("please enter the operator thease for specific operation:-");
if (op=='+'){
    result=num1+num2
    console.log("Result=",result);
}
else if (op=="-"){
    result=num1-num2
    console.log("Result=",result);
}
else if (op=="*"){
    result=num1*num2
    console.log("Result=",result);
}
else{
    console.log("Result is not right");
}