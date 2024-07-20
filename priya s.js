// const prompt=require('prompt-sync')();
// let x=parseInt(prompt("please enter the 1st number:-"));
// let y=parseInt(prompt("please enter the 2nd number:-"));
// if ((x==0 && y==0) || (x==0 && y>0) || (x>0 && y==0) || (x==0 && y<0) || (x<0 && y==0)){
//     console.log(0);
// }
// else if (x>0 && y>0){
//     console.log("Quadrant 1");
// }
// else if (x<0 && y>0){
//     console.log("Quadrant 2");
// }
// else if (x>0 && y<0){
//     console.log("Quadrant 3")
// }
// else{
//     console.log("Quadrant 4");
// }






const prompt=require('prompt-sync')();
let number=parseInt(prompt("please enter the number:-"));
if (number>0 && number<25){
    console.log(number+5);
}
else if (number>=25 && number<50){
    console.log(number+10);
}
else{
    console.log(number);
}
