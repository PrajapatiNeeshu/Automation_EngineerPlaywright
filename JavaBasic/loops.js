//while loops How can work with while loops in JavaScript
/*
1 check condition
2 true → run code
3 again check
4 false → stop
while(condition){
    // code
}
✔ iterations unknown ho
✔ condition based loop
✔ input based
✔ digit extraction



for(initialization; condition; update){
    // code
}

1 initialization (once)
2 check condition
3 run code
4 update
5 repeat

for(let i=1; i<=5; i++){
    console.log(i);
}



Use FOR when:
array traversal
pattern printing
counting
known size loops

Use WHILE when:
API polling
retry logic
dynamic input
digit problems
wait until condition
*/

let n = 5;
while(n>0){
    console.log(n);
    n--;
}

console.log("reverse a number===>")
let n1 = 123;
let num = 0;
while(n1>0){
   let rem = n1 % 10; // get last digit
   n1 = Math.floor(n1/10); // remove last digit
   num = num + rem;// add last digit to result
}
console.log(num);