// function person(fname,lname,uage) {
//     this.firstName = fname;
//     this.lastName = lname;
//     this.age = uage;
// }
// person.prototype.introduction = function () {
//     console.log(`Hi, i am ${this.firstName} ${this.lastName}. I am ${this.age} yo!`);
// }
// const p1 = new person("Santosh","Mhatre",30);

// p1.introduction();

// 5 feb 2024

// class table{
//     constructor(number){
//         this.number = number;
//     }
//     sayTable(){
//         for (let index = 1; index <= 12; index++) {
//             console.log(index * this.number);
//         }
//     }
// }
// const t1 = new table(5);
// t1.sayTable();

// class Person {
//     constructor(fname,lname){
//         this.firstName = fname;
//         this.lastName = lname;
//     }
//     sayMyName(){
//         return this.firstName+' '+this.lastName;
//     }
// }
// class superHero extends Person{
//     constructor(fname,lname){
//         super(fname,lname);
//         this.isSuperHero = true;
//     }
//     fightCrime(){
//         return 'Fighting crime';
//     }
// }

// const s1 = new superHero("Bruce","Wayne");
// console.log(s1.firstName);
// console.log(s1.lastName);
// console.log(s1.sayMyName());
// console.log(s1.isSuperHero);
// console.log(s1.fightCrime());

// class Husband {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     introduce(){
//         return 'Hi, I am '+this.name+'. I am '+this.age+'yo!';
//     }
// }
// class Wife extends Husband{
//     constructor(name,age){
//         super(name,age);
//         this.isCook = true;
//     }
// }
// const me = new Husband("Santosh Mhatre",30);
// const her = new Wife("Ankita Mhatre",29);
// console.log(her.introduce());

const obj = {
    [Symbol.iterator] : function () {
        let step = 0;
        const iterator = {
            next: function() {
                step++;
                if (step===1) {
                    return{value:'Hello',done:false}
                }
                else if (step===2) {
                    return{value:'World',done:false}
                }
                return{value: undefined,done:true}
            }
        };
        return iterator;
    }
}

for(const word of obj){
    console.log(word);
}