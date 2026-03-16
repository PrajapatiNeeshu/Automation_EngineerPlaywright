let num = 132;
let i = 2;
let isPrime = true;
while (i <= Math.sqrt(num)) { //i<=num/2 is also correct but sqrt is more efficient
    if (num % i === 0) {
        isPrime = false;
        break;
    }
    i++;
}
console.log(isPrime);
console.log("prime number is first above");


let num1 = 12;
let isPrime1 = true;
for (let i = 2; i <= Math.sqrt(num1); i++) {
    if (num1 % i === 0) {
        isPrime1 = false;
        break;
    }
}

console.log(isPrime1);

let n = 5;
let fact = 1;

while (n > 0) {
  fact *= n;
  n--;
}

console.log("Factorial =", fact);

let num12 = 121;
let original = num12;
let reverse = 0;

while (num12 !== 0) {
  let digit = num12 % 10; // Get the last digit
  reverse = reverse * 10 + digit; // Append the digit to the reverse
  num12 = Math.floor(num12 / 10); // Remove the last digit
}
console.log(original === reverse ? "Palindrome" : "Not Palindrome");