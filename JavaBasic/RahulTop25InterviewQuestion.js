const person = {
name : 'Rahul',
age : 25,
city : 'Delhi',
job : 'Software Engineer',
isMarried : false,
greet : function() {
console.log('Hello, my name is ' + this.name + '. I am a ' + this.job + ' from ' + this.city + '.');
}
};
    
console.log(person.name); // Output: Rahul
console.log(person.age); // Output: 25
console.log(person.city); // Output: Delhi
console.log(person.job); // Output: Software Engineer
console.log(person.isMarried); // Output: false

person.greet(); // Output: Hello, my name is Rahul. I am a Software Engineer from Delhi.


/*

#,Timestamp,Question,Difficulty,Importance for Automation QA
1,00:21,Can a JavaScript object hold a function as a property? Explain with an example.,Basic,★★★★
2,03:28,What are anonymous functions in JavaScript? Define their syntax and implementation.,Basic,★★★
3,07:22,"What is the difference between var, const, and let? Explain with an example.",Basic,★★★★★
4,16:26,"Where are the push, pop, slice, shift, and unshift methods used when accessing array elements?",Basic–Medium,★★★★
5,23:19,Is JavaScript Asynchronous? Prove with an example.,Medium,★★★★★
6,27:53,What are callback functions in JavaScript?,Medium,★★★★
7,38:09,What are promises in JavaScript? Explain the difference between callback functions and promises with an example.,Medium–Hard,★★★★★
8,49:15,Create an inheritance relationship between a parent and child class. Invoke the parent constructor from the child class.,Medium–Hard,★★★★
9,55:21,"From the above code, explain how the super and this keywords help achieve the solution.",Medium,★★★★
10,01:00:05,What is the difference between == and ===?,Basic,★★★★★
11,01:03:32,What is the difference between null and undefined in JavaScript?,Basic,★★★★
12,01:06:36,"A classic programming interview question that involves using array methods (filter, map, reduce), and JavaScript objects",Medium–Hard,★★★★★

*/


// 1. Can a JavaScript object hold a function as a property?
// Yes — functions are first-class citizens in JavaScript.
// A function can be stored as a value (property) of an object — this is called a method when the property is a function.
 const page = {
  url: "https://example.com/login",
  
  login: function(username, password) {
    console.log(`Logging in as ${username}`);
    // simulate interaction
    return true;
  },
  
  // ES6 method shorthand (very common in page objects)
  logout() {
    console.log("User logged out");
  }
};

page.login("testuser", "pass123");   // method call
page.logout();
// Relevance in automation
// Almost every Page Object contains methods (click, fill, assert, etc.).

// 2. What are anonymous functions in JavaScript?
// An anonymous function is a function without a name.
// They are commonly used as:

// callbacks
// IIFE (Immediately Invoked Function Expressions)
// arguments to higher-order functions (forEach, map, etc.)

// 1. As callback
setTimeout(function() {
  console.log("Executed after 2s");
}, 2000);

// 2. Arrow function style (most common today)
setTimeout(() => console.log("Modern style"), 1000);

// 3. IIFE
(function() {
  console.log("Runs immediately - private scope");
})();
// 3. Difference between var, const, and let
// Feature,var,let,const
// Scope,Function-scoped,Block-scoped,Block-scoped
// Hoisting,Yes + initialized to undefined,Yes – but Temporal Dead Zone,Yes – but Temporal Dead Zone
// Re-declaration,Allowed,Not allowed in same scope,Not allowed
// Re-assignment,Allowed,Allowed,Not allowed
// Initialization,Optional,Optional,Mandatory


if (true) {
  var a = 1;       // leaks outside block
  let b = 2;       // stays inside block
  const c = 3;     // stays inside block
  // c = 4;        // TypeError
}

console.log(a);     // 1
// console.log(b);  // ReferenceError
//Array methods: push, pop, slice, shift, unshift
// All except slice mutate the original array.
// Method,Action,Returns,Mutates?,Example
// push(),Add to end,new length,Yes,arr.push(4)
// pop(),Remove from end,removed element,Yes,arr.pop()
// shift(),Remove from beginning,removed element,Yes,arr.shift()
// unshift(),Add to beginning,new length,Yes,arr.unshift(0)
// slice(),"Extract portion (start, end)",new array,No,"arr.slice(1,3)"












































