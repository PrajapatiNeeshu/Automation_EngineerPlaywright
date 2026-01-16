
// import { testUser4 } from './testUser1.js';

import { count } from "console";
import { isConciseBody } from "typescript";




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


//---------------------------------------------Constructor me Method kaise add kare?
// function Student(name, age) {
//   this.name = name;
//   this.age = age;

//   this.sayHello = function () {
//     console.log("Hello, my name is " + this.name);
//   };
// }

// const s1 = new Student("Rahul", 22);
// s1.sayHello();


// let arr1,arr2,arr3;
// arr1 =  [1,2,3,4];
// arr2=   [4,5,7,8];
// console.time("start");
// for(let i =0;i<arr1.length;i++){
//  for (let j=0;j<arr2.length;j++){
//     if(arr1[i]!=arr2[j]){
//        const arr3 = arr1.push(arr2[j]);
//  }
// console.log(arr3);
// console.timeEnd("End");
// }}


// let a = [];

// console.log(a);

// console.log(a.length());



// const str = 'neeshu kumar';


// const arr = [2,4,6,8,10,7];
// const result = arr.find(n => n.arr%2!==0)
// console.log("result===>",result);

// let a,b;
// function srt(){
// return a+b;
// }
//  console.log(srt(2,8));




// function setlogin(){
//    setTimeout(()=>{
//       console.log("this is setTimeout",2000)
//    })

//    }

// setlogin();


// function greet(name, callback) {
//   console.log("Hello", name);
//   callback();
// }

// function done() {
//   console.log("Greeting complete");
// }

// greet("Neeshu", done);

// let neeshu = [1,2,3]; 
// let rahul = neeshu; 
// rahul.push(4); 
// console.log("push method in javascript", neeshu);



// function Car(brand, color) {
//   this.brand = brand;
//   this.color = color;
// }


// const car1 = new Car("BMW", "Black");
// const car2 = new Car("Audi", "White");
// function reverseNumber(num){
//     let result = '';
//     for(let i=num.length-1;i>=0;i--){
//         result += num[i];
//     }
//    // console.log(result);
//     return result;
// }
// //console.log(reverseNumber('12345'));




// function groupanagrams(arr){
// const map = new Map();
// for(let st of arr){
//   const key = st.split('').sort().join('');
//   if(!map.has(key)){
//     map.set(key, []);
//   }
//   map.get(key).push(st);
// }
// return Array.from( map.values());
// }
// const str = ["eat", "tea", "tan", "ate", "nat", "bat"];
//console.log(groupanagrams(str));




//console.log("----------------------------------------------------------")
//console.log("Basci Javacsripts conect");

//console.log("Top java scripts interview Question ")

//can. a java

//console.log("hello world");


/*
        
console.log ()
commant on the point the on the javascripts


print("the print on the python methods
")



*/

// const arr  = [1,23,4454];
// let sum;
// for(const i = 0;i<arr.length;i++){
//   sum = sum+arr[i];
//   console.log(sum);
// }

// const arr1 = ['atc', 'tca', 'dog', 'god','cta'];
// const arr2 = [];
// for (let i of arr1)
//   {
    //console.log(i);
//  let str = i.split("").sort().join("");
//  //console.log("print the sorted arrt===."+str);
// arr2.push(str);
//   }
//   for(let t2 = 0;t2<arr2.length;t2++){
// if (arr2.indexOf(arr2[t2]) !== -1 && arr2.indexOf(arr2[t2]) !== t2){
//   console.log(arr1[arr2.indexOf(arr2[t2])])
// }

//   }
//console.log(arr2);


//var let const what will be difference between then
// console.log('different between var const and var===>');




// var a = 78;
// console.log(a);
// const tt= typeof(a);
// console.log(tt);
// let b = 342.7;
// console.log(typeof(b));

// var c = 'neeshu kumar';
// console.log(typeof(c));

// let requiered = true;
// console.log(typeof(requiered));

// let j= a+b;
// let c = a+b;  // it will showing the can not be redeclared that it will blocked scoped with that. value.


// console.log(j);
// console.log(typeof(j));


//typeof make it type of told that 
// we redeclared again with let key word it will be show that refrence error.

// we can not redecraled with let key word possible with var 

//console.log(!requiered);// ! it will do that negative value mean false value it will be print of that
//reassigning  is allowed with let but var redec and reassign will be applicable.


