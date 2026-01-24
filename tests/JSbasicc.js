
// import { testUser4 } from './testUser1.js';

// import { count } from "console";
// import { isConciseBody } from "typescript";




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


// // // fri[3] = 's' // string are immutable so it will not change the value
// // // console.log(fri)

// // fri = 'deepsha' // reasigning the value it will change the value
// // console.log(fri)

// console.log("array in javascriptd");//collection of item can access with index number
// let arr1 = [1,2,3,4,5,false,'neeshu'];
// console.log(arr1);
// console.log(arr1.length);
// console.log(arr1[2]);
// arr1[2] = 10; // reasigning the value
// console.log(arr1);
// // arr1.push(6); // add the element at last index
// // console.log(arr1);
// // arr1.pop(); // remove the last element
// // console.log(arr1);
// // arr1.unshift(0); // add the element at first index
// // console.log(arr1);
// // arr1.shift(); // remove the first element
// // console.log(arr1);
// // console.log(arr1.indexOf(4)); // get the index of element
// // console.log(arr1.includes(5)); // check the element present or not return true and false value
// // for (let i=0;i<arr1.length;i++){
// //   console.log(arr1[i]);
// // }
// // // sum of array
// // let sum =0;
// // for (let j=0;j<arr1.length;j++){
// //   sum += arr1[j];
// // }
// // console.log("sum of array===>",sum);

// // // array methods : reduce, filter, map
// // console.log("array methods : reduce, filter, map");

// // let total = arr1.reduce((sum, val)=> sum+val,0);
// // console.log("total of array using reduce method===>",total);

// // let evenArr = arr1.filter((num)=> num%2==0);
// // console.log("even array using filter method===>",evenArr);

// // let mappedArr = evenArr.map((num)=> num*3);
// // console.log("mapped array using map method===>",mappedArr);

// // let totalMapped = mappedArr.reduce((sum,val)=> sum+val,0);
// // console.log("total of mapped array using reduce method===>",totalMapped);

// // // chaining all methods
// // let chainedResult = arr1.filter(num=>num%2==0).map(num=>num*3).reduce((sum,val)=>sum+val,0);
// // console.log("chained result of all methods===>",chainedResult);

// // // sorting array
// // let fruits = ['banana', 'mango', 'apple', 'grapes'];
// // console.log("original fruits array===>",fruits);
// // console.log("sorted fruits array===>",fruits.sort());
// // let numbers = [34, 2, 45, 67, 1, 89];
// // console.log(numbers.toString());
// // console.log(numbers.join("_"))
// // console.log(typeof numbers)
// // console.log("original numbers array===>",numbers);
// // console.log("sorted numbers array (lexicographical)===>",numbers.sort());
// // numbers.sort((a,b)=>a-b);
// // console.log("sorted numbers array (numerical)===>",numbers);
// // console.log("reversed fruits array===>",fruits.reverse());

// // //aaray are immutable in js but we can change the elements by index
// // //array can haold multiple value type

// // for(let i=0;i<fruits.length;i++){
// //   console.log(fruits[i]);

// // }


// var n = 5;
// console.log(n);
// var n = 20; // reassigning is allowed and redecralred allowed based on function scoped globally scope.
// console.log(n);

// let  r= 70;
// r = 100; // Value can be updated
// //let r = 15; //can not redeclare
// console.log(r)

// const b = 88;
// console.log(b);
// //b = 99; // can not reassign
// //const b = 55; // can not redeclare
// console.log("null === undefined",null === undefined)
// Result: false
// /**
//  * 
//  * 
//  * In JavaScript, both null and undefined represent "empty" values but are distinct types. null is a special object representing the intentional absence of a value, while undefined signifies that a variable has been declared but not assigned a value. Despite their similar purpose, they are not strictly equal (===) to each other.

// null === undefined evaluates to false because JavaScript does not perform type coercion with ===.
//  */
// console.log("5 > 3 > 2",5 > 3 > 2)
// Result: false
// /*

// At first glance, this expression may appear to be checking if 5 is greater than 3 and 3 is greater than 2, but JavaScript evaluates it left-to-right due to its operator precedence.

