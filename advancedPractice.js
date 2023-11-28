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

function jorathakamari(naav) {
    this.naav = naav;
}
let person1 = new jorathakamari("Santosh");
let person2 = new jorathakamari("Ankita");
console.log(person1.naav);
console.log(person2.naav);