//const key board with that in the function
// ES6 engine

// const and var value is not getting on that.

//loops and condition in javascripts


// console.log("conditional and loops in javascriptd");


// const flag = true; // declared the contant variable in 
// if (!flag){
// console.log("conditional satisfied");
// }
// else{
//   console.log(flag);
// console.log("condition not satisfied");
// }

// console.log("this is while loop")
// let i =0;
// while(i>10) // if condition is true than it will be run infinite times 
//   {
//     i++;
// console.log(i)
//   }
//   // 25 link ahve to verify first 10 link then you needs to verify while loops needs to run on that so we can use while loop
// console.log("while loops of that condition")
// do {
// i++
// }while(i>10)
//   console.log(i)

//   console.log("this is for loops");
//   for (let k=0;k<=10;k++){
//     console.log(k)
//   }


//   let required = true;
//   while(required){
//     console.log(required)
//     required = false;
//   }

//   //2and 5 get the number of that number
//   //from 1 - 10 needs to comman multiple of 2 and 5 


// console.log("multiple of 2 and 5 from that");
//   for(let j = 1;j<=100;j++){
//     if(j%2 == 0 && j%5 ==0){
//       console.log(j)
//     }
//   };
// console.log(" multiple of 2 or 5 ")
// let n = 0;
//   for(let j = 1;j<=10;j++){
//     if(j%2 == 0 || j%5 ==0){
//       n++
//       console.log(j)
//       if(n==3){
//         break;
//         console.log("break")
//       }
//     }
//   };


//   console.log("Array of the object on the demand to be print on that.")


// let mark = Array(6);
// var mark1 = new Array(20,34,35,67,78,90) // redeclartion not not be do on that match on that function of the methods

// let submark;
// var marks = [20,56,679,89,10,78];
// submark = marks.slice(2,4);
// console.log("after slice the array then it will print the value==>",submark)
// console.log(marks[4]);
// marks[3] = 90; // added the elements on that then we can use it make it as well

// console.log(marks)
// console.log(marks.length)


// marks.push(109) // added new elemet with the push method on that part

// console.log(marks)
// marks.pop(); // remove the last value
// console.log(marks)
// marks.unshift(56) // added the first index value in the array so make it good 
// console.log(marks)


// console.log("value of indexing ==>",marks.indexOf(78));   //fecteh the index the value in array  if added what is not part of array so it will print -1;
// console.log("value needs to check in array retrin the truw and false value ==>",marks.includes(89))

// for(let i =0;i<marks.length;i++){
//   console.log(marks[i])
// }

// // sum of the array
// let sum=0
// for(let j = 0;j<marks.length;j++){
// sum = sum+marks[i];
// }
// console.log("sum of the array==>",sum);


// //reduce , filter , map 

// console.log("reduce , filter , map number of that cindition ");
// let total = marks.reduce((sum,mark)=>sum+mark,0);
// console.log(total);


// var evenScore= []
// var score = [12,13,14,16];
// for(let b=0;b<score.length;b++){
//   if(score[b]%2==0){
//     evenScore.push(score[b]);
//   }
// }
//  console.log(evenScore);
//  console.log("filter methods ")
//   let newFilter= score.filter(score=>score%2==0)
//   console.log(newFilter);
//   //map 
//   console.log("map methods on that condition ");
//   //mapping one value to another value so it will make it good 
//   // mapping the value after filter and multiple by 3 as well
//  let mappedarray =newFilter.map(score=>score*3)// multiple by 3 only so it will make it good 
// console.log(mappedarray)
// console.log("sum of them as well do it ")
// let totalvalue2 =mappedarray.reduce((sum,val)=>sum+val,0)
// console.log(totalvalue2)
// let sumvalue = score.filter(score=>score%2==0).map(score=>score*3).reduce((sum,val)=>sum+val,0);
// console.log("this is one combination of array in this methods",sumvalue)
// //sorting the array
// let fruits = ['banana', 'mango','pomegrante','apple'];
// console.log("orignal array===>",fruits);
// console.log("after sorting the methids",fruits.sort());
// let num = [23,45,67,89,34,87]
// console.log(num.sort());
// num.sort(
// function(a,b){
//   return a-b
// })
// console.log(num.sort((a,b)=>a-b));
// console.log(fruits.reverse());

   
// //block of code can be execute with he help of the function
// console.log("function in javascriptd")


