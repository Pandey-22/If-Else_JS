const prompt=require('prompt-sync')();
let days=parseInt(prompt("enter the number"));
if (days<=5){
    console.log(days*2);
}
else if (days>=6 && days<=10){
    console.log((days-5)*3+5*2);
}
else if (days>=11 && days<=15){
    console.log((days-10)*4+5*3+5*2);
}
else{
    console.log((days-15)*5+5*4+5*3+5*2);
}