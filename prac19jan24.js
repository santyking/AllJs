// function outer() {
//     let a = 10;
//     function inner() {
//         let b = 15;
//         console.log(a,b);
//     }
//     inner();
// }
// outer();
// function outer() {
//     let a = 10;
//     function inner(){
//         a++;
//         console.log(a);
//     }
//     inner();
// }
// outer();
// function outer() {
//     let a = 10;
//     function inner() {
//         a++;
//         console.log(a);
//     }
//     return inner;
// }
// let  a1 = outer();
// a1();
// a1();
// a1();
// a1();
// a1();
// currying function
// function sum(a,b,c) {
//     console.log(a+b+c);
// }

// function currAdd(sm) {
//     return function(a) {
//         return function(b){
//             return function(c){
//                 return sm(a,b,c);
//             }
//         }
//     }
// }
// let cmain = currAdd(sum);
// // method 1
// // c1(5)(5)(5);
// // method 2
// let c1 = cmain(2);
// let c2 = c1(2);
// let c3 = c2(2);
// this 
// implicit binding
// let person = {
//     name:"Santosh",
//     age : 30,
//     disp: function () {
//         console.log(`My name is ${this.name} and i am ${this.age} yo`)
//     }
// }
// person.disp();
// explicit 
// const person = {
//     name:"Santosh",
//     age:30
// }
// function disp() {
//     console.log(`Hi! i am ${this.name} and i am ${this.age} yo`);
// }
// disp.call(person);
// new binding
// function dispDet(name,age) {
//     this.name = name;
//     this.age = age;
// }
// let d1 = new dispDet("Santosh",30);
// console.log(d1.name,d1.a);
/* 
const person1  = {
    name:"Santosh",
    age : 30,
    dispDet : function() {
        console.log(`Hi i am ${this.name}. I am ${this.age} yo!`);
    }
}
const person2 = {
    name:"Ankita",
    age:29,
    dispDet: function () {
        console.log(`Hi i am ${this.name}. I am ${this.age} yo!`);
    }
}
person1.dispDet();
person2.dispDet();
*/
// explicit binding
/*
const person1 = {
    name:"Santosh",
    age:30
}
const person2 = {
    name:"Ankita",
    age:29
}
function sayMyName(name,age) {
    console.log(`Hi, I am ${this.name} and i am ${this.age} yo!`);
}
sayMyName.call(person1);
sayMyName.call(person2);*/
// new binding
/*
function sayMyName(name,age) {
    this.name = name;
    this.age = age;
}
const p1 = new sayMyName("Santosh",30);
const p2 = new sayMyName("Ankita",29);
console.log(`Hi, i am ${p1.name} and i am ${p1.age} yo!`);
console.log(`Hi, i am ${p2.name} and i am ${p2.age} yo!`);
*/
// implicit practice
/*
const person1 = {
    name: "Santosh",
    age:30,
    sayMyName: function() {
        console.log(`Hi, i am ${this.name}, I am ${this.age} yo!`);
    }
}
const person2 = {
    name : "Ankita",
    age : 29,
    sayMyName : function () {
        console.log(`Hi, I am ${this.name} and i am ${this.age} yo!`);
    }
}
person1.sayMyName();
person2.sayMyName();
*/
// explicit binding practice
/*
const person1  = {
    name:"Santosh",
    age:30
}
const person2 = {
    name:"Ankita",
    age:29
}
function sayMyName(name,age) {
    console.log(`Hi, I am ${this.name} and i am ${this.age} yo!`);
}
sayMyName.call(person1);
sayMyName.call(person2);*/
// new binding
/*
function displayDetails(name,age) {
    this.name = name;
    this.age = age;
}
const p1 = new displayDetails("Santosh",30);
const p2 = new displayDetails("Ankita",29);

console.log(`Hi, i am ${p1.name} and i am ${p1.age} yo!`);
console.log(`Hi, i am ${p2.name} and i am ${p2.age} yo!`);*/
// prototype
// function sayMyName(name,age) {
//     this.name = name;
//     this.age = age;
// }
// const p1 = new sayMyName("Santosh",30);
// const p2 = new sayMyName("Ankita",29);
// // console.log(`Hi!,i am ${p1.name} and i am ${p1.age} yo!`);
// p1.displayName = function() {
//     return this.name+' and i am '+this.age+' yo!';
// }
// console.log(p1.displayName());

// function displayDetails(name,age) {
//     this.username = name;
//     this.userage = age;
// }
// const p1 = new displayDetails("Santosh",30);
// const p2 = new displayDetails("Ankita",29);
// p1.introduce = function () {
//     return 'Hi, i am '+this.username+'. I am '+this.userage+'yo!'
// }
// console.log(p1.introduce());

function user(first,last) {
    this.fname = first;
    this.lname = last;
}
const u1 = new user("Santosh","Mhatre");
const u2 = new user("Ankita","Mhatre");

user.prototype.displayName = function () {
    return this.fname+' '+this.lname;
}
console.log(u1.displayName());