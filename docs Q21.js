const prompt=require('prompt-sync')();
let n1=parseInt(prompt("please enter the 1st number:-"));
let n2=parseInt(prompt("please enter the 2nd number:-"));
if (n1>n2){
    console.log("Greater Number = ",n1);
}
else if (n2>n1){
    console.log("Greater Number = ",n2);
}
else{
    console.log("equal")
}