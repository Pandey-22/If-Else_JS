const prompt=require('prompt-sync')();
let l=prompt("please enter a length");
let b=prompt("please enter a width");
l=parseInt(l);
b=parseInt(b);
AR=l*b;
PR=2*(l+b);
if (AR>PR){
    console.log("Area of Rectangle is Greater");
}
else if (PR>AR){
    console.log("Perimete of Rectangle is Greater");
}
else{
    console.log("Both are Equal");
}