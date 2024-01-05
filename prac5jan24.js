// lexical scoping
/*
function outer() {
    let a = 10;
    function inner() {
        let b= 20;
        console.log(a,b);
    }
    inner();
}
outer();
*/
// Without Closure
/*
function incrementer() {
    let num = 0;
    function increment() {
        num++;
        console.log(num);
    }
    increment();
}
incrementer();
incrementer();
incrementer();
*/
// Closure
/*
function incrementer() {
    let num = 0;
    function increment() {
        num++;
        console.log(num);
    }
    return increment;
}
let res = incrementer();
res();
res();
res();
res();
*/
// currying
// to calculate area
area = (l,b,h) =>{
    return l*b*h;
}
// Currying Function
function CalArea(func) {
    return function (l) {
        return function (b) {
            return function (h) {
                return func(l,b,h);
            }
            
        }
    }
}
let areaCall = CalArea(area);
let a1 = areaCall(10);
let a2 = a1(10);
let a3 = a2(10);
console.log(a3);