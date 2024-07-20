// const prompt=require('prompt-sync')();
// let number=parseInt(prompt("please enter your number:-"));
// let last_digit=number%10;
// if (last_digit%3==0){
//     console.log("yes");
// }
// else{
//     console.log("no");
// }



const prompt=require('prompt-sync')();
let number=parseInt(prompt("please enter the number:-"));
if ((number%10)%3==0){
    console.log("Yes");
}
else{
    console.log("No");
}