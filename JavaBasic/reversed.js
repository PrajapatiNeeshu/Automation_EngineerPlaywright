
//Reverse string / number
function reversedstr(str){
let rev = "";
for (let i =str.length-1;i>=0;i--){
    rev += str[i];
}
return rev;
}
const str = 'neeshu';
console.log(reversedstr(str));
function reversednum(num){
    let rev = 0;
    while(num>0){
        let rem = num%10;
        rev = rev*10 + rem;
        num = Math.floor(num/10);
        
    }
    return rev;
}
const num = 12345867758708089809080;
console.log(reversednum(num));

let num1 = 1234;
let rev = 0;

while (num1 > 0) {
    let rem = num1 % 10;
    rev = rev * 10 + rem;
    num1 = Math.floor(num1 / 10);
}

console.log(rev);



console.log("Start");

setTimeout(() => {
  console.log("setTimeout");
    }, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
}).then(() => {
  console.log("Promise 2");
});

console.log("End");



