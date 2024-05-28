const prompt=require('prompt-sync')();
let n=parseInt(prompt("please enter the number:-"));
if (n>0){
    console.log("Positive Number");
}
else if (n<0){
    console.log("Negative Number");
}
else{
    console.log("Zero");
}