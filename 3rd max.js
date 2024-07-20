const prompt=require('prompt-sync')();
let a=parseInt(prompt("please enter the 1st number:-"));
let b=parseInt(prompt("please enter the 2nd number:-"));
let c=parseInt(prompt("please enter the 3rd number:-"));
let d=parseInt(prompt("please enter the 4th number:-"));
if (a<b && a<c && a>d){
    console.log(a);
}
else if (a<b && a<d && a>c){
    console.log(a);
}
else if (a<c && a<d && a>b){
    console.log(a);
}
else if (b<a && b<c && b>d){
    console.log(b);
}
else if (b<a && b<d && b>c){
    console.log(b);
}
else if (b<c && b<d && b>a){
    console.log(b);
}
else if (c<a && c<b && c>d){
    console.log(c);
}
else if (c<b && c<d && c>a){
    console.log(c);
}
else if (c<a && c<d && c>b){
    console.log(c);
}
else if (d<a && d<b && d>c){
    console.log(d);
}
else if (d<b && d<c && d>a){
    console.log(d);
}
else if (d<c && d<a && d>b){
    console.log();
}
else{
    console.log(0);
}