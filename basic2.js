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
const day="Monday";
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
const boundmaysha = maysha.bind(person12);
boundmaysha();
// call() method 
const dutee12 = {
    name: 'shapi',
    baby: function (city) {
        console.log('Hello ' + this.name + ' from ' + city);
    }
};

dutee12.baby('Delhi');          // direct call
const baby = dutee12.baby;      
baby.call(dutee12, 'Dhaka');    // using call()


// the second project 

// writing ffunctions  

function add(a,b){
       console.log(a+b);
}
add(2,3);

const add4=function(a,b){
       console.log(a+b);
}
add4(2,3);

// arrow functions 
let add5=(a,b)=> a+b ;
console.log(add5(3,2));


// example of an arrow function 
const great=(a,b) => {
       if (a>b)
              return "a is greater";
       else 
              return "b is greater";
}
console.log(great(3,5));

let employee = {
    empname: "Rahul",
    department: "sales",
    details: function () {
        return this.empname +
            " works with Department " +
            this.department;
    }
};
console.log(employee.details());
// be crowd er problem solve korte hobe 
// hosting 
console.log(a12);
var a12=10;

// function expression hosting 
function outer() {
    let outerVar = "ami duteee shovo er bouuu";
    function inner() {
        console.log(outerVar); 
        outerVar = "Updated"
    }
    return inner;  
}
const closure = outer(); 
closure();
closure();
// private variable 
function counter(){
       let count =0 ;
       return function(){
              count++;
              return count;
       };
}
const increment =counter(); 
console.log(increment());
console.log(increment());
console.log(increment());


// closure and IIFE 
const counter123 = (function () {
    let count = 0;

    return {
        increment: function () {
            count++;
            console.log(count);
        },
        reset: function () {
            count = 0;
            console.log("Counter reset");
        },
    };
})();

counter123.increment(); 
counter123.increment(); 
counter123.reset();


// closure and set timeout 
function createTimers(){
       for(let i = 0;i<=3;i++){
              setTimeout(function(){
                     console.log(i);
              },i*1000);
       }
}
createTimers();
// function currying in javascript 
function add(a){
       return function(b){
              return a + b ;
       };
}
console.log(add(2)(3));
//  class 3 
// Event loop 
console.log("Start");
setTimeout(()=>{
       console.log("SetTime out callback");
},0);
Promise.resolve().then (()=>{
       console.log("promise Resolved");
})
console.log("End");
// data structure 
let x = 21
console.log(x.toString());
console.log(x.toExponential());
console.log(x.toPrecision(4));
console.log(Number.isInteger(x));
console.log(x.toLocaleString("bn-BD"));

// string 
let str="shovo";
console.log(str[0]);
console.log(str.length);

// reverse a string 
function reverseString(value) {
       // coerce to string, support basic Unicode by spreading
       return [...String(value)].reverse().join('');
}

const reversedStr = reverseString(str);
console.log(reversedStr);

// let use for loop 
// do ur self 


// array 
let a=[];
console.log(a);

let b=[10,20,30,45,55,68,49,100];
console.log(b);
// last element of an array 
let lst = b[b.length-1];
console.log(lst);
// push method
b.push(40);
console.log(b);
// pop method
b.pop();
console.log(b);
//iterate over an array
for(let i=0;i<b.length;i++){
       console.log(b[i]);
}
console.log(typeof a);
console.log("Using Array.isArray() method: ", Array.isArray(a));
// solve array sorting problem in cp course or personally 
// starts from linkdlist 

class Node {
       constructor(value){
              this.value = value;
              this.next = null;
       }
}

class LinkedList {
       constructor(){
              this.head = null;
       }
       append(value){
              const newnode = new Node(value);
              if(!this.head){
                     this.head = newnode;
                     return;
              }
              let current = this.head;
              while(current.next){
                     current = current.next;
              }
              current.next = newnode;
       }
       printList(){
              let current = this.head;
              let result = "";
              while(current){
                     result += current.value + "->";
                     current = current.next;
              }
              console.log(result + "null");
       }
}
let list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.printList();



function Person12(name,age){
       this.name=name ;
       this.age = age ;
       this.sayHello=function(){
              console.log("Hello,my name is "+ this.name);
       }
}

const person12Instance = new Person12("Aman", 25);
person12Instance.sayHello();

//
class person13{
       constructor(name,age){
              this.name=name ;
              this.age=age ;
       }
       g(){
              console.log(`Hello ,my name is ${this.name} and I am ${this.age} years old.`);
       }
}
const person13Instance = new person13("Rina", 30);
person13Instance.g();

// 
class Car {
       constructor(make,model,year){
              this.make=make ;
              this.model=model ;
              this.year=year ;
       
       }
       d(){
              console.log(`Car: ${this.make} ${this.model}, Year: ${this.year}`);
       }
}
let my=new Car("Toyota","Camry",2020);
my.d();
// inheritance
class ElectricCar extends Car{
       constructor(make,model,year,batteryCapacity){
              super(make,model,year);
              this.batteryCapacity=batteryCapacity ;
       }
       d(){
              console.log(`Electric Car: ${this.make} ${this.model}, Year: ${this.year}, Battery Capacity: ${this.batteryCapacity} kWh`);
       }
}
let myElectricCar=new ElectricCar("Tesla","Model 3",2021,75);
myElectricCar.d();
// constructor method 
class Bar{
       constructor(make,model,year){
              this.make=make ;
              this.model=model ;
              this.year=year ;
       
       }
       getCarInfo(){
              return `${this.make} ${this.model}, ${this.year}`;
       }
}
let myCar=new Bar("Honda","Civic",2019);
console.log(myCar.getCarInfo());
// static method