// First, 5 > 3 evaluates to true.
// Then, true > 2 is evaluated, which in JavaScript results in 1 > 2 (since true is coerced to 1), which evaluates to false.

// */




// /**console.log([] === []);
//  * Result: false
//  * In JavaScript, arrays are objects. Even if two arrays have the same content, they are still different objects in memory.

// When you compare two arrays with ===, you are comparing their references, not their contents.
// Since [] and [] are different instances in memory, the result is false.
//  * 
//  * 
//  * 
//  * 
//  * 
//  */
// console.log("10" < "9") 
// Result: true

// /**
//  * 
//  * 
//  * When JavaScript compares strings, it compares their Unicode values lexicographically (character by character).

// "10" is compared to "9". Since "1" has a lower Unicode value than "9", JavaScript determines that "10" is less than "9".
// This comparison might seem counterintuitive, but it's due to JavaScript's string comparison mechanism.
//  * 
//  * 
//  * 
//  * 
//  * 
//  */
// console.log("NaN === NaN",NaN === NaN)
// Result: false
// /**
//  * 
//  * 
//  * In JavaScript, NaN (Not-a-Number) is a special value that represents an invalid number or the result of an operation that cannot produce a valid number.

// One of the most unusual aspects of NaN is that it is not equal to itself. This behavior exists due to the design of the IEEE 754 standard, which JavaScript follows for floating-point arithmetic.
// As a result, NaN === NaN returns false.
//  */

// console.log("undefined > 0===>",undefined > 0)
// Result: false

// /**
//  * 
//  * 
//  * 
//  * When JavaScript attempts to compare undefined with 0, it converts undefined to NaN (Not-a-Number). Any comparison involving NaN returns false.

// undefined > 0 becomes NaN > 0, which evaluates to false.
//  */

// console.log("[1, 2] == [1, 2]==>","5" === 5)
// Result: false

// console.log("[1, 2] == [1, 2]",[1, 2] == [1, 2])
// Result: false

// /**
//  * 
//  * 
//  * Even though both arrays contain the same elements, JavaScript compares arrays by reference, not by value.

// Since each array is a separate object in memory, their references are different, and thus the comparison returns false.
// To check if two arrays are equal, you must compare their contents element by element.
//  */

// console.log("Infinity > 1000",Infinity > 1000)

// Result: true
// /**
//  * 
//  * In JavaScript, Infinity represents an unbounded, positive number. It's greater than any finite number, including 1000.

// Therefore, Infinity > 1000 evaluates to true.
//  */




// let g = 89;
// g += 11; // g = g + 11
// console.log(g); // 100
// g -= 20; // g = g - 20
// console.log(g); // 80
// g *= 2; // g = g * 2
// console.log(g);

// const age = 18;
// const status = age <= 18 ? "Adult" : "Minor";
// console.log(status);
// const a = true, i = false;
// console.log(a && i); // Logical AND
// console.log(a || i); // Logical OR
// //!==.
// //write code for logical not
// const name = "Neeshu";
// const isAdmin = name === "Admin" ? true : false;
// console.log(!a); // Logical NOT
// Result: false
// /**
//  * 
//  * 
//  * The !== operator checks for both value and type inequality. In this case, true is a boolean and 1 is a number. Since their types are different, the comparison returns true.
//  * 
//  * 
//  * 
//  * 
//  * 
//  */console.log("5" + 3)
// Result: "53"
// /**
//  * 
//  * 
//  * In JavaScript, the + operator is overloaded to perform both addition and string concatenation. When one of the operands is a string, JavaScript converts the other operand to a string and concatenates them.

// In this case, "5" is a string and 3 is a number. JavaScript converts 3 to "3" and concatenates it with "5", resulting in the string "53".
//  * 
//  * 
//  * 
//  * 
//  * 
//  */console.log("5" - 3)
// Result: 2
// /**
//  * 
//  * 
//  * In this case, the - operator is only defined for numbers. When one of the operands is a string, JavaScript attempts to convert it to a number.

