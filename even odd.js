const prompt=require('prompt-sync')();
let number=parseInt(prompt("please enter your number:-"));
if (number%2==0){
    console.log("even");
}
else{
    console.log("odd");
}