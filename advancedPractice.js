// closure practice 
// to print table
/*
function table() {
    let a = 10;
    let b = 1;
    function multiplier() {
        console.log(a*b);
        b++;
    }
    return multiplier;
}
let t1 = table();
for (let index = 1; index <= 10 ;index++) {
    t1();
}
*/
// curry function
/*
function multiplier(a,b,c) {
    return a*b*c;
}
function curriedMul(fn) {
    return function(a){
        return function(b){
            return function(c){
                return fn(a,b,c);
            }
        }
    }
}
let fno = curriedMul(multiplier);
// console.log(fno(2)(2)(2));
// second method 
let mul1 = fno(2);
let mul2 = mul1(2);
let mul3 = mul2(2);
console.log(mul3);
*/
// this keyword
// implicit binding
// let user = {
//     naav : "Gandhiji",
//     chidaw: function() {
//         console.log(`Do you know ${this.naav} is taklu haiwaan`);
//     }
// }
// user.chidaw();
// explicit binding
// const person1 = {
//     naav : "Santosh"
// }
// const person2 = {
//     naav: "Ankita"
// }
// function haakmari() {
//     console.log(`Hey ${this.naav} ikde ye chal`);
// }
// haakmari.call(person2);

// function jorathakamari(naav) {
//     this.naav = naav;
// }
// let person1 = new jorathakamari("Santosh");
// let person2 = new jorathakamari("Ankita");
// console.log(person1.naav);
// console.log(person2.naav);

// closure 4 Dec 2023
// function outer() {
//     let a = 10;
//     let b = 20;
//     function add() {
//             a+=b;
//             console.log("The Value of a in Add function is "+a);
//     }
//     return add;
// }
// let oc = new outer();
// oc();
// oc();
// currying function 

// function area(l,b,h) {
//     return l*b*h;
// }
// function CurryArea(fn) {
//     return function(l){
//         return function(b){
//             return function(h){
//                 return(l*b*h);
//             }
//         }
//     }
// }
// let CalculateArea = CurryArea(area);
// console.log(CalculateArea(10)(10)(10));

// this keyword
// Implicit binding 
// const myDetails = {
//     name:"Santosh",
//     age:30,
//     dispDet : function(){
//         console.log(`My Name is ${this.name} and i am ${this.age} years old`);
//     }
// }
// myDetails.dispDet();
// explicit binding
// const er1 = {
//     name:"Santosh"
// }
// const er2 = {
//     name:"Ankita"
// }
// function sayMyName(name) {
//      console.log(`Hello! I Am ${this.name}`);    
// }
// sayMyName.call(er1);
// sayMyName.call(er2);
// new binding 
// function person(name) {
//     this.name = name;
// }
// let p1 = new person("Santosh");
// let p2 = new person("Ankita");
// console.log(p2.name);
// default binding

// let user1 = {
//     name:"Ankita",
//     age:29
// }
// let user2 = {
//     name:"Santosh",
//     age:30
// }
// function dispDet(name,age) {
//     console.log(`Hi! i am ${this.name} and i am ${this.age} years old.`);
// }
// dispDet.call(user2);

// 5 dec 2023
// closure
// function outer() {
//     let a = 10;
//     let b = 20;
//     function add() {
//         a+=b;
//         console.log(`The value of a is ${a}`);
//     }
//     return add;
// }
// let oc = outer();
// oc();
// oc();
// currying
// function area(l,b) {
//     return l*b;
// }
// function CurryArea(fn) {
//     return function(l){
//         return function(b){
//             return fn(l,b);
//         }
//     }
// }
// let Ca = CurryArea(area);
// // console.log(Ca(10)(10));
// // second method
// let a = Ca(10);
// let b = a(10);
// console.log(b);

// this keyword
// implicit binding
// let employee = {
//     name:"Santosh",
//     age:30,
//     disp: function() {
//         console.log(`Hi, I am ${this.name} and i am ${this.age}`);
//     }
// }
// employee.disp();
// exlicit binding
// let person1 = {
//     name:"Santosh",
//     age:30
// }
// let person2 = {
//     name:"Ankita",
//     age:29
// }
// function dispPerson(name,age) {
//     console.log(`Hi, I am ${this.name} and i am ${this.age} years old`);
// }
// dispPerson.call(person2);
// new binding
// function person(name,age) {
//     this.name = name;
//     this.age = age;
// }
// let p1 = new person("Santosh",30);
// console.log(`Hi! i am ${p1.name} and i am ${p1.age} years old`);
// prototype
/*
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