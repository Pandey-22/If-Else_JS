const prompt=require('prompt-sync')();
let hello=prompt("please enter a character:-");
if (hello>="a" && hello<="z"){
    console.log("it is lowercase");
}
else if (hello>="A" && hello<="Z"){
    console.log("IT IS UPPERCASE");
} 
else{
    console.log("both condition are false");
}