// function addNumber(a,b)
// {
  
//     return a+b;
// }
// console.log(addNumber(23, 89));
// let sum2 = addNumber(10,20);
// console.log("sum of two number===>",sum2);
// //do.not have name thiscall --> anonymous function

// console.log('sum of two number with annonymous function===>')

// let sumofIneger = function(c,d){
//   return c+d;
// };
// console.log("sum of two number with annonymous function===>",sumofIneger(45,55));

// //arrow function ES6
// console.log("arrow function in javascriptd")
// let sumofInteger2 = (x,y) => x+y;
// // console.log("sum of two number with arrow function===>",sumofInteger2(100,200));

// // //arrow function with no argument
// // let greet = () => console.log("hello world");
// // greet();

// // //arrow function with single argument
// // let square = n => n*n;
// // console.log("square of the number===>",square(5));

// // //function inside function
// // function outer(){
// //   console.log("this is outer function");
// //   function inner(){
// //     console.log("this is inner function");
// //   }
// // //   inner();
// // // }
// // // outer();
// // // console.log("----------------------------------------------------------",outer());

// // var greet1 = 'evening'
// // function addNumber3(a,b){

// //   return a+b;
// //   greet2 = 'morning'
// // }
// // // console.log(greet());
// // console.log(addNumber3(10,20));
// // console.log(greet1);
// // // console.log(greet2);

// // let  sumOfNumber = (p,q) => p+q;
// // console.log('Sum of numbers:', sumOfNumber(30,40));

// // console.log("var const let keywords diffrenece ======>");
// // // var global scope if declared in the function it will be function scoped
// // // let and const block scoped if declared in the function it will be block scoped

// // const  greet = 'evening';
// // //greet = 'night';
// // if (1==1){
// //   let greet = 'afternoon';
// // }

// // function add2(t1,t2){

// // var greet = 'morning';
// // return t1+t2 
// // }
// // let sum = add2(2,4);
// // console.log(sum)
// // console.log(greet);

// console.log("this is string on the basis of langauge of the template===>");

//  let day = 'tuesday';
// // day.length
// // console.log(day.length);
// // let sub = day.slice(1,6)
// // console.log(sub)

// // let str = day[3];
// // console.log(str);

// // let sp = day.split("s");
// // console.log(sp);

// // console.log(sp[1].trim().length);

// // let date = '23';
// // let nextDate = '27';
// // let diff = parseInt(nextDate-date)
// // console.log(diff);


// // let backTostr= diff.toString()
// // console.log(backTostr);

// //concatination two string
//  let NewQuote = day + " is FunDay"
// console.log(NewQuote);
// let val = NewQuote.indexOf("Day",5);
// console.log(val);
// let Count  = 0;
// let val1 = NewQuote.indexOf("Day",);
// while(val1!== -1){
// Count++
// val1 = NewQuote.indexOf("Day",val1+1);
// }
// console.log(Count);


// console.log("object in javascriptd");

// //object literal
// let person = {
//   firstName : 'Neeshu',
//   lastName: 'kumar',
//   age :78,
//   addres:'india',
//   fullName: function(){
//     console.log(this.firstName+this.lastName)
//   }
// }
//   console.log(person.fullName());// needs to provide the function(); as well
//   console.log(person.age);
//   console.log(person['addres']);
// person.name = 'rahul tech';
// console.log(person.name)
// person.gender = 'male';
// console.log(person.gender);
// console.log(person)
// delete person.gender

// console.log(person);

// console.log('gender' in person)// provide the ture and false value which check in the object make it good

// for (let key in person)
//   {
//     console.log(person[key]);// whith the help with this it will be print the all value from the key
//   }



//   console.log("------------------------------------------------- classes in javascriptd");


//   class employee{
  
// age = 78;
// get location(){
//   return 'india';
// }
// //constructor is mehods which execute by default when you create object of the class
// constructor(firstName, lastName){
//   this.firstName = firstName
//   this.lastName = lastName
// }
// fullName (){
//   console.log (this.firstName +this.lastName)
// }
//   }

// let person1 = new employee('neeshu', 'kumar');
// console.log(person1)
// person.fullName();
// console.log("object from class---->",person1.age);
// console.log("object from class---->",person1.location);


// console.log("Strimg methods in javacsripts for that conditional ====>")

