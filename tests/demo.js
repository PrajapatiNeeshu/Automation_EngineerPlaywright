// let message = 'hello';
// console.log(message);
// message = 2;
// console.log(message);
// let age = 20;
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers);
// function add (a,b){

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


function outer() {
  let count = 0;   // outer function variable

  function inner() {
    count++;       // inner function is using outer variable
    console.log(count);
  }

  return inner;    // inner function ko bahar bhej diya
}

const myFunc = outer();

myFunc(); // 1
myFunc(); // 2
myFunc(); // 3
function test() {
  console.log("Test function");
let count =0;
function nested() {
  console.log("Nested function");}
  count++;
  return nested;
}
const demo = test();
demo();//call outer function 
demo(); 

