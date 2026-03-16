// setTimeout(function() {
//   console.log("wait for 2 sec");
// }, 5000);

// setInterval(() => {
//   console.log("Hi");
// }, 5000);

// console.log("Start");

// setTimeout(() => {
//   console.log("Timer");
// }, 2000);

// console.log("End");
// console.log("Start");

// setTimeout(() => console.log("Timeout"), 0);

// Promise.resolve().then(() => console.log("Promise"));

// console.log("End");




// const arr = [10, 20, 30, 40];

// const result = arr.slice(1, 3);

// console.log(result); // [20, 30]
// console.log(arr);    // [10, 20, 30, 40] ✅ unchanged


// const arr = [10, 20, 30, 40];

// arr.splice(1, 2);

// console.log(arr);
// // [10, 40]

// const name = "Neeraj QA";

// const result = name.split(" ");

// console.log(result);
// // ["Neeraj", "QA"]


// let arr = [10, 20, 30, 20, 40, 10];
// const unique21 = [];
// arr.forEach(item => {
//   if (!unique21.includes(item)) {
//     unique21.push(item);
//   }
// });
// console.log(unique21)






// function greet(name, callback) {
//   console.log("Hello " + name);
//   callback();
// }


// function done() {
//   console.log("Done");
// }


// greet("Neeraj", done);

// let sum = 0;
// let num = 1234;
// while(num>0){
//     sum += num%10;//getting the last digit
//     num = Math.floor(num/10); //removing the last digit
// }
// console.log(sum);


// let str = 'NITIN';
// let rev = '';
// for(let i = str.length-1;i>=0; i--){
//   rev += str[i];
//   if(str === rev){
//     console.log("this is panidrone number");
//   }
//   else{
//     console.log("this is Non planidron number");
//   }
// }
// console.log(str === rev);


// let str = 'I am automation Engineer';
// let CountV = 0;
// let CountCons = 0;
// let v = 'aeiou';
// for(let ch of str ){
//   if(v.includes(ch)){
//     CountV++
//   }
//   else if( ch !== " "){
//     CountCons++;
//   }
// }

// console.log('count of v' , CountV , 'count of Consto', CountCons);


// let str = "I am good learner from the coding langauge for make it good for me like this";
// let countV = 0;
// let constV = 0;
// let v = 'aeiou';
// for(let ch of str){
//   if(v.includes(ch)){
//   countV++;
//   }
//   else if ( ch !== " "){
//     constV++;
//   }
// }
// console.log('count of v ', countV , 'constV' , constV);

//count occuranace of frequency;
// let str = 'BANANANANAN';
// let arr = ['neeshu', 'apple', 'neeshu', 'apple', '']
// let map = {};
// for(let ch of str){
//   map[ch] = (map[ch] || 0) +1;
// }
// console.log(map);
// let str1 = 'BANANANANAANAHAHHAAN';
// let map1 = {};

// for (let ch of str1) {
//   if (map1[ch] === undefined) {
//     map1[ch] = 1;  // initialize count
//   } else {
//     map1[ch] += 1; // increment count
//   }
// }

// console.log(map);


// let arr = ['neshu', 'apple', 'neeshu', 'apple', 'neeshu', 'banana', 'banana'];
// let map = {};
// for(let ch of arr){
//   if(map[ch] === undefined)
//   map[ch] = 1;
//   else{
//     map[ch] += 1;
//   }
// }
// console.log(map);

// let str = 'NESHUSUSHUSHUSHUHSUHSUHS';
// let map = {};
// for(let ch of str){
//   if(map[ch] === undefined){
//     map[ch] = 1
//   }
//   else{
//     map[ch] += 1;
//   }
// }
// // console.log(map);
// let str = 'NEHSUSHUHUSHS'
// let map = {};
// for (let ch in str) {
//   if (map[ch] === 1) {
//     console.log(ch);
//   }
// }

// console.log(map);

// let arr = ["eat", "tea", "tan", "ate", "nat", "bat"];
// let anagramMap = {};
// for(let words of arr){
//   let sorted = words.split("").sort().join();
//   if(!anagramMAp[sorted]){
//     anagramMap[sorted] = []
//     anagramMap[sorted].push(word)
//   }
  
// }
// console.log("Anagram groups:", Object.values(anagramMap));

// let arr = ["eat", "tea", "tan", "ate", "nat", "bat"];
// let anagramMap = {};
// for (let word of arr) {
//   let sorted = word.split("").sort().join("");
//   console.log(sorted);
//   if (!anagramMap[sorted]) {
//     anagramMap[sorted] = [];
//   }
//   anagramMap[sorted].push(word);
// }
// console.log("Anagram groups:", Object.values(anagramMap));


