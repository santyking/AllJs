// ***** nested or lexical scoping *****
// let a = 10;
// function outer() {
//     let b = 5;
//     function inner() {
//         let c= 7;
//         console.log(a,b,c);
//     }  
//     inner(); 
// }
// outer();
// op : 10 5 7

// ***** Closure *****
/*function outer() {
    let a = 0;
    function inner() {
        a++;
        console.log(a);
    }
    inner();
}
outer();
outer();
Op:
1
1
*/


// ***** javascript closure *****
/*
function outer() {
    let a = 0;
    function inner() {
        a++;
        console.log(a);
    }
    return inner;
}
let res = outer();
res();
res();
Op:
1
2
*/

/*
// ***** currying *****
sum = (a,b,c) =>{
    return a+b+c;
}
// console.log(sum(2,2,2)); // Op : 6
// This will give output as 6, but we want to have curry function for better error handling

function curry(fn) {
    return function(a){
        return function(b){
            return function(c){
                return fn(a,b,c)
            }
        }
    }
    
}
const curriedsum = curry(sum);
// first way
// console.log(curriedsum(2)(2)(2));

// // second way to curry a fucntion
let add2 = curriedsum(2);
let add3 = add2(2);
let add4 = add3(2);
console.log(add4);
// Op: 6
*/

// ***** This keyword *****
// function greeter(name) {
//     console.log(`My name is ${name}`);
// }
// greeter("Santosh");
// greeter("Ankita");
// Op:
// My name is Santosh
// My name is Ankita

// Implicit Binding
// const person = {
//     name:"Santosh",
//     sayName: function() {
//         console.log(`My name is ${this.name}`);
        
//     }
// }
// person.sayName();
// My name is Santosh
// when a function is called with this keyword, the object name to the left is what this keyword is refering to in implicit binding

// In Explicit Binding
// The arguement which is passed to a call method is what this keyword is referring to
// const person = {
//     name:"Santosh"
// }
// function sayMyName(name) {
//     console.log(`Hello!My name is ${this.name}`);
// }
// sayMyName.call(person);
//Op: Hello!My name is Santosh

// new binding
// when we invoke a function with new keyword, this keyword will reference an empty obj
// globalThis.name = "Ironman";
// function person(name) {
//     // this = {}
//     this.name = name;
// }
// const p1 = new person("Santosh");
// const p2 = new person("Ankita");
// console.log(p1.name,p2.name);
// Santosh Ankita

// default binding
// globalThis.name = "Ironman";
// function sayMyName(name) {
//     console.log(`Hello!My name is ${this.name}`);
// }
// sayMyName();
// Op: Hello!My name is Ironman
// if nothing matches, the binding is default binding in which the system relies on the globalThis


// anonymous function
// let multiplication = function(a,b){
//     let mul = a*b;
//     // console.log(`The Multiplication of ${a} and ${b} is :`+ a*b);
//     console.log(`The Multiplication of ${a} and ${b} is : ${mul}`);
// };
// multiplication(3,4);

// ***** prototype *****
/*
function displayDetails(fname,lname) {
    this.firstName = fname;
    this.lastName = lname;
}
const d1 = new displayDetails("Santosh","Mhatre");
const d2 = new displayDetails("Ankita","Mhatre");
// Since js is a dynamic language,we can extend the properties here
d1.getFullname = function () {
    return this.firstName + ' ' + this.lastName; 
}
console.log(d1.getFullname());
// Op: Santosh Mhatre
// but if we try 
// console.log(d2.getFullname());
// we get error
// so we use prototype such that we can use for any n number of objects
// displayDetails.prototype.getFullname = function() {
//     return this.firstName+' '+this.lastName;
// }
// console.log(d1.getFullname());
// Op: Santosh Mhatre
*/
// prototype inheritance
// function person(fname,lname) {
//     this.firstName = fname;
//     this.lastName = lname;
// }
// person.prototype.getFullName = function () {
//     return this.firstName+ ' '+ this.lastName;
// }
// function superhero(fname,lname) {
//     person.call(this,fname,lname)
//     this.isSuperHero = true;
// }
// superhero.prototype.fightCrime = function () {
//     console.log('Fighting Crime');
// }
// superhero.prototype = Object.create(person.prototype);
// const batman  = new superhero('Iron','Man');
// superhero.prototype.constructor = superhero;
// console.log(batman.getFullName());

// Classes in Javascript
// this is how we write classes instead of functions which we did earlier
/*
class Person {
    constructor(fname,lname){
        this.firstName = fname;
        this.lastName = lname;
    }
    introduce(){
        return 'Hi, i am '+this.firstName+' '+this.lastName+'.'
    }
}
const p1 = new Person("Santosh","Mhatre");
const p2 = new Person("Ankita","Mhatre");
console.log(p1.introduce());
console.log(p2.introduce());
*/
// now we will learn on how to do inheritance using classes instead of prototypes
/*
class Person{
    constructor(fname,lname){
        this.firstName = fname;
        this.lastName = lname;
    }
    sayMyName(){
        return this.firstName+' '+this.lastName;
    }
}
const p1 = new Person("Santosh","Mhatre");
console.log(p1.sayMyName());

class superhero extends Person{
    constructor(fname,lname){
        super(fname,lname);
        this.isSuperHero = true;
    }
    fightCrime(){
        console.log("Fighting Crime");
    }
}
const batman = new superhero("Bruce","Wayne");
console.log(batman.sayMyName());
*/
// iterators in javascipt
// For loop syntax is diffrent for iterating through a loop vs iterating for an Array. We need a unified method to iterate in javascript. Hence from 2015, there is a new syntax for of in which syntax is the same for both string and Array. As of now only these 2 are supported. But when it comes to other data structures , for of is not compatible. so to make it compatible with for of loop, we will use iterators for which syntax is give below
/*
const person  = {
    [Symbol.iterator]:function () {
        let step=0;
        const iterator = {
            next: function () {
                step++;
                if (step===1) {
                    return {value : 'hello',done:false}
                }
                else if(step===2){
                    return {value : 'world',done:false}
                }
                return {value:undefined,done:true}
            }
        };
        return iterator;
    }
}

for (const word of obj) {
    console.log(word);
}
*/

// the above syntax is too Hard, we need to take care of multiple things, so better this can be minimized using generators. 

// Generators in Javascript

// below is the basic syntax of function
// function normalFunction() {
//     console.log("Hello");
//     console.log("World");
// }
// once a function is called,it continous the execution until the function code is finished execution. we cannot iterate here
// generator function can stop midway and can continue execution from where it stopped 
// this is done using yeild keyword
function* generatorFunction() {
    yield 'Hello';
    yield 'World';
}
// here the generator function returns generator object. now generator object is an iterator
const generatorObject = generatorFunction();
for (const word of generatorObject) {
    console.log(word);
}