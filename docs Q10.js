const prompt=require('prompt-sync')();
let salary=parseInt(prompt("please enter your salary:-"));
let year=parseInt(prompt("please enter how many years you spend in company:-"));
if (year>5){
    bonus=salary*year/100;
    total_salary=bonus+salary;
    console.log(total_salary);
}
else{
    console.log(salary);
}