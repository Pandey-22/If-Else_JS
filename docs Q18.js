// const prompt=require('prompt-sync')();
// let q=parseInt(prompt("please enter a lenth of side 1:-"));
// let p=parseInt(prompt("please enter a lenth of side 2:-"));
// let r=parseInt(prompt("please enter a lenth of side 3:-"));
// if (p+q<r || q+r<p || p+r<q){
//     console.log("not a tringle");
// }
// else{
//     console.log("a tringle");
// }




console.log("please enter a tringle side:-");
const prompt=require('prompt-sync')();
let a=parseInt(prompt("x:-"));
let b=parseInt(prompt("y:-"));
let c=parseInt(prompt("z:-"));
if (a==b==c){
    console.log("equalateral");
}
else if (a==b || b==c || c==a){
    console.log("isosceles tringle");
}
else{
    console.log("scalene tringle");
}