// let arr = ["Eat", "tea", "tan", "ate", "nat", "bat"];
// let anagramMap = {};
// for(let word of arr){
//   let words = word.toLowerCase().split(" ").sort().join("");
//   // let sorted = word.toLowerCase().split("").sort().join("");
//   if(!anagramMap[words]){
//     anagramMap[words] = []
//     anagramMap[words].push(words);
//   }
// }
// console.log(Object.values(anagramMap));
// let arr12 = [1, 2, 2, 3, 4, 4, 5];
// let set = [...new Set(arr12)];
// console.log(set);

// let arr1 = [2,3,2,3,23,23,23,2];
// let uni = [];
// for(let n of arr1){
//   if(!uni.includes(n)){
//     uni.push(n);
//   }
// }
// console.log(uni);


// let arr2 = [1,2,3,5,4,6,7,4,3,3,4,4,343];
// let uni1 = [];
// for(let n of arr2){
//   if(!uni1.includes(n)){
//     uni1.push(n);
//   }
// }
// console.log(uni1);

// let arr22 = [2,43,23,232,323,2,32,3,23]
// let map = {};
// for(let n of arr22){
//   if(map[n] === undefined){
//     map[n] = 1;//init the 1
//   }
//   else{
//     map[n] += 1;
//   }
// }
// console.log(map);
// let arr3 = [2,3,23,23,2,32,3]
// let map121 = {};
// for(let a of arr3){
//   map121[a] = (map121[a] || 0) +1
// }
// console.log(map121);
// let str1 = 'Neeshu kumar';
// let map22 = {};
// for(let nn of str1){
//   if(map22[nn] === undefined){
//     map22[nn] = 1;
//   }
//   else{
//     map22[nn] += 1;
//   }
// }
// console.log(map22)

// let str = "banana";
// let map = {};
// for(let ch of str){
//   if(map[ch] === undefined){
//     map[] = 1//init 1
//   }
//   else{
//     map[] += 1;
//   }
// }
// console.log(map);

// let str = 'Neeshu kumar';
// let rev = '';
// for(let i = str.length-1;i>=0;i--){
//   rev += str[i];
// }
// console.log(rev);
// //needs to kept first letter same as ;
// let str = 'Neeshu';
// rev = '';
// for(let i = str.length-1;i>=0;i--){
//   rev += str[i];
// }
// console.log(rev);

// let str = 'Neeshu'
// let fisrt = str[0];
// let rem = str.slice(1)
// let rev = rem.split('').reverse().join();
// let finalOut = fisrt + rev;
// console.log(finalOut);


// let str = 'Neeshu';
// let part = str.slice[1];
// let rev = '';
// let first = str[0];
// for(let i = part.length-1; i>=0;i--){
//   rev += part[i];
// }
// let final = first + rev;
// console.log(final);
// let part = str.slice(1);
// let rev = "";
// for (let i = part.length - 1; i >= 0; i--) {
//   rev += part[i];
// }
// let result = str[0] + rev;
// console.log(result);

// let arr = ['neeshu', 'Kumar'];
// let rev = arr.split('').map(word=>word[0].split('').reverse.join(''));

// console.log(rev);

// let str = "Neeshu kumar";
// let result = str
//   .split(" ")
//   .map(lt => lt[0] + lt.slice(1).split("").reverse().join(""))
//   .join(" ");
// console.log(result);


// let str1 = 'NITIN';
// let rev = '';
// for(let i = str1.length-1;i>=0;i--){
//   rev += str1[i]
//   if(rev == str1){
//     console.log("thi is panidrone")
//   }
//   else{
//     console.log("this is nON planidron")
//   }
// }




// let str = "automation neeshu as well as kumar";
// let counV = 0;
// let CountCons = 0;
// let v = 'aeiou';
// for(let ch of str){
//   if(v.includes(ch))
//     counV++
//   else if (ch !== " ")
//     CountCons++
// }
// console.log('count of vowels:', counV , 'count of const', CountCons);


// let str = "I am a good learner";

// let counV = 0;
// let counst = 0;
// let v = 'aeiou';
// for(let ch of str){
//   if(v.includes(ch))
//   counV++
//   else if(ch !== " ")
//   counst++
  
// }

// console.log("count of V :",counV , "count of constonet:", counst );
//cpunt of occurance of words;
// let str4 = "banana";
// let map = {};
// for(let ch of str4){
//   if(map[ch] === undefined)
//   map[ch] = 1; //init of 1;
//   else
//   map[ch] += 1; //incre the and add 1;
// }
// console.log(map);
// for(let ch of str4){
//   if(map[ch] === 3)
//   console.log(ch);
// }


// let str = 'NESHUSUSHUSHUSHUHSUHSUHS';
// let map = {};
// for(let ch of str){
//   if(map[ch] === undefined)
//   map[ch] = 1; //initialize of 1 if value is undefined
//   else
//   map[ch] += 1;
// }
// console.log(map);