// let name = "Neeshu"
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase());
// console.log(name.slice(2,3));
// console.log(name.replace('N','R'));
// console.log(name.concat(' Kumar'));
// console.log(name.charAt(3));
// console.log(name.indexOf('s'));
// console.log(name.endsWith('u'));
// console.log(name.includes('sh'));
// console.log(name.split('e'));
// console.log(name.firstName);
// console.log(name[2]);
// console.log(name[2]);



// console.log("string practice question on the basis of that=====>");

// //chapter 4 practice question
// let str1 = "har\""
// console.log(str1.length); // it will count the backslash as well so it will be 4 char
// let str2 = "har\\\""
// console.log(str2.length);// it will count the backslash as well so it will be 5 char
// let str3 = "har\n"
// console.log(str3.length);// it will count the new line as well so it will be 4 char
// console.log("har\".length"); // it will count the backslash as well so it will be 4 char
// console.log("har\\\".length");// it will count the backslash as well so it will be 5 char
// console.log("har\n".length);// it will count the new line as well so it will be 4 char
// console.log("har\t".length);// it will count the tab as well so it will be 4 char
// console.log("har\'".length);// it will count the single quote as well so it will be 4 char
// console.log("har\r".length);// it will count the carrige return as well so it will be 4 char

// const sentence = 'the quick brown fox jumos over the lazy dog';
// const word = 'fox';
// console.log(`the word "${word}" ${sentence.includes(word)?'is':'is not'} in the sentence`);

// console.log(str1.startsWith("h"))
// console.log(str1.endsWith("r"))

// const str4 = 'neeshu kumar';
// console.log (str4.toLowerCase())
// let str5 = 'please give 1000';
// let amount =Number.parseInt(str5.slice("please give".length));
// console.log(amount)


// let fri = 'deepika';


// // fri[3] = 's' // string are immutable so it will not change the value
// // console.log(fri)

// fri = 'deepsha' // reasigning the value it will change the value
// console.log(fri)

console.log("array in javascriptd");//collection of item can access with index number
let arr1 = [1,2,3,4,5,false,'neeshu'];
console.log(arr1);
console.log(arr1.length);
console.log(arr1[2]);
arr1[2] = 10; // reasigning the value
console.log(arr1);
arr1.push(6); // add the element at last index
console.log(arr1);
arr1.pop(); // remove the last element
console.log(arr1);
arr1.unshift(0); // add the element at first index
console.log(arr1);
arr1.shift(); // remove the first element
console.log(arr1);
console.log(arr1.indexOf(4)); // get the index of element
console.log(arr1.includes(5)); // check the element present or not return true and false value
for (let i=0;i<arr1.length;i++){
  console.log(arr1[i]);
}
// sum of array
let sum =0;
for (let j=0;j<arr1.length;j++){
  sum += arr1[j];
}
console.log("sum of array===>",sum);

// array methods : reduce, filter, map
console.log("array methods : reduce, filter, map");

let total = arr1.reduce((sum, val)=> sum+val,0);
console.log("total of array using reduce method===>",total);

let evenArr = arr1.filter((num)=> num%2==0);
console.log("even array using filter method===>",evenArr);

let mappedArr = evenArr.map((num)=> num*3);
console.log("mapped array using map method===>",mappedArr);

let totalMapped = mappedArr.reduce((sum,val)=> sum+val,0);
console.log("total of mapped array using reduce method===>",totalMapped);

// chaining all methods
let chainedResult = arr1.filter(num=>num%2==0).map(num=>num*3).reduce((sum,val)=>sum+val,0);
console.log("chained result of all methods===>",chainedResult);

// sorting array
let fruits = ['banana', 'mango', 'apple', 'grapes'];
console.log("original fruits array===>",fruits);
console.log("sorted fruits array===>",fruits.sort());
let numbers = [34, 2, 45, 67, 1, 89];
console.log(numbers.toString());
console.log(numbers.join("_"))
console.log(typeof numbers)
console.log("original numbers array===>",numbers);
console.log("sorted numbers array (lexicographical)===>",numbers.sort());
numbers.sort((a,b)=>a-b);
console.log("sorted numbers array (numerical)===>",numbers);
console.log("reversed fruits array===>",fruits.reverse());

//aaray are immutable in js but we can change the elements by index
//array can haold multiple value type

for(let i=0;i<fruits.length;i++){
  console.log(fruits[i]);
}
