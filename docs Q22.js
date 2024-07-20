const prompt=require('prompt-sync')();
let n=parseInt(prompt("please enter an integer:-"));
if (n%2==0){
    console.log(n);
}
else{
    console.log(n*2);
}