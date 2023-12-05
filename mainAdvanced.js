// nested or lexical scoping
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
// function outer() {
//     let a = 0;
//     function inner() {
//         a++;
//         console.log(a);
//     }
//     inner();
// }
// outer();
// outer();
// javascript closure
// function outer() {
//     let a = 0;
//     function inner() {
//         a++;
//         console.log(a);
//     }
//     return inner;
// }
// let res = outer();
// res();
// res();
// currying
// sum = (a,b,c) =>{
//     return a+b+c;
// }
// // console.log(sum(2,2,2));
// function curry(fn) {
//     return function(a){
//         return function(b){
//             return function(c){
//                 return fn(a,b,c)
//             }
//         }
//     }
    
// }
// const curriedsum = curry(sum);
// console.log(curriedsum(2)(2)(2));
// closure practice
// function outer() {
//     let counter = 0;
//     function inner() {
//         counter++;
//         console.log(counter);
//     }
//     return inner;
// }
// let sm = outer();
// sm();
// sm();
// sm();
// sm();
// sm();
// currying
// function sum(a,b,c) {
//     return a+b+c;
// }
// // console.log(sum(2,2,2));
// function curry(fn) {
//     return function(a){
//         return function(b){
//             return function(c){
//                 return fn(a,b,c);     
//             }
//         }
//     }
// }
// const curriedsum = curry(sum);
// console.log(curriedsum(2)(2)(2));

// let add2 = curriedsum(2);
// let add3 = add2(2);
// let add4 = add3(2);
// console.log(add4);
function sum(a,b,c) {
    return a+b+c;
}
function curry2(fn){
    return function fn1(a) {
        return function fn2(b) {
            return function fn3(c) {
                return fn(a,b,c);
            }
        }
        
    }
}
let curriedsum = curry2(sum);
console.log(curriedsum(2)(2)(2));
// second way to curry a fucntion
let add2 = curriedsum(2);
let add3 = add2(2);
let add4 = add3(2);
console.log(add4);
// This keyword
// function greeter(name) {
//     console.log(`My name is ${name}`);
// }
// greeter("Santosh");
// greeter("Ankita");

// Implicit Binding
// const person = {
//     name:"Santosh",
//     sayName: function() {
//         console.log(`My name is ${this.name}`);
        
//     }
// }
// person.sayName();
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
// default binding
// sayMyName();
// if nothing matches, the binding is default binding in which the system relies on the globalThis
// anonymous function
// let multiplication = function(a,b){
//     let mul = a*b;
//     // console.log(`The Multiplication of ${a} and ${b} is :`+ a*b);
//     console.log(`The Multiplication of ${a} and ${b} is : ${mul}`);
// };
// multiplication(3,4);
// prototype
function displayDetails(fname,lname) {
    this.firstName = fname;
    this.lastName = lname;
}
const d1 = new displayDetails("Santosh","Mhatre");
const d2 = new displayDetails("Ankita","Mhatre");
// Since js is a dynamic language,we can extend the properties here
// d1.getFullname = function () {
//     return this.firstName + ' ' + this.lastName; 
// }
// console.log(d1.getFullname());
// op is Santosh Mhatre
// but if we try 
// console.log(d2.getFullname());
// we get error
// so we use prototype such that we can use for any n number of objects
displayDetails.prototype.getFullname = function() {
    return this.firstName+' '+this.lastName;
}
console.log(d1.getFullname());
// op is Santosh Mhatre