// Here, "5" is converted to the number 5, and then 3 is subtracted from it, resulting in 2.
//  * 
//  * 
//  * 
//  * 
//  * 
//  */console.log(null + 1)
// Result: 1
// const obj = { length: 10 };
// console.log("length" in obj);
// console.log([] instanceof Array);
// console.log({} instanceof Object);
// /**
//  * 
//  * 
//  * The in operator checks if a specified property exists in an object. In this case, it checks if the property length exists in the obj object, which it does, so it returns true.

// The instanceof operator checks if an object is an instance of a specific class or constructor function. Here, [] is indeed an instance of Array, so it returns true. Similarly, {} is an instance of Object, so it also returns true.
//  * 
//  * 
//  * 
//  * 
//  * 
//  */console.log(typeof null)
// Result: "object"
// /**
//  * 
//  * 
//  * In JavaScript, the typeof operator returns "object" for null values. This is a well-known quirk of the language and is due to historical reasons dating back to the early implementation of JavaScript.

// Although null is not actually an object, the typeof operator treats it as such, which can sometimes lead to confusion.
//  * 
//  * 
//  * 
//  * 
//  * 
//  */console.log(typeof NaN)
// Result: "number"
// /**
//  * 
//  * 
//  * In JavaScript, NaN (Not-a-Number) is considered a special numeric value. The typeof operator returns "number" for NaN because it is part of the number type in JavaScript.

// This behavior can be counterintuitive, but it is consistent with the language's design.
//  * 
//  * 
//  * 
//  * 
//  * 
//  */console.log(typeof function(){})
// Result: "function"
// /**
//  * 
//  * 
//  * In JavaScript, functions are first-class objects, and the typeof operator returns "function" when applied to a function. This is a special case in the language to distinguish functions from other object types.

// So, when you check the type of a function using typeof, it correctly identifies it as a "function".
//  * 
//  * 
//  * 
//  * 
//  * 
//  */console.log(typeof [])
// Result: "object"
// /**
//  * 
//  * 
//  * In JavaScript, arrays are a type of object. When you use the typeof operator on an array, it returns "object" because arrays are implemented as objects in the language.

// To specifically check if a variable is an array, you can use Array.isArray() method.
//  * 
//  * 
//  * 
//  * 
//  * 
//  */console.log(typeof undefined)
// Result: "undefined"
// /**
//  * 
//  * 
//  * In JavaScript, the typeof operator returns "undefined" for variables that have not been assigned a value. This is the expected behavior, as undefined is a primitive type in JavaScript that represents the absence of a value.
// So, when you check the type of an undefined variable using typeof, it correctly identifies it as "undefined".
// */


// const objk = { name: "Aman", address: { city: "Delhi" } };
// console.log(objk.address?.city);
// console.log(objk.contact?.phone);



// console.log("switch case in javascriptd=========>");

// let num = 2;

// switch (num) {
//     case 0:
//         console.log("Number is zero.");
//         break;
//     case 1:
//         console.log("Nuber is one.");
//         break;
//     case 2:
//         console.log("Number is two.");
//         break;
//     default:
//         console.log("Number is greater than 2.");
// };

// let number = -67;

// let result = number >= 0 ? "Positive" : "Negative";

// console.log(`The number is ${result}.`);



// for (let i = 0; i <= 4; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// };


// let t = 1;

// while (t <= 5) {
//     console.log(t);
//     t++;
// }


// let y = 1;

// do {
//     console.log(y);
//     y++;
// } while (y <= 5);

// function addNumber (a,b){
//     return a+b;
//     //return console.log(a+b);
//    //return console.log("this is after return statement");
// }
// console.log(addNumber(10,20));

// let sumOfNumber = (x,y) => x+y;
// console.log(sumOfNumber(30,40));


// function greet(name) {   // 'name' is a parameter
//   console.log("Hello " + name);

// }

// greet("Alice");  // "Alice" is the argument

// /**
//  * 
//  * Parameter → name (placeholder inside the function).
// Argument → "Alice" (real value given at call time).
//  */




// function NewFunction(name = "Guest") {
//   console.log("Hello, " + name);
// }

// NewFunction();        // Hello, Guest (default used)
// NewFunction("Aman");  // Hello, Aman


// function add(a, b) {
//   return a + b; // returns the sum
// }

