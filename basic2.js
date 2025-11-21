// type conversion 
//let s = "123";
//let n = Number(s);  // Converts string to number
//console.log(n);
//let bool = true ; 
//let s=String(bool);
//console.log(s)
// er por dekhi 
// automatic type conversion korbo 
let n = 5 ; 
let m = "5";// string nilam 
let res= n+m ;  // string ar number er jog 
console.log(res);

// bool ar number er jog korbo nau 
let bool = true ; 
let dol = 10 ; 
let res1 = bool + dol ;
console.log(res1);
console.log(bool==dol);

// if statement

const age = 18 ; 
if (age>= 18) {
       console.log("You are an adult");
}


// if...else da dekhai 
const score = 40 ;
if (score>= 50){
       console.log("passed");
}
else {
       console.log("U failed ");
}


// amara if...else..if statement ta dekhbo 
const temp = 26 ; 
if (temp> 30){
       console.log("its hot ");
}
else if (temp >= 20) {
       console.log("Its warm ");
}
else {
       console.log("Its cold ");
}


// switch statement 
const day="monday";
switch(day){
       case "Monday": 
         console.log("start of the week");
         break ; 
       case "Friday": 
            console.log("End of the workweek");
            break ;
       default : 
            console.log("Its a regular day");
}

//tenary operator nije dekhba 

// ajker moto tata 




// function da kor 
function greet(name){
       console.log("Hello,"+name);

}
greet();
greet("Aman");

// add 
function add(a,b){
       return a+b ;
}
dutee=add(10,6);
console.log(dutee)


// named function
function greet() {
       return "Hello" ;
}
console.log(greet());

// annoynomous function 
const greet1=function(){
       return "Hi,there" ;

};
console.log(greet1());

// function expression 
const add1 =function(a,b) {
       return a + b ;
};
console.log(add1(2,3));

// arrow function 
const square = n=> n*n ;
console.log(square(4));

// Immediately Invoked Function expression 
(function(){
       console.log("chita  runs too fast ");
}) ();

//  call back function 
function num(n,callback){
       return callback(n);

}
const dounle = (n)=> n*2 ;
console.log(num(5,dounle))

// constructor function 
function person(name,age){
       this.name=name ;
       this.age = age ;

}
const user=new person("Neha",22);
console.log(user.name);

// async theke suru korbo 
async function  fetchDeta(){
       return "Data fetch" ;
}
fetchDeta().then(console.log);

// generator function 
function* numbers1(){
       yield 1 ;
       yield 2 ;
       yield 3 ;
}
const gen=numbers1()
console.log(gen.next().value);
console.log(gen.next().value);

function factorial(n){
       if (n==0) return 1 ;
       return n*factorial(n-1);
}
console.log(factorial(5));

// higher order function 
function multiplyBy(factor) {
  return function(num) {
    return num * factor;
  };
}

const double = multiplyBy(2);
console.log(double(5)); 
// binding of function 

// bind() method 
const person12 = {
    name: 'Shovo',
    maysha: function() {
        console.log('Hello, ' + this.name);
    }
};
const maysha = person12.maysha;
const boundmaysha = maysha.bind(person);
boundmaysha();