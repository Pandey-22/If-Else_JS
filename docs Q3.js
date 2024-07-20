const prompt=require('prompt-sync')();
let number=parseInt(prompt("please enter your number:-"));
if (number%7==0){
    console.log("Yes");
}
else{
    console.log("No");
}