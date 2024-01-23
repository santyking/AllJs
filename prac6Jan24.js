// closure practice
/*
function Calculator() {
    let a = 10;
    let b = 20;
    function addition() {
        let sum = a+b;
        a++;b++;
        console.log(`The Sum of ${a} and ${b} is ${sum}`);
    }
    return addition;
}
let sumNo = Calculator();
sumNo();
sumNo();
sumNo();
sumNo();
*/
// School table practice
/*
function table() {
    let primaryNo = 25;
    let multiple = 1;
    function tableWork() {
        let ans = primaryNo * multiple;
        console.log(`${primaryNo} X ${multiple} = ${ans}`);
        multiple++;
    }
    return tableWork;
}
let getTable = table();
for (let index = 1; index <= 12 ; index++) {
    getTable();
}
*/
// Currying 
function tableGen(num1,multiple) {
    return num1*multiple;
}
// op = tableGen(5,2);
function curryTable(fn) {
    return function (num1) {
        return function (num2) {
            return fn(num1,num2);
        }
    }    
}
let getTable = curryTable(tableGen);
// way 1
//console.log(getTable(5)(2));
// way 2 
let op1 = getTable(5);
let op2 = op1(2);
console.log(op2);