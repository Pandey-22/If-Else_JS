const prompt=require('prompt-sync')();
let salary=prompt("please enter your salary");
let year=prompt("please enter your how many years you spend in company");
salary=parseInt(salary);
year=parseInt(year);
if (year>5){
    bonus=salary*year/100;
    total_salary=bonus+salary;
    console.log(total_salary);
}
else{
    console.log(salary);
}