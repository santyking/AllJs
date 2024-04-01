// callback
// let adder = (num1,num2) => {
//     let sum = num1+num2;
//     return sum;
// };
// let display = (some) =>{
//     console.log(some);
// }
// let  a = adder(5,5);
// display(a);
// let adder = (num1,num2) => {
//     let sum  = num1+num2;
//     display(sum);
// }
// let display = (something) => {
//     console.log(something);
// }
// let a1 = adder(5,2);
// this is actual callback0
/*
let calculator = (num1,num2,DisplayResult) => {
    let sum = num1+num2;
    DisplayResult(sum);
}
let DisplayResult = (something) => {
    console.log(something);
}
calculator(5,5,DisplayResult);
*/
// timeout
/*
setTimeout(() => {
    console.log("Hey there!");
}, 1000);
*/
/*
setInterval(() => {
    console.log("Hello!");
}, 2000);
*/
// promises
/*
let DisplayResult = (something) => {
    console.log(something);
}
let myPromise = new Promise((myResolve, myReject) => {
    let sum;

})
*/
//promises
let calculator = (num1,num2) => {
    return new Promise((resolve, reject) => {
        let sum = num1+num2;
        if(isNaN(sum)){
            reject(new Error("Invalid Input"));
        }
        else{
            resolve(sum);
        }
    });
};
let DisplayResult = (result) => {
    console.log("Sum is ",result);
}
let errorOccured = (error) => {
    console.log("Error Occured",error.message);
}
calculator(5,10)
.then(DisplayResult)
.catch(errorOccured);
