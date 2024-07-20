const prompt=require('prompt-sync')();
let number=parseInt(prompt("please enter a number:-"));
if (number%10==3){
    console.log("End with 3");
}
else if (number%10==7){
    console.log("End with 7");
}
else{
    console.log("The number is itself");
}