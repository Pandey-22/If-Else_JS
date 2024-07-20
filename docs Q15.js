const prompt=require('prompt-sync')();
let l=parseInt(prompt("please enter a length:-"));
let b=parseInt(prompt("please enter a width:-"));
let AR=l*b;
let PR=2*(l+b);
if (AR>PR){
    console.log("Area of Rectangle is Greater");
}
else if (PR>AR){
    console.log("Perimete of Rectangle is Greater");
}
else{
    console.log("Both are Equal");
}