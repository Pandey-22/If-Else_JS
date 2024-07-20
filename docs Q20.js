// const prompt=require('prompt-sync')();
// let classheld=parseInt(prompt("please enter how many classes are held:-"));
// let classattend=parseInt(prompt("please enter how many classes are attended by student:-"));
// let per=classattend/classheld*100;
// if (per<75){
//     console.log("this student cannot be sit in final exam");
// }
// else{
//     console.log("this student can be sit in final exam");
// }



const prompt=require('prompt-sync')();
let a=parseInt(prompt("please enter the number:-"));
if (a>0){
    console.log(-a);
}
else if (a<0){
    console.log(-(-a));
}
else{
    console.log(0);
}