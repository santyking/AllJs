// Timeouts
/*
function greet(name) {
    console.log(`Hello ${name}`);
}

// greet("Santosh");
setTimeout(greet,2000,"Santosh");
*/
// clear time out
/*
function greet(name) {
   console.log(`Hello ${name}`); 
}

const timoutId = setTimeout(greet,2000,"Santosh");
clearTimeout(timoutId);
*/
// set interval
/*
function greet(name) {
    console.log(`Hello ${name}`);
}
setInterval(greet,2000,"Santosh");
*/
// clear setInterval
/*
function greet(name) {
    console.log(`Hello ${name}`);
}
const intervalId  = setInterval(greet,2000,"Santosh");
clearInterval(intervalId);
*/
// synchronous callback
/* 
function greet(name) {
    console.log(`Hello ${name}`);
}
function greetPerson(greetfn) {
    const name = "Santosh";
    greetfn(name);
}
greetPerson(greet);
*/ 
// Asynchronous Callback
/*
function greet(name) {
    console.log(`Hello ${name}`);
}
 // here higher order function
setTimeout(greet,2000,"Santosh");
*/