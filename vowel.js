const prompt=require('prompt-sync')();
let pandey=prompt("please enter a character");
if ((pandey>="a" && pandey<="z") || (pandey>="A" && pandey<="Z")){
    console.log("it is characters");
}
else if (pandey>="0" && pandey<="9"){
    console.log("it is a number");
}
else{
    console.log("it is special character");
}