// let arr = [2,43,21,2121,1,11,2,32,32,23];
// let map = {};
// for(let ch of arr){
//   if(map[ch] === undefined)
//   map[ch] = 1;
//   else
//   map[ch] += 1;
// }
// console.log(map)

// let arr = ["eat", "tea", "tan", "ate", "nat", "bat"];

// let map = {};
// for(let word of  arr){
//   let sorted = word.split("").sort().join("");
//   if(!map[sorted])
//   map[sorted] = []
//   map[sorted].push(word);
// }

// console.log(Object.values(map));


// let str = ["listen", "silent", "enlist", "inlets","dog","god"];
// let map = {};
// let anagramMap = {};
// for(let word of str){
//   let sorted = word.split("").sort().join("");
//   if(!map[sorted])
//   map[sorted] = [];
//   map[sorted].push(word);
// }
// console.log(Object.values(map

// let arr = [1, 2, 2, 3, 4, 4, 5];

// let uni = [];
// for(let ch of arr){
//   if(!uni.includes(ch))
//   uni.push(ch);
// }
// console.log(uni);

// let set = [...new Set(arr)];
// console.log(set);



// let arr = [5, 9, 2, 7];
// let desc = arr.sort((a,b)=> b-a)
// let asc = arr.sort((a, b)=> a-b)

// let secOndHigest = desc.find(num => num<desc[0]);
// console.log(secOndHigest);

// let secondlowest = asc.find(num => num>asc[0]);
// console.log(secondlowest);



// let arr = [5, 9, 2, 7];

// let desc = [...arr].sort((a, b) => b - a); // descending sorted copy
// let asc = [...arr].sort((a, b) => a - b);  // ascending sorted copy

// let secondHighest = desc.find(num => num < desc[0]);
// console.log(secondHighest);

// let secondLowest = asc.find(num => num > asc[0]);
// console.log(secondLowest);


// let arr = [1, 2, 3, 2, 4, 2, 5];
// let map = {};
// for(let ch of arr){
//   if(map[ch] === undefined)
//   map[ch] =1;
//   else
//   map[ch] += 1;
// }
// console.log(map);

// for(let ch1 of arr){
//   if(map[ch1]===3)
//   console.log(ch1);
// }
//space removed
// let str = "hello world qa";
// let result = '';
// for(let ch of str){
//   if(ch !== " ")
//   result += ch
// }
// console.log(result);
// //count of words
// let str21 = "I love automation testing";

// let count = 1;
// for(let ch of str21){
//   if(ch === " ")
//   count++
// }
// console.log(count);

// const  fruits = ['Apple', 'Orange', 'Mango','Apple', 'Orange', 'Apple'];
// let CountMap = {};
// for(let ch of fruits){
//   if(CountMap[ch] === undefined)
//   CountMap[ch] =1;
//   else
//   CountMap[ch] += 1;
// }
// console.log(CountMap);


// let arr001 = [ 1,2,3,4,5,6]
// let max = arr001[0];
// let mini = arr001[0];
// for(let n of arr001){
//   if(n>max)
//   max = n;
//   if(n<mini)
//   mini = n;
// }
// console.log(max , mini);



// class Calculator {
//   static add(a, b) {
//     return a + b;
//   }
// }

// console.log(Calculator.add(2, 3));
// let str5 = "hello world qa";
// let result = '';
// for(let ch of str5){
//   if(ch !== " ")
//   result += ch;
// }
// console.log(result);

// const arr122 = ["eat", "tea", "tan", "ate", "nat", "bat"];
// let groupMap = {}
// for(let word of arr122){
//   let sorted = word.split("").sort().join("");
//   if(!groupMap[sorted])
//   groupMap[sorted] = []
//   groupMap[sorted].push(word);
// }
// console.log(Object.values(groupMap));

// let str = "banana";
// let map = {}
// for(let ch of str){
//   if(map[ch] === undefined)
//   map[ch] = 1;
//   else
//   map[ch] += 1;
// }
// console.log(map);

// let str = 'BANANANANAANAHAHHAAN';
// let uni = '';
// for(let ch of str){
//   if(!uni.includes(ch))
//   uni += ch;
// }
// console.log(uni);

// let arr = [2,3,41,2,3,4,5,6,7,8,9]
// let uni = []
// for(let ch of arr){
//   if(!uni.includes(ch))
//   uni.push(ch);
// }
// console.log(uni);

// let set = [...new Set(arr)];
// console.log(set);

// let str = "programming";
// let result = '';
//   let seen = new Set();
//   for(let ch of str){
//       if(!seen.has(ch))
//       seen.has(ch)
//       result +=ch;
//   }
//   console.log(result);
  
