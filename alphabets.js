const prompt=require('prompt-sync')();
alphabets=prompt("please enter a type");
if ((alphabets>="a" && alphabets<="z") || (alphabets>="A" && alphabets<="Z")){
   console.log("it is a alphabets");
}
else{
    console.log("no it is not a alphabets");
}