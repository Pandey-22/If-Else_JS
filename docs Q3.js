const prompt=require('prompt-sync')();
let number=prompt("please enter your number");
num=parseInt(number);
if (num%7==0){
    console.log("Yes");
}
else{
    console.log("No");
}