// let result1 = add(5, 10);
// console.log(result1); // 15

// console.log("1. Named Functions");

// /**
//  * 
//  * @returns A function that has its own name when declared. It’s easy to reuse and debug because the name shows up in error messages or stack traces.
//  */
// function greet2() {
//   return "Hello!";
// }
// console.log(greet2()); // Hello!


// console.log(". Anonymous Function");


/**
 * 
 * A function that does not have a name. It is usually assigned to a variable or used as a callback. Since it has no name, it cannot be called directly.
 * 
 * 
 */

// const greet5 = function() {
//   return "Hi there!";
// };
// console.log(greet5()); // Hi there!
//  console.log(" Function Expression==>");
//  /**
//   * 
//   * @param {
//   * When you assign a function (can be named or anonymous) to a variable. The function can then be used by calling that variable.} a 
//   * @param {*} b 
//   * @returns 
  
// const add34 = function(a, b) {
//   return a + b;
// };
// console.log(add34(2, 3)); // 5
// console.log(" Arrow Function (ES6)");

/**
 * A new way to write functions using the => syntax. They are shorter and do not have their own this binding, which makes them useful in some cases.
 */

// const square = n => n * n;
// console.log(square(4)); // 16

// console.log(" Callback Functions");

/**
 * A function that is passed as an argument to another function and is executed after some operation is completed.
 */

// function fetchData(callback) {
//   // Simulate a data fetch with a timeout
//   setTimeout(() => {
//     const data = "Sample Data";
//     callback(data); // Call the callback with the fetched data
//   }, 1000);
// }

// function displayData(data) {
//   console.log("Fetched Data:", data);
// }

// fetchData(displayData); // After 1 second, logs: Fetched Data: Sample Data



// function num12(n, callback) {
//     return callback(n);
// }

// const double = (n) => n * 2;

// console.log(num12(5, double));

// console.log("closoure function in javascriptd=========>");
// function outer() {
//     let outerVar = "I'm in the outer scope!";
//     function inner() {
//         console.log(outerVar); 
//         outerVar = "Updated"
//     }
//     return inner;  
// }
// const closure = outer(); 
// closure();
// closure();



// const conditional = function(name) {
//     return `Hello, ${name}!`;
// };
// console.log(conditional("Steven"));

// const conditional2 = name => {
//     return `hello ${name}`;
// }

// console.log("object in javascriptd=========>");


// let object = {
//     name: "Sourav",
//     age: 23,
//     job: "Developer"
// };
// console.log(object);
// console.log(object.name);
// console.log(object['age']);

// object.location = "India";
// console.log(object);

// delete object.job;
// console.log(object);

// console.log("name" in object); // true
// console.log("salary" in object); // false

// for (let key in object) {
//     console.log(`${key}: ${object[key]}`);
// }


// let obj1 = { model: "Tesla" };
// obj1.color = "Red";

// console.log(obj1);



// let obj9 = { name: "Sourav" };
// let obj10 = { age: 23};

// let obj3 = { ...obj9, ...obj10 };
// console.log(obj3);


// console.log("constructor function in javascriptd=========>");
// class Person {
//     constructor(name, age) {
//         this.n = name;
//         this.a = age;
//         this.sayHello = function() {
//             console.log(`My name is ${this.n} and I am ${this.a} years old.`);
//         };
//     }
// }
// const person1 = new Person("Sourav", 23);
// person1.sayHello();
// const person2 = new Person("Aman", 30);
// person2.sayHello();


// function GFG(a, b, c) {
//     this.A = a;
//     this.B = b;
//     this.C = c;
//     this.G = "GEEK";
// }


// let message = 'hello';
// console.log(message);
// message = 2;
// console.log(message);
// let age = 20;
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers);
// function add (a,b){

// const { useCallback } = require("react");

//     return a+b
// }
// add(10,20)
// console.log(add(10,20))

// let user2 ={
//   name:"Jane",
//   age:45,
//   isadmin:true
// }
// user2.location="USA"
// console.log(user2.name);
// console.log(user2.location);


// console.log(x);   // ❓ kya hoga?
// var x = 5;



// foo();   // Call before declaration

