const name = " shovo Dutee";
console.log(name);
function isLeapYear(year){
    return (year %4==0 && year%100 !==0)||(year %400 == 0);
 
}
// example usage 
const year = 100 ;
if(isLeapYear(year)){
    console.log(year+"is a leap year");
}
else{
    console.log(year+"is not a leap year");
}
