const prompt=require('prompt-sync')();
let temp=parseInt(prompt("please enter a temperature:-"));
if (temp>=100){
    console.log("Water is boilling");
}
else{
    console.log("Water is not boilling");
}