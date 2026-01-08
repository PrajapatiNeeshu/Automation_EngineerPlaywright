
// import { testUser4 } from './testUser1.js';




// function getRandomEmail(name, age, address, className, subject) {

// this.name = name;
// this.age = age;
// this.address = address;
// this.className = className;
// this.subject = subject;

// };
// const student1 = new getRandomEmail("Neeraj",24,"India","MCA","Maths");
// console.log(student1);
// console.log("--------------",typeof student1);
// const   student2 = new getRandomEmail("Kumar",25,"USA","MBA","Accounting");
// console.log("--------------",typeof student2);
// console.log(student2);
// console.log("--------------",student2.name);



// class Student4{
//     constructor(name, age, address, className, subject) {
//         this.name = name;
//         this.age = age;
//         this.address = address;
//         this.className = className;
//         this.subject = subject;
// }
// }
// const student3 = new Student4("Ajay",26,"UK","BBA","Economics");
// console.log("--------------",typeof student3);
// console.log(student3);
// console.log("--------------",student3.name);

// const student4 = new Student4("Vijay",27,"Canada","BCom","Business Studies");
// console.log("--------------",typeof student4);
// console.log(student4);
// console.log("--------------",student4.name);


// //---------------------------------------------Constructor me Method kaise add kare?
// function Student(name, age) {
//   this.name = name;
//   this.age = age;

//   this.sayHello = function () {
//     console.log("Hello, my name is " + this.name);
//   };
// }

// const s1 = new Student("Rahul", 22);
// s1.sayHello();


let arr1,arr2,arr3;
arr1 =  [1,2,3,4];
arr2=   [4,5,7,8];
console.time("start");
for(let i =0;i<arr1.length;i++){
 for (let j=0;j<arr2.length;j++){
    if(arr1[i]===arr2[j]){
       const arr3 = arr1.push(arr2[j]);
 }
console.log(arr3);
console.timeEnd("End");
}}















        