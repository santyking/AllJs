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