// function foo() {
//   console.log("Hello");
// }

// function foo1() {
//   console.log("Hello:-->");
// }

// foo1();

// let y;   // declare ho gaya, but value nahi di
// console.log(y);  // ❌ error (TDZ)
// y = 10;
// console.log(10 / "abc");   // NaN
// console.log(Number("hello")); // NaN
// console.log(0 / 0);        // NaN

// console.log(NaN === NaN);   // false ❗

// let salary = Number("5000abc"); 
// console.log(salary);  // NaN

// if (isNaN(salary)) {
//   console.log("Invalid salary");
// } else {
//   console.log("Salary is valid");
// }


// function outer() {
//   let count = 0;   // outer function variable

//   function inner() {
//     count++;       // inner function is using outer variable
//     console.log(count);
//   }

//   return inner;    // inner function ko bahar bhej diya
// }

// const myFunc = outer();

// myFunc(); // 1
// myFunc(); // 2
// myFunc(); // 3
// function test() {
//   console.log("Test function");
// let count =0;
// function nested() {
//   console.log("Nested function");}
//   count++;
//   return nested;
// }
// const demo = test();
// demo();//call outer function 
// demo(); 

// let str = 'Neeshu kumar kumar Neelam';
// let reversed = '';
// function reverseString(s) {
//   for(let i = str.length-1; i >= 0; i--) {
//   reversed  += str[i];
// }
// return reversed;
// }
// console.log(reverseString(str));


// setTimeout(() => console.log(1), 0); 
// console.log(2);

// async function fetchData() { const data = await apiCall(); 
//   return data; }

//   setTimeout(() => {
//   console.log("2 second baad chala");
// }, 2000);



// setTimeout(() => {
//   console.log("4 sec ke baad chlana");
// },4000);

// setInterval(() => {
//   console.log("Har 1 second me chala");
// }, 1000);


// async function riskyOperation() {
//     try {
//         const result = await someAsyncCall();
//         if (!result) throw new Error("Operation failed");
//         return result;
//     } catch (error) {
//         console.error("Error occurred:", error.message);
//         return null; // or re-throw
//     } finally {
//         console.log("Cleanup - always runs");
//     }
// }


/**
 * 
 * 
 * Start
 ↓
try
 ↓
await async call
 ↓
success? ──► return result
   ❌
throw error
 ↓
catch
 ↓
handle error
 ↓
finally (always)



async → function Promise return karta hai

await → Promise ke resolve hone ka wait

throw → custom error create karta hai

catch → error handle karta hai

finally → cleanup, always execute

4️⃣ if (!result) throw new Error("Operation failed");
❓ Ye line kyun?

Agar result:

null

undefined

false

empty

👉 To manually error throw kar diya
 */


///Rahul sheety Interview Question in Javascripts mak eit good


/***
 * 
 * 
 * 00:21 - Can a JavaScript object hold a function as a property? Explain with an example.

03:28 - What are anonymous functions in JavaScript? Define their syntax and implementation.

07:22 - What is the difference between var, const, and let? Explain with an example.

16:26 - Where are the push, pop, slice, shift, and unshift methods used when accessing array elements?

23:19 - Is JavaScript Asynchronous? Prove with an example.

27:53 - What are callback functions in JavaScript?

38:09 - What are promises in JavaScript? Explain the difference between callback functions and promises with an example.

49:15 - Create an inheritance relationship between a parent and child class. Invoke the parent constructor from the child class. Create main.js to call parent class methods from a child class object.

55:21 - From the above code, explain how the super and these keywords help achieve the solution.

01:00:05 - What is the difference between == and ===?

01:03:32 - What is the difference between null and undefined in JavaScript?

01:06:36 - A classic programming interview question that involves using array methods (filter, map, reduce), and JavaScript objects.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

const person = {
name : "Neeshu",
age : 78,
greet : function(){

  console.log("Helllo My name is " +this.name);
}
}
person.name
person.greet();

function sayhello(){

    return "hello I am the hellow world"
}
const ft = sayhello();
console.log(ft);
//anamosy function function without name so maek it good in selection make it like this
const greet =function(name){
return "Hellow my name " +name
}
console.log(greet)

