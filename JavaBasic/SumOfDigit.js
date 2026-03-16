let sum = 0;
let num = 1234;
while(num>0){
    sum += num%10;
    num = Math.floor(num/10);
}
console.log(sum);






console.log("Count words in a string==>");
let str21 = "I love automation testing";
let count11= 1;
for (let ch of str21) {
  if (ch === " ") 
  count11++;
}
console.log(count11);