// let str22 = "aabbccdde";
// let seen  = new Set();
// let result = '';

// for(let ch of str22){
//   if(!seen.has(ch))
//   seen.add(ch)
//   result += ch;
// }
// console.log(result);

// let arr = [1, 1, 2, 2, 3, 4, 5, 5, 6, 6];
// let uni = []
// let map = {};
// for(let ch of arr){
//   if(map[ch] === undefined)
//   map[ch] =1;
//   else
//   map[ch] += 1;
// }
// console.log(map);
// for(let ch of arr){
//   if(map[ch] ===1)
//   console.log(ch);
// }


// let str = "hello world qa";
// let result = '';
// for(let ch of str){
//   if(ch !== " ")
//   result += ch;
// }
// console.log(result);

// *
// **
// ***
// ****
// *****

// let n =5
// let result = "";
// for(let i = 1;i<=n;i++){
//   for(let j = 1;j <= i;j++){
//     result += '* ';
//   }
//   console.log(result);
// }


// for (var i = 1; i <= 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }
// for (let i = 1; i <= 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }


// function outer() {

//   let name = "Neeshu";

//   function inner() {
//     console.log(name);
//   }

//   return inner;
// }

// const fn = outer();

// // fn();
// function outer(){
//   name = 'neeshu';
//   function inner(){
//     console.log(name);
//   }
//   return inner;
// }
// const fn = outer();
// fn();
// function outer(){
  
//   name = 'neeshu'
//   function inner (){
//     console.log(name);
//   }
//   return inner;
// }

// const fn = outer();
// fn();
//removed the space;
// let str = "hello world qa";
// let res = '';
// for(let ch of str){
// if(ch !== " ")
// res += ch;
// }
// console.log(res);

// let spt = str.split(" ").join("");
// console.log(spt);

// let arr = [-1,2,3,4,5,6,7,3,5,3,32,0];
// let ase = arr.sort((a,b)=> a-b);
// let dsc = arr.sort((a,b)=> b-a);
// console.log("asc order", ase, "desc order of count", dsc);


//buble sort methdods use krte he bhai

// let arr = [-1, 2, 3, 4, 5, 6, 7, 3, 5, 3, 32, 0];
// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = 0; j < arr.length - 1 - i; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }
// console.log(arr);


// let arr1 = [-1, 2, 3, 4, 5, 6, 7, 3, 5, 3, 32, 0];
// for(let i = 0; i<arr1.length-1;i++){
//   for(let j = 0;j<arr1.length-1-i;j++){
//     let temp = arr[j];
//     arr[j] = arr[j+1]
//     arr[j+1] = temp;
//   }
// }


// let arr = [5,2,9,1,5,6];
// for(let i =0;i<arr.length-1;i++){
//   for(let j =0 ; j<arr.length-1-i;j++){
//     if(arr[j]>arr[j+1]){
//         let temp = arr[j]
//     arr[j] = arr[j+1]
//     arr[j+1] = temp;
//     }
//   }
// }
// console.log(arr);


// let num = 7;
// let fact = 1;
// for(let i =1; i<num;i++){
//   fact *= i;
  
// }
// console.log(fact);

// let num1 = 17;
// let isPrime = true;
// if()
// let num = Number(prompt("Enter a number:"));
// let isPrime = true;
// if (num <= 1) {
//   isPrime = false;
// }
// for (let i = 2; i < num; i++) {
//   if (num % i === 0) {
//     isPrime = false;
//     break;
//   }
// }
// if (isPrime) {
//   console.log("Prime number");
// } else {
//   console.log("Not a prime number");
// }


// let num = 41;
// let isPrime = true;
// if(num<1){
//   isPrime = false;
// }

// for(let i = 2; i<Math.sqrt(num);i++){
//   if(num%i === 0){
//     isPrime = false;
//     break;
//   }
// }
// console.log(isPrime);

// let arr = [1,2,3,4,5,6,7,8,9];
// let countOdd = 0;
// let even = 0;
// for(let ch of arr){
//   if(ch%2 === 0)
//   even++
//   else
//   countOdd++
// }
// console.log('count of odded number', countOdd , 'count od even number', even);
//count of vowels and constonents and count a as well;
console.log("Hello, World!");
let str = 'QA Automation Engineer';
let CountV = 0;
let CountConst = 0;
let v = 'aeiuo';
let counta = 0;
let LowerCase = str.toLowerCase();
console.log(LowerCase);
for(let ch of LowerCase){
  if(v.includes(ch))
  CountV++;
else
CountConst++;
}
console.log("countV of ", CountV , "counT of Const",CountConst );
for(let ch of LowerCase){
  if(ch === 'a')
  counta++;
}
console.log(counta);


