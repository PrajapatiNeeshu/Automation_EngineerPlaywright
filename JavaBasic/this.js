/*


Bilkul bhai 👍
this JavaScript ka sabse confusing concept hai — but ek simple rule samajh lo:

✅ Golden Rule

👉 "this always depends on HOW function is called, NOT where it is written"

Global scope me default owner = window
*/

var name = "Neeshu";
console.log(this.name);


const obj = {
    name: "Rahul",
    greet() {
        console.log(this.name);
    }
};
obj.greet();
//object.method() call hua
//👉 method ko jis object ne call kiya → that object = this

const obj1 = {
    name: "Neeshu",
    greet: () => {
        console.log(this.name);
    }
};
obj1.greet();//undefined 
/*
Kyun?
👉 Arrow function apna this banata hi nahi
It borrows from parent scope (lexical scope)
class LoginPage {
    username = "#user";

    fillUser() {
        console.log(this.username);
    }
}
this → class instance

this refers to the object that calls the function.
In arrow functions, this is lexically inherited from parent scope.
*/

const obj2 = {
   value: 10,
   normal() { console.log(this.value); },
   arrow: () => console.log(this.value)
};
obj2.normal();
obj2.arrow();
