console.log("reveresd string=====>")
let str122 = "hello";
let rev212 = "";
for (let i = str122.length - 1; i >= 0; i--) {
  rev212 += str122[i];
}
console.log(rev);
//done 10 Feb
//kept first non reverse how can write the code for that question
function reverseExceptFirst(str) {
  return str[0] + str.slice(1).split('').reverse().join('');
}
console.log(reverseExceptFirst('neeshu'));
/*
2️⃣ Last letter same, baaki reverse
👉 u same rahega
Logic:
last letter alag karo
starting part reverse karo
str.slice(0, -1).split('').reverse().join('') + str[str.length - 1]
let part = str.slice(1);
let rev = "";
for (let i = part.length - 1; i >= 0; i--) {
  rev += part[i];
}
let result = str[0] + rev;
console.log(result);
*/

let str2121 = "Neeshu kumar";
let result21 = str2121
  .split(" ")
  .map(word => word[0] + word.slice(1).split("").reverse().join(""))
  .join(" ");
console.log(result21);
//7️⃣ Remove duplicate characters
let abc = 'aabbccddee';
let uniqueArr1 = '';  
for (let ch of abc) {
  if (!uniqueArr1.includes(ch))
    uniqueArr1 += ch;
}
console.log(uniqueArr1);
/*
let str = 'programming';
let uni = '';
for(let ch of str ){
  if(!uni.includes(ch)){
    uni += ch;
  }
}
console.log(uni);

let arr = [2,3,41,2,34,4,34,34,43]
let uni = [];
for(let ch of arr){
  if(!uni.includes(ch)){
    uni.push(ch);
  }
}
console.log(uni);
*/
//4️⃣ Reverse each word (space same position)

let str1211 = "UI automation testing";
let result1211 = str1211
  .split(" ")
  .map(word => word.split("").reverse().join(""))
  .join(" ");
console.log(result1211);
console.log("**************************************** Interview Questions *");
console.log("Check Palindrome String")
let str2 = "madam";
let rev2 = "";
for (let i = str2.length - 1; i >= 0; i--) {
  rev2 += str2[i];
}
console.log(str2 === rev2);
//done 10 Feb
console.log("**************************************** Interview Questions *");
console.log("count vowels==>")
let str3 = "automation neeshu as well as kumar";
let count = 0;
let consonants = 0;
for (let ch of str3) {
  if ("aeiou".includes(ch)) 
    count++;
  else if (ch !== " ") 
  consonants++; // to avoid counting spaces as consonants
}
console.log("count of vowels:", count, "count of consonants:", consonants);


let str121 = "I am a good learner";
let countV = 0;
let constCount = 0;
let v = 'aeiou';
for(let word of str121){
  if(v.includes(word)) {
countV++
}
else if(word !==" ")
constCount++
}
console.log("vowels count", countV, "consonants count", constCount);
//done 10 Feb


console.log("**************************************** Interview Questions *");
console.log("Count characters frequency===>")
let str4 = "banana";
let map = {};
for (let ch of str4) {
  map[ch] = (map[ch] || 0) + 1;
}
console.log(map);
console.log("first non-repeating char==>")
for(let ch in map){
   if(map[ch] === 1){
      console.log(ch);
      break;
   }
}
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
// console.log(map);


console.log("Group Anagrams==> ") // important question in js aksed alreayd in EY.
let arr121221 = ["eat", "tea", "tan", "ate", "nat", "bat"];
let anagramMap = {};
for (let word of arr121221) {
  let sorted = word.split("").sort().join("");
  if (!anagramMap[sorted]) 
  anagramMap[sorted] = [];
  anagramMap[sorted].push(word);
}
console.log(Object.values(anagramMap));


let arr0001 = ['apple', 'APPLE', 'banana', 'BANANA', 'mango', 'MANGO'];

for (let i = 0; i < arr0001.length; i++) {
  if (arr0001[i] === arr0001[i].toLowerCase()) {
    console.log(arr0001[i]);
  }
}
//output will be apple, banana, mango.print lower Case with us.

console.log("Check Anagram===>");
let str55 = ["listen", "silent", "enlist", "inlets","dog","god"];
let anagramGroups = {};
for (let word of str55) {
  let sorted = word.split("").sort().join("");
  if (!anagramGroups[sorted]) 
  anagramGroups[sorted] = [];
  anagramGroups[sorted].push(word);
}
console.log("Anagram groups:", Object.values(anagramGroups));
console.log("anagram===>")
let arr121 = ["listen", "slient"];
let anagramMap1 = {};
for (let word of arr121) {
  let sorted = word.split("").sort().join("");
  if (!anagramMap1[sorted]) 
  anagramMap1[sorted] = [];
  anagramMap1[sorted].push(word);
}
console.log(Object.values(anagramMap1));


///Remove duplicates from array (without Set)
console.log("Remove duplicates from array (without Set)==>")
let arr12 = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr = [];
for (let n of arr12) {
  if (!uniqueArr.includes(n)) 
    uniqueArr.push(n);
}
console.log(uniqueArr);
//remove duplicates from string or remove duplicate characters from string
 let str00001 = "programming";
let result009 = '';
let uni = new Set();
for(let ch of str00001){
  if(!uni.has(ch)){
    uni.add(ch);
    result009 += ch;
  }
}
console.log(result009);
//10 Feb Done

// console.log("Remove duplicates from array (without Set)==>")
// let arr = [1, 2, 2, 3, 4, 4, 5];
// let uni = [];
// for(let i =0;i<arr.length;i++){
//   if(!uni.includes(arr[i])){
//     uni.push(arr[i])
//   }
// }
// console.log(uni);

//spreded methods
// let uniqArr=[...new Set(arr)];
// console.log(uniqArr);

//second higest number in array
// console.log("Second highest number in array===>")
// let arr243 = [5, 9, 2, 7];
// let max3 = -Infinity, secondMax = -Infinity;
// for (let n of arr243) {
//   if (n > max3) {
//     secondMax = max3;
//     max3 = n;
//   } else if (n > secondMax && n !== max3) {
//     secondMax = n;
//   }
// }
// console.log(secondMax);



let arr = [5, 9, 2, 7];
let des = arr.sort((a, b) => b - a); // sort descending
let asc = arr.sort((a, b) => a - b); // sort ascending
let seclowest = asc.find(num => num > asc[0]); // first number greater than min
let secondHighest1 = des.find(num => num < des[0]); // first number smaller than max
console.log(secondHighest1);



/*
let arr = [5, 9, 2, 7];
let desc = [...arr].sort((a, b) => b - a); // descending sorted copy
let asc = [...arr].sort((a, b) => a - b);  // ascending sorted copy
let secondHighest = desc.find(num => num < desc[0]);
console.log(secondHighest);
let secondLowest = asc.find(num => num > asc[0]);
console.log(secondLowest);

*/
// let arr = [5, 9, 2, 7];
// let desc = arr.sort((a,b) => b-a);
// let secondhigest = desc.find(num => num<desc[0]);
// console.log(secondhigest);


// let arr1 = [6,7,2,1,5];
// let asc = arr1.sort((a,b)=>a-b);
// let secondlowest = asc.find(num => num>asc[0]);
// console.log(secondlowest);
//write code with sorted methods in array and create second higest number
// arr243.sort((a, b) => b - a); // sort in descending order
// console.log(arr243[1]); // second highest is now at index 1 




console.log("Most frequent element in array====>")
let arr0 = [1, 2, 3, 2, 4, 2, 5];
let map11 = {};
for (let n of arr0) {
  map11[n] = (map11[n] || 0) + 1;
}
let maxCount = 0;
let mostFrequentElement = null;
for (let n in map11) {
  if (map11[n] > maxCount) {
    maxCount = map11[n];
    mostFrequentElement = n;
  }
}
console.log("Most frequent element is:", mostFrequentElement);



console.log("**************************************** Interview Questions *");
console.log("removed space==>")
let str5 = "hello world qa";
let result = "";
for (let ch of str5) {
  if (ch !== " ") 
    result += ch;
}
console.log(result);
//done 10 Feb
//write space removed with /g\s regex
let result2 = str5.replace(/\s/g, "");
console.log(result2); 
null == unidefined // true
null === undefined // false
NAN == NaN // false 

console.log("**************************************** Interview Questions *");
console.log("First non-repeating character==>");
let str1111 = "swiss";
let map1 = {};
for (let ch of str1111) 
map1[ch] = (map1[ch] || 0) + 1;
for (let ch of str1111) {
  if (map1[ch] === 1) {
    console.log(ch);
    break;
  }
}

/*

// console.log("removed space==>")
// let str = "hello world qa";
// let result = '';
// for(let ch of str){
//   if(ch !== " ")
//   result += ch
// }
// console.log(result);

let str1 = "I am automation Engineer of the day I want to make it good letter";
let rev = '';
let map = {};
let counv = 0;
let constV = 0;
let v = 'aeiou'
let result = '';
for(let ch of str1){
  if(map[ch] === undefined){
    map[ch] = 1;
  }
  else{
    map[ch] += 1;
  }
}
console.log(map);
for(let ch2 of str1){
  if(ch2 === 1){
    console.log(ch2);
    break;
  }
}
let map2 = {};
for(let ch1 of str1){
  if(v.includes(ch1)){
    counv++;
  }
  else if (ch1 !== " "){
    constV++
  }
}
console.log('count of counv:',counv , 'count of cont:',constV);

for(let ch3 of str1){
  if(ch3 !== " "){
    result += ch3;
  }
}
console.log(result);

for(let i = str1.length-1;i>= 0;i--){
  rev += str1[i];
}
console.log(rev);
*/
console.log("**************************************** Interview Questions *");
console.log("Count words in a string==>");
let str21 = "I love automation testing";
let count11= 1;
for (let ch of str21) {
  if (ch === " ") 
  count11++;
}
console.log(count11);


//Case 1
console.log("count spaces==");
let spaces = 0;
for (let ch of str21) {
   if (ch === " ")
       spaces++;
}
console.log(spaces);
//case 2
console.log("remove spaces==>");
let result111 = "";
for (let ch of str21) {
   if (ch !== " ")
       result111 += ch;
}
console.log(result111);
//case 3
console.log("count words==>");  
let wordCount = 0;
for (let ch of str21) {
   if (ch === " ")
       wordCount++;
}
console.log(wordCount + 1); // adding 1 to count the last word
const  fruits = ['Apple', 'Orange', 'Mango','Apple', 'Orange', 'Apple'];
const countMap = {};
for (let fruit of fruits) {
  countMap[fruit] = (countMap[fruit] || 0) + 1; // if fruit is not in countMap, initialize to 0, then add 1
}
console.log(countMap);
//hashmap questions 
console.log("hashmap questions");//count frequency of characters in a string
let str111 = "hello world";
let freqMap = {};
for (let ch of str111) {
  freqMap[ch] = (freqMap[ch] || 0) + 1;
}
console.log(freqMap);



const  fruits1 = ['Apple', 'Orange', 'Mango','Apple', 'Orange', 'Apple'];
let map111 = {}
for(let fruit of fruits1){
map111[fruit] = (map111[fruit] || 0) +1
}


console.log(map111);
//Driver Code Endsconsole.log(map111);
//find first non-repeating character in a string
for (let ch of str111) {
  if (freqMap[ch] === 1) {
    console.log("First non-repeating character is:", ch);
    break;
  }
} 
// let str = "hello world";
// let map1 = {};
// for(let ch of str){
//   if(map1[ch] === undefined){
//     map1[ch] = 1;
//   }
//   else{
//     map1[ch] += 1;
//   }
// }
// console.log(map1)

// for(let ch3 of str){
//   if(map1[ch3] === 1)
//   console.log(ch3);
//   break;
// }

//JavaScript program for string compression / run-length encoding Examples: "aaabbccca" → "4a2b3c1a" or similar "aabbcccdd" → "a2b2c3d2"
//write code above question
// console.log("String compression / run-length encoding==>");
// let str01 = "aaabbccca";
// let compressed = "";
// let count111 = 1;
// for (let i = 1; i < str01.length; i++) {
//   if (str01[i] === str01[i - 1]) {
//     count111++;
//   } else {
//     compressed += count111 + str01[i - 1];
//     count111 = 1;
//   }
// }
// // Add the last character and its count
// compressed += count111 + str01[str01.length - 1];
// console.log(compressed);
console.log("**************************************** Interview Questions *");
console.log("Convert to uppercase and lowercase==>")
let str211 = "hello";
let res = "";
for (let ch of str211) {
  res += ch.toUpperCase();
}
console.log(res);
console.log("**************************************** Interview Questions *");
console.log("anagram check==>");
let a = "listen";
let b = "silent";
let s1 = a.split("").sort().join("");
let s2 = b.split("").sort().join("");
console.log(s1 === s2);
const arr122 = ["eat", "tea", "tan", "ate", "nat", "bat"];
const anagramMap12 = {};
for (const word of arr122) {
  const sorted = word.split("").sort().join("");
  if (!anagramMap12[sorted]) 
    anagramMap12[sorted] = [];
  anagramMap12[sorted].push(word);
}
console.log(Object.values(anagramMap12));










console.log("**************************************** Interview Questions *");
console.log("remove duplicates==>");
let str11111 = "banana";
let set = new Set();
for (let ch of str11111) 
set.add(ch);
let result11 = [...set].join("");
console.log(result11);



//JavaScript program to remove duplicate characters from string (keep first occurrence)
//write code above question
let str001 = "programming";
let result01 = "";
let seen = new Set();
for (let ch of str001) {
  if (!seen.has(ch)) {
    seen.add(ch);
    result01 += ch;
  }
}
console.log(result01);

// 1. empty set
// 2. loop
// 3. already present?
//    yes → skip
//    no → add + use





//Given array [1,1,2,2,3,4,5,5,6,6], output → [3,4] (numbers appearing exactly once)
//write code above question
console.log("Find numbers appearing exactly once==>");
let arr001 = [1, 1, 2, 2, 3, 4, 5, 5, 6, 6];
let freqMap1 = {};
for (let n of arr001) {
  freqMap1[n] = (freqMap1[n] || 0) + 1;
}
let uniqueNumbers = [];
for (let n in freqMap1) {
  if (freqMap1[n] === 1) 
  uniqueNumbers.push(Number(n));
}
console.log(uniqueNumbers);

// 🧠 🔥 MASTER PATTERN (same for all)
// 1. ek Set / Map lo
// 2. loop chalao
// 3. check karo
// 4. condition pe action

// ✅ 1️⃣ UNIQUE STRING (order maintain)
// Q
// Input: "aabbccdde"
// Output: "abcde"
// 🧠 Logic
// seen set
// not present → add + result
// present → skip


let str22 = "aabbccdde";
let seen2 = new Set();
let result22 = "";

for (let ch of str22) {
  if (!seen2.has(ch)) {
    seen2.add(ch);
    result22 += ch;
  }
}

console.log(result);
//JavaScript program to remove all spaces from string
console.log("Remove all spaces from string==>");
let str0001 = "hello world qa";
let result0001 = "";
for (let ch of str0001) {
  if (ch !== " ") 
  result0001 += ch;
}
console.log(result0001);
let spt = str.split(" ").join("");
console.log(spt);



//JavaScript program to print different patterns (star, number, character patterns)
//write code above question
console.log("Print star pattern==>");
let rows = 5;
for (let i = 1; i <= rows; i++) {
  console.log("*".repeat(i));
}



//another pattern
console.log("Print number pattern==>");
for (let i = 1; i <= rows; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += j + " ";
  }
  console.log(line.trim());
}
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// 🧠 आसान language में याद रखने का तरीका
// Pattern देखते ही:
// ❓ खुद से ये 3 सवाल पूछो
// 1️⃣ कितनी rows हैं?
// 2️⃣ हर row में क्या बढ़ रहा है / घट रहा है?
// 3️⃣ space चाहिए क्या?
// बस answer मिल जाएगा.

let n1 = 5;
for (let i = 1; i <= n1; i++) {
  let row = "";

  for (let j = 1; j <= n; j++) {
    row += "* ";
  }

  console.log(row);
}
// ⭐ 2️⃣ Right Triangle Pattern
// *
// * *
// * * *
// * * * *
// * * * * *
let n = 5;
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}

// ⭐ 3️⃣ Inverted Right Triangle
// * * * * *
// * * * *
// * * *
// * *
// *
let n = 5;

for (let i = n; i >= 1; i--) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    row += "* ";
  }

  console.log(row);
}

// ⭐ 4️⃣ Pyramid Pattern
//     *
//    ***
//   *****
//  *******
// *********

let n = 5;
for (let i = 1; i <= n; i++) {
  let spaces = " ".repeat(n - i);
  let stars = "*".repeat(2 * i - 1);
  console.log(spaces + stars);
}
// 🧠 Logic
// spaces = n - row
// stars = 2*i - 1

// ⭐ 5️⃣ Diamond Pattern (Most Asked 🔥)
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

let a = 5;
// upper part
for (let i = 1; i <= a; i++) {
  console.log(" ".repeat(a - i) + "*".repeat(2 * i - 1));
}

// lower part
for (let i = a - 1; i >= 1; i--) {
  console.log(" ".repeat(a - i) + "*".repeat(2 * i - 1));
}
// हर pattern में 3 चीज़ सोचो:
// 1️⃣ Rows कितनी?
// 2️⃣ Spaces कितनी?
// 3️⃣ Stars कितने?
// बस pattern बन जाएगा 😍

// 🧠 🪄 Pattern का Golden Rule
// हर pattern में सिर्फ 3 चीज़ होती हैं:
// 1️⃣ Rows (outer loop)
// 2️⃣ Columns / Stars (inner loop)
// 3️⃣ Spaces (optional)

//another pattern
console.log("Print character pattern==>");
let charCode = 65; // ASCII code for 'A'
for (let i = 1; i <= rows; i++) {
  let line = "";
  for (let j = 0; j < i; j++) {
    line += String.fromCharCode(charCode + j) + " ";
  }
  console.log(line.trim());
}





// console.log("**************************************** Interview Questions *");
// console.log("Remove duplicate characters and sort==>");
// let str2111 = "programming";
// let res211 = "";
// for (let ch of str2111) {
//   if (!res211.includes(ch)) 
//     res211 += ch;
// }
// console.log(res211);










console.log("**************************************** Interview Questions *");
console.log("ARRAY BASED QUESTIONS==>");
let ar222= [3, 7, 1, 9];
let max = ar222[0];
for (let n of ar222) {
  if (n > max) 
    max = n;
}


console.log(max);
console.log("**************************************** Interview Questions *");
console.log('Find min number');
let min = ar222[0];
for (let n of ar222) {
  if (n < min) min = n;
}

console.log(min);
console.log("**************************************** Interview Questions *");
console.log('Sum of array');
let sum = 0;
for (let n of arr) sum += n;
console.log(sum);


console.log("**************************************** Interview Questions *");
console.log('Average of array');
let avg = sum / ar222.length;


console.log(avg);
console.log("**************************************** Interview Questions *");
console.log('Find duplicates in array');
let arr2 = [1, 2, 3, 2, 4, 5, 1];
let dupSet = new Set();
let dups = new Set();
for (let n of arr2) {
  if (dupSet.has(n)) 
    dups.add(n);
  else dupSet.add(n);
}
console.log([...dups]);


console.log("**************************************** Interview Questions *");
console.log('Find common elements in two arrays');
let arr3 = [1, 2, 3, 4];
let arr4 = [3, 4, 5, 6];
let set3 = new Set(arr3);
let common = [];
for (let n of arr4) {
  if (set3.has(n)) 
    common.push(n);
}
//1️⃣ Unique common elements
let common1 = [...new Set(arr4.filter(n => set3.has(n)))];
//2️⃣ Common count
let count1 = arr4.filter(n => set3.has(n)).length;
/*
Array → convert to Set → fast search
Loop second array → check → push common
*/
let a111 = [1,2,3];
let b111 = [3,4,5];
let union = [...new Set([...a111, ...b111])];
console.log(union);
let av = [1,2,3,4];
let bv = [3,4,5];
let setB = new Set(bv);
let diff = av.filter(n => !setB.has(n));
console.log(diff);

//JavaScript program to find largest and smallest element in an array
//write code above question
console.log("Find largest and smallest element in an array==>");
let arr11111 = [5, 2, 9, 1, 5, 6];
let max111 = arr11111[0];
let min111 = arr11111[0];
for (let n of arr11111) {
  if (n > max111) 
    max111 = n;
  if (n < min111) 
    min111 = n;
}
console.log("Largest element:", max111);
console.log("Smallest element:", min111);   
console.log(common);
console.log("**************************************** Interview Questions *");
console.log('Find missing number in array');
let arr5 = [1, 2, 4, 5];
let n = arr5.length + 1; // total numbers should be 5
let expectedSum = (n * (n + 1)) / 2; // sum of first n natural numbers
let actualSum = arr5.reduce((a, b) => a + b, 0); // sum of elements in the array 0 is the initial value for the reduce function
let missingNumber = expectedSum - actualSum;


console.log(missingNumber);
console.log("**************************************** Interview Questions *");
console.log('Reverse an array');
let arr6 = [1, 2, 3, 4, 5];
let revArr = [];
for (let i = arr6.length - 1; i >= 0; i--) {
  revArr.push(arr6[i]);
}
console.log(revArr);
console.log("**************************************** Interview Questions *");
console.log('Rotate an array to the left by d positions');
let arr7 = [1, 2, 3, 4, 5];
let d = 2;
let rotated = arr7.slice(d).concat(arr7.slice(0, d));


console.log(rotated);
console.log("**************************************** Interview Questions *");
console.log("Reverse array");
let arr21 = [1,2,3,4];
let res2112 = [];
for (let i = arr21.length - 1; i >= 0; i--) {
  res2112.push(arr21[i]);
}
console.log(res2112);
console.log("removed duplicate the array===>")
let arr211 = [1,2,2,3,3,4];
let unique = [];
for (let n of arr211) {
  if (!unique.includes(n)) 
  unique.push(n);
}
console.log(unique);
let rr = [...new Set(arr211)];
console.log(rr);

console.log("**************************************** Interview Questions *");
console.log("Count even & odd numbers in an array===>");
let even = 0, odd = 0;
for (let n of arr) {
  if (n % 2 === 0) 
  even++;
  else odd++;
}

console.log(even, odd);
console.log("Second largest");
let arr212 = [5,9,2,7];
let max221 = -Infinity,  second = -Infinity;
for (let n of arr212) {
  if (n > max221) {
    second = max221;
    max221 = n;
  } else if (n > second && n !== max221) {
    second = n;
  }
}
console.log(second);

console.log('Linear search===>');
let target = 7;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === target) {
    console.log("Found at index", i);
    break;
  }
}

console.log("sorted array===>");
// let arr11 = [5,3,8,1];
// for (let i = 0; i < arr11.length; i++) {
//   for (let j = 0; j < arr11.length - i - 1; j++) {
//     if (arr11[j] > arr11[j+1]) {
//       [arr11[j], arr11[j+1]] = [arr11[j+1], arr11[j]];
//     }
//   }
// }

let arr1 = [-1, 2, 3, 4, 5, 6, 7, 3, 5, 3, 32, 0];
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log(arr);

//dsc
let arr2121 = [-1, 2, 3, 4, 5, 6, 7, 3, 5, 3, 32, 0];
for (let i = 0; i < arr2121.length - 1; i++) {
  for (let j = 0; j < arr2121.length - 1 - i; j++) {
    if (arr2121[j] < arr2121[j + 1]) {
      let temp = arr2121[j];
      arr2121[j] = arr2121[j + 1];
      arr2121[j + 1] = temp;
    }
  }
}
console.log(arr2121);
console.log(arr11);
console.log("JavaScript program to find first and last element of an array")
let arr111 = [1,2,3,4,5];
console.log("First element:", arr111[0]);
console.log("Last element:", arr111[arr111.length - 1]);



// console.log("JavaScript program to sort an array without using built-in sort method")
// let arr1111 = [5,2,9,1,5,6];
// for (let i = 0; i < arr1111.length; i++) {
//   for (let j = 0; j < arr1111.length - i - 1; j++) {
//     if (arr1111[j] > arr1111[j+1]) {
//       [arr1111[j], arr1111[j+1]] = [arr1111[j+1], arr1111[j]];
//     }
//   }
// }
// console.log(arr1111);

let arrac = [5,2,9,1,5,6];
for(let i =0;i<arrac.length-1;i++){
  for(let j =0 ; j<arrac.length-1-i;j++){
    if(arrac[j]>arrac[j+1]){
        let temp = arrac[j]
    arrac[j] = arrac[j+1]
    arr[j+1] = temp;
    }
  }
}
console.log(arr);
//JavaScript program to calculate Factorial of a given number
//write the code above question
console.log("Factorial of a given number==>");
let num = 5;
let factorial = 1;
for (let i = 1; i <= num; i++) {
  factorial *= i;
}
console.log(factorial);


//JavaScript program to check if a number is Prime  
console.log("Check if a number is Prime==>");
let num1 = 17;
let isPrime = true;
if (num1 <= 1) 
  isPrime = false;
for (let i = 2; i <= Math.sqrt(num1); i++) {
  if (num1 % i === 0) {
    isPrime = false;
    break;
  }
}
console.log(isPrime);


//JavaScript program to count odd and even numbers in an array Example input: [1,2,3,4,5,6,7,8,9] 
console.log("Count odd and even numbers in an array==>");
let arr1112111 = [1,2,3,4,5,6,7,8,9];
let evenCount = 0;
let oddCount = 0;
for (let n of arr1112111) {
  if (n % 2 === 0) 
    evenCount++;
  else 
    oddCount++;
}
console.log("Even count:", evenCount, "Odd count:", oddCount);

//JavaScript program to reverse each word of a given string
console.log("Reverse each word of a given string==>");
let str1121111 = "Hello World";
let words = str1121111.split(" ");
let reversedWords = words.map(word => word.split("").reverse().join(""));
console.log(reversedWords.join(" ")); 
//JavaScript program to remove duplicate characters from string (keep first occurrence) 
console.log("Remove duplicate characters from string (keep first occurrence)==>");
let str1112111 = "programming";
let result1111 = "";
let seen1111 = new Set();
for (let ch of str1112111) {
  if (!seen1111.has(ch)) {
    seen1111.add(ch);
    result1111 += ch;
  }
}
console.log(result1111);


//JavaScript program to find longest substring without repeating characters 
console.log("Find longest substring without repeating characters==>");
let str11121111 = "abcabcbb";
let longest = "";
let current = "";
for (let ch of str11121111) {
  if (!current.includes(ch)) {
    current += ch;
  } else {
    if (current.length > longest.length) longest = current;
    current = current.slice(current.indexOf(ch) + 1) + ch;
  }
}
if (current.length > longest.length) longest = current; // check at the end
console.log(longest);


//Given "aBACbcEDed" → output "abcde" and "ABCDE" 
console.log("Separate uppercase and lowercase letters in a string==>");
let str8 = "aBACbcEDed";
let lower = new Set();
let upper = new Set();
for (let ch of str8) {
  if (ch >= 'a' && ch <= 'z') lower.add(ch);
  if (ch >= 'A' && ch <= 'Z') upper.add(ch);
}
let lowerStr = [...lower].sort().join('');
let upperStr = [...upper].sort().join('');
console.log(lowerStr); // abcde
console.log(upperStr); // ABCDE

//Given "Subbu123raj" → output "Subburaj" and "123"
console.log("Separate alphabets and numbers from a string==>");
let str11 = "Subbu123raj";
let letters = "";
let digits = "";
for (let ch of str11) {
  if (ch >= '0' && ch <= '9') digits += ch;
  else letters += ch;
}
console.log(letters);
console.log(digits);


//JavaScript program to remove the second highest value from an object / Map  
console.log("Remove the second highest value from an object / Map==>");
let obj = { a: 10, b: 20, c: 30, d: 40 };
let values = Object.values(obj);
values.sort((x, y) => y - x); // sort in descending order
let secondHighest = values[1]; // second highest value
for (let key in obj) {
  if (obj[key] === secondHighest) {
    delete obj[key];
    break;
  }
}
console.log(obj);
//write the factorial program with for loop
let n1 =4;
let fact = 1;
for (let i = 1; i <= n1; i++) {
  fact *= i;
}
console.log(fact);

//JavaScript program to print each letter twice (e.g. "abc" → "aabbcc") 
console.log("Print each letter twice==>");
let str111211111 = "aaabbbccc";
let result11111 = "";
for (let ch of str111211111) {
  result11111 += ch;
}
console.log(result11111);
//JavaScript program to check if a number is Armstrong number 
console.log("Check if a number is Armstrong number==>");
let numArmstrong = 153;
let sumArmstrong = 0;
let temp = numArmstrong;
while (temp > 0) {
  let digit = temp % 10; // get the last digit
  sumArmstrong += digit ** 3; // cube of the digit
  temp = Math.floor(temp / 10); // remove the last digit
}
console.log(sumArmstrong === numArmstrong);
//JavaScript program to find longest substring without repeating characters 
console.log("Find longest substring without repeating characters==>");
let str1112111111 = "abcabcbb";
let longest1111 = "";
let current1111 = "";
for (let ch of str1112111111) {
  if (!current1111.includes(ch)) {
    current1111 += ch;
  } else {
    if (current1111.length > longest1111.length) longest1111 = current1111;
    current1111 = current1111.slice(current1111.indexOf(ch) + 1) + ch;
  }
}
if (current1111.length > longest1111.length) longest1111 = current1111; // check at the end
console.log(longest1111);



console.log([] + []); // "" - empty string
console.log([] + {});// "[object Object]" 
console.log({} + []);// 0 - because {} is treated as an empty block, and +[] is 0
console.log({} + {});// "[object Object][object Object]" - both are treated as empty blocks, so it concatenates their string representations
console.log([1,2] + [3,4]);// "1,23,4" - both arrays are converted to strings and concatenated
console.log("10" + 1);// "101" - number 1 is converted to string and concatenated
console.log("10" - 1);// 9 - string "10" is converted to number and subtraction is performed
console.log(true + "1");// "true1" - boolean true is converted to string and concatenated
console.log(true + 1);// 2 - boolean true is converted to number 1 and addition is performed
console.log(0 == false);// true - 0 is falsy, so it is equal to false
console.log(0 === false);// false - different types (number vs boolean)
console.log("" == 0);// true - empty string is falsy, so it is equal to 0
console.log("" == 0);// false - different types (string vs number)
console.log(null == undefined);// true - both null and undefined are considered equal in non-strict equality
console.log(null === undefined);// false - different types (object vs undefined)
console.log("5" == 5);// true - string "5" is converted to number 5 and compared
console.log("5" === 5);// false - different types (string vs number)
console.log(true == 1);// true - boolean true is converted to number 1 and compared
console.log(true === 1);// false - different types (boolean vs number)
console.log([] == 0);// true - empty array is falsy, so it is equal to 0
console.log([] == false);// true - empty array is falsy, so it is equal to false
console.log([1] == 1);// true - array with one element is converted to that element (1) and compared
console.log([] == "");// true - empty array is converted to empty string and compared
console.log([] == ![]);// true - ![] is false, so it is equal to empty array which is falsy
console.log({} == {});// false - different object references
console.log(0 === false);// false - different types (number vs boolean)
console.log("" == 0);// true - empty string is falsy, so it is equal to 0
console.log("" === 0);// false - different types (string vs number)
console.log(null == undefined);// true - both null and undefined are considered equal in non-strict equality
console.log(null === undefined);// false - different types (object vs undefined)
console.log("5" == 5);// true - string "5" is converted to number 5 and compared
console.log("5" === 5);// false - different types (string vs number)
console.log(true + false);// 1 - true is 1 and false is 0, so addition gives 1
console.log(null + 1);// 1 - null is treated as 0 in numeric context, so addition gives 1
console.log(true + "5");// "true5" - boolean true is converted to string and concatenated
console.log(undefined + 1);// NaN - undefined is treated as NaN in numeric context, so addition gives NaN
console.log("5" + - "2");// "5-2" - unary minus converts "2" to number -2, but since "5" is a string, it concatenates to "5-2"
console.log("5" - - "2");// 7 - unary minus converts "2" to number -2, and "5" is converted to number 5, so subtraction gives 7
console.log("5" * "2");// 10 - both strings are converted to numbers and multiplied
console.log("5" / "2");// 2.5 - both strings are converted to numbers and divided
console.log("5" % "2");// 1 - both strings are converted to numbers and modulus is calculated
console.log("5" ** "2");// 25 - both strings are converted to numbers and exponentiation is calculated
let a1 = 5;
let b1 = "5";
console.log(a1 != b1);    // false
console.log(a1 !== b1);   // true








// console.log("Hello, World!");
// let str = 'QA Automation Engineer';
// let CountV = 0;
// let CountConst = 0;
// let v = 'aeiuo';
// let counta = 0;
// let LowerCase = str.toLowerCase();
// console.log(LowerCase);
// for(let ch of LowerCase){
//   if(v.includes(ch))
//   CountV++;
// else
// CountConst++;
// }
// console.log("countV of ", CountV , "counT of Const",CountConst );
// for(let ch of LowerCase){
//   if(ch === 'a')
//   counta++;
// }
// console.log(counta);

// //write the prograam for prime Number

// num = 60;
// let isPrime = true;
// if(num<1){
//   isPrime = false;
// }
// for(let i = 2;i<Math.sqrt(num);i++){
//   if(num%i === 0){
//     isPrime = false;
//     break;
//   }
// }
// console.log(isPrime);


// let num = Number(prompt("Enter a number:"));
// let isPrime = true;
// if(num<1){
//   isPrime = false;
// }
// for(let i = 2;i<Math.sqrt(num);i++){
//   if(num%i ===0){
//     isPrime = false;
//     break;
//   }
// }
// console.log(isPrime);

// const arr = [10, 20, 30, 40,50,60,70,80];
// let newarr = arr.slice(1,0);
// console.log(newarr);

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
//     sum += num%10;
//     num = Math.floor(num/10);
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



await page.locator('iframe[name="a-nurcz5a1yy50"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
await page.locator('iframe[name="c-nurcz5a1yy50"]').contentFrame().locator('[id="0"]').click();
await page.locator('iframe[name="c-nurcz5a1yy50"]').contentFrame().locator('[id="8"]').click();
await page.locator('iframe[name="c-nurcz5a1yy50"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
await page.getByRole('link', { name: 'Automation Demo Site' }).click();
await page.getByRole('link', { name: 'Alerts' }).click();
page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'click the button to display' }).click();
await page.getByRole('link', { name: 'Alert with OK & Cancel' }).click();
await page.getByRole('link', { name: 'Alert with Textbox' }).click();
await page.getByRole('link', { name: 'Frames' }).click();
await page.getByRole('link', { name: 'Single Iframe' }).click();
await page.locator('iframe[name="SingleFrame"]').contentFrame().getByRole('textbox').click();
await page.locator('iframe[name="SingleFrame"]').contentFrame().getByRole('textbox').fill('g');
await page.locator('iframe[name="SingleFrame"]').contentFrame().getByRole('textbox').click();
await page.locator('iframe[name="SingleFrame"]').contentFrame().getByRole('textbox').fill('geeded');
await page.locator('iframe[name="SingleFrame"]').contentFrame().getByRole('textbox').press('Enter');
await page.getByRole('link', { name: 'Iframe with in an Iframe' }).click();
await page.getByRole('link', { name: 'Iframe with in an Iframe' }).click();
await page.getByRole('link', { name: 'Iframe with in an Iframe' }).click();
await expect(page.getByRole('link', { name: 'Iframe with in an Iframe' })).toBeVisible();
await expect(page.locator('#Multiple').getByText('<p>Your browser does not').contentFrame().getByText('<p>Your browser does not').contentFrame().locator('section')).toMatchAriaSnapshot(`- textbox`);
await expect(page.locator('#Multiple').getByText('<p>Your browser does not').contentFrame().locator('section')).toMatchAriaSnapshot(`
    - heading "Nested iFrames" [level=5]
    - iframe: <p>Your browser does not support iframes.</p>
    `);
await expect(page.locator('#Multiple').getByText('<p>Your browser does not').contentFrame().locator('section')).toMatchAriaSnapshot(`
    - heading "Nested iFrames" [level=5]
    - iframe: <p>Your browser does not support iframes.</p>
    `);
await expect(page.locator('h1')).toContainText('Automation Demo Site');
await page.getByRole('link', { name: 'Home' }).click();
await expect(page.getByRole('button', { name: 'Sign In', exact: true })).toBeVisible();



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
// console.log("Hello, World!");
// let str = 'QA Automation Engineer';
// let CountV = 0;
// let CountConst = 0;
// let v = 'aeiuo';
// let counta = 0;
// let LowerCase = str.toLowerCase();
// console.log(LowerCase);
// for(let ch of LowerCase){
//   if(v.includes(ch))
//   CountV++;
// else
// CountConst++;
// }
// console.log("countV of ", CountV , "counT of Const",CountConst );
// for(let ch of LowerCase){
//   if(ch === 'a')
//   counta++;
// }
// console.log(counta);
//index:  0   1   2   3   4
//array: [10, 20, 30, 40, 50]
//console.log(slice(1,4));
//index:  0   1   2   3   4
// let array =  [10, 20, 30, 40, 50]
// console.log(array.slice(2));
// console.log(array.slice(1,4))
// console.log(array.slice(-3));
// console.log(array.slice(1,-2));
// // console.log(let copy = array.slice())
// console.log(array.slice(-1));
// console.log(array.slice(1));
// console.log(array.slice(0,-1));
// console.log(array.slice(2,5));

// let arr = [10, 20, 30, 20, 40, 10,69,13,20];
// let uni = [];
// for(let ch of arr){
//   if(!uni.includes(ch)){
//     uni.push(ch);
//   }
// }
// console.log(uni);
// let set = [...new Set(arr)];
// console.log(set);

// let asc = arr.sort((a,b)=> a-b);
// console.log(asc);
// let dsc = arr.sort((a,b)=>b-a);
// console.log(dsc);

// for(let i = 0;i< arr.length-1;i++){
//   for(let j =0;j<arr.length-1-i;j++){
//     if(arr[j]>arr[j+1]){
//       temp = arr[j]
//       arr[j] = arr[j+1];
//       arr[j+1] =temp;
//     }
//   }
// }
// console.log(arr);

// let str = 'NITIN';
// let rev = '';
// for(let i =str.length-1;i>=0;i--){
//   rev += str[i];
//   // if(rev === str)
//   // console.log("this is planidron")
//   // else
//   // console.log('this is non planidron');
// }
// console.log(rev === str);

// let str = 'I am automation Engineer';
// let countv = 0;
// let Conuts = 0;
// let v = 'aeiou';
// for(let ch of str){
//   if(v.includes(ch)){
//     countv++
//   }
//   else if (ch !== " "){
//     Conuts++;
//   }
// }
// console.log("count og vowels:", countv,"count of Conuts" , Conuts);



// let str = 'BANANANANAN';
// let map = {}
// for(let ch of str){
//   if(map[ch] === undefined)
//   map[ch] = 1;
//   else
//   map[ch] += 1;
// }
// console.log(map);

// let arr = ['neeshu', 'apple', 'neeshu', 'apple', 'neeshu', 'banana', 'banana', 'nesu'];
// let groupMap = {};
// for(let ch of arr){
//   if(groupMap[ch] === undefined){
//     groupMap[ch] = 1;
//   } else {
//     groupMap[ch] += 1;
//   }
// }

// console.log(groupMap);
// for(let ch of arr){
//   if(groupMap[ch] > 2){
//     console.log(ch);
//     break;
//   }
// }

// let arr = ["eat", "tea", "tan", "ate", "nat", "bat"];

// let map = {};
// for(let ch of arr){
//   let sorted = ch.split("").sort().join("");
//   if(!map[sorted]){
//     map[sorted] = [];
//   }
//     map[sorted].push(ch);
// }
// console.log(Object.values(map));

// let arr = [2,43,23,232,323,2,32,3,23]
// let map = {}
// for(let ch of arr){
//   if(map[ch] === undefined)
//   map[ch] = 1;
//   else
//   map[ch] += 1;
// }
// console.log(map);


// let arr = [-1,2,0,3,4,26,23,43,4,34,34]
//aseding order with bubleshot
// let asc = arr.sort((a,b)=>a-b);
// console.log(asc);
// let dsc = arr.sort((a,b)=>b-a)
// console.log(dsc);
// with help og bubble shot we can try to solved the question
// for(let i =0;i<arr.length-1;i++){
//   for(let j=0;j<arr.length-1-i;j++){
//     if(arr[j]<arr[j+1]){
//       temp = arr[j]
//       arr[j] = arr[j+1]
//       arr[j+1]= temp;
//     }
//   }
// }

//   console.log(arr);
  
  
//   let arr = [10, 20, 30, 20, 40, 10];
//   let uni = [];
//   for(let ch of arr){
//     if(!uni.includes(ch))
//     uni.push(ch);
//   }
// console.log(uni);

// let str = 'Neeshu';
// let uni1 = ''
// for(let ch of str){
//   if(!uni1.includes(ch)){
//     uni1 += ch;
//   }
// }
// console.log(uni1);

// let map = {}
// for(let ch of str){
//   if(map[ch] === undefined)
//   map[ch] = 1;
//   else
//   map[ch] += 1;
// }
// console.log(map);
// for(let ch1 of str){
//   if(map[ch1] === 'n');
//   console.log(ch1);
// break;
// }

// let sum = 0;
// let num = 1234;
// while(num>0){
//   sum += num%10;
//   num = Math.floor(num/10);
// }

// console.log(sum);
// let num1 = 7;
// let fact = 1;
// for(let i = 1;i<num1;i++){
//   fact *= i;
// }
// console.log(fact);


// str = "I am good learner from the coding langauge for make it good for me like this";
// let countv = 0;
// let CountConst = 0;
// let v = 'aeiou';
// let counta = 0;
// let rev = '';
// for(let ch of str){
//   if(v.includes(ch))
//   countv++;
//   else if (ch !== " ")
//   CountConst++
// }
// console.log('count vowels',countv , 'count of consonant', CountConst);

// for(let ch of str){
//   if(ch === 'a')
//   counta++
// }
// console.log(counta);

// for(let ch of str){
//   if(ch !== " ")
//   rev += ch;
// }
// console.log(rev);
// let newstr = str.split(" ").join("");
// console.log(newstr);


// let arr = ['neshu', 'apple', 'neeshu', 'apple', 'neeshu', 'banana', 'banana'];

// let map = {};
// for(let ch of arr){
//   if(map[ch] === undefined){
//     map[ch] = 1;
//   }
//   else{
//     map[ch] += 1;
//   }
// }
// console.log(map);

// let arr = ["eat", "tea", "tan", "ate", "nat", "bat"];
// let groupMap = {};
// for(let word of arr){
//   let sorted = word.split("").sort().join("")
//   if(!groupMap[sorted]){
//     groupMap[sorted] = []
  
//   }
//     groupMap[sorted].push(word);
// }
// console.log(Object.values(groupMap));






// let arr1 = [10, 20, 30, 20, 40, 10];

// let uni = []
// for(let ch of arr1){
//   if(!uni.includes(ch))
//   uni.push(ch);
// }
// console.log(uni);


// let sum = 0;
// let num = 1234;
// while(num>0)
// sum += num%10;
// num = Math.floor(num/10);
// console.log(sum);

// let num  = Number(prompt('Enter you number'));
// let isPrime = true;
// if(num<0){
//   isPrime = false;
// }
// for(let i =2; i<num;i++){
//   if(num%i === 0){
//     isPrime = false;
//   }
//   if(isPrime){
//     console.log('this is prime number')
//   }
//   else{
//     console.log('this is not prime number');
//   }
// }
// console.log(isPrime);


// let str = 'I am automation Engineer';
// let countv = 0;
// let  countConst = 0;
// const v = 'aeiou';
// let Counta = 0;
// let countword = 1;
// let spaceCount = 0;
// let rev = '';
// let result = '';

// for(let ch of str ){
//   if(v.includes(ch)){
//     countv++
//   }
//   else if ( ch !== " "){
//     countConst++
//   }
// }
// console.log('count of vowels', countv, 'count of consonat',countConst );

// for(let ch of str){
//   if(ch === ' '){
//     countword++
//   }
// }

// console.log(countword)

// for(let ch of str){
//   if(ch === " "){
//     spaceCount++
//   }
// }
// console.log(spaceCount);

// let str = 'BANANANANAN';
// let map = {};
// let uni = '';
// for(let ch of str){
//   if(!uni.includes(ch)){
//     uni += ch;
//   }
// }
// console.log(uni);
// for(let ch of str){
//   if(map[ch] === undefined){
//     map[ch] = 1; //init the value 1
//   }
//   else{
//     map[ch] = 1;
//   }
// }
// console.log(map);
// for(let ch of str){
//   if(map[ch] === 1)
//   console.log(ch);
//   break;
// }

// let arr = ['neshu', 'apple', 'neeshu', 'apple', 'neeshu', 'banana', 'banana'];
// let map = {}
// for(let ch of arr){
//   if(map[ch] === undefined)
//   map[ch] = 1;
//   else
//   map[ch] += 1;
// }
// console.log(map);
// for(let ch of arr){
//   if(map[ch] === 1)
//   console.log(ch);
//   break;
// }

// let arr = ["eat", "tea", "tan", "ate", "nat", "bat"];
// let map = {}
// for(let word of arr){
//   let sorted = word.split("").sort().join("");
//   if(!map[sorted]){
//       map[sorted] = []
//   }
// map[sorted].push(word);
// }
// console.log(Object.values(map));


// let str = 'Neeshu kumar';
// let map = {};
// for(let ch of str){
//   if(map[ch] === undefined){
//     map[ch] = 1;
//   }
//   else{
//     map[ch] += 1;
//   }
// }
// console.log(map);
 
// let str = 'Neeshu'
// let first = str[0];
// let rem = str.slice(1);
// let result  = rem.split("").reverse().join("");
// let res = '';
// console.log(result);
// for(let i = rem.length-1;i>=0;i--){
//   res += rem[i];
// }
// console.log(first + res);
// let str = 'Neeshu Kumar'
 
 //String ke sirf even index wale characters print karne hain
 
// let str = "neeshu";
// for (let i = 0; i < str.length; i += 2) {
//   console.log(str[i]);
// }

//JavaScript program to print only even indexed characters
// function evenIndexChars(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i += 2) {
//     result += str[i];
//   }
//   return result;
// }
// console.log(evenIndexChars("javascript"));



//👉 string me sirf even index par jo vowels hain unko print karna hai
// let str = "javascript";
// for (let i = 0; i < str.length; i += 2) {
//   let ch = str[i];
//   if ("aeiou".includes(ch)) {
//     console.log(ch);
//   }
  
  
  
// let str = "abc";
// let result = "";
// for (let i = 0; i < str.length; i++) {
//   result += str[i] + str[i];
// }
// console.log(result);
//find the count of word like this.
// let str = "I am learning JavaScript";
// let counWord = 1;
// for(let ch of str){
//   if(ch === " "){
//     counWord++
//   }
// }
// console.log(counWord);

let a = "hello";
let b = "world";
a = a + b;          // helloworld
b = a.slice(0, a.length - b.length);  // hello
a = a.slice(b.length);                // world
console.log("a =", a);
console.log("b =", b);
let a = "hello";
let b = "world";
[a, b] = [b, a];
console.log(a, b);




//main tumhe run-length encoding (string compression) ka simple loop based program de raha hoon — easy logic 👍

let strq = "aaabbccca";
let resultq = "";
let countq = 1;
for (let i = 0; i < strq.length; i++) {
  if (strq[i] === strq[i + 1]) {
    count++;
  } else {
    resultq += countq + strq[i];
    countq = 1;
  }
}
console.log(resultq);


let str1 = "aabbcccdd";
let result1 = "";
let count10 = 1;

for (let i = 0; i < str1.length; i++) {

  if (str1[i] === str1[i + 1]) {
    count10++;
  } else {
    result1 += str1[i] + count10;
    count10 = 1;
  }

}
console.log(result1);



// let str = "abcabcbb";
// let obj = {};
// let start = 0;
// let maxLen = 0;
// for (let end = 0; end < str.length; end++) {
//   let ch = str[end];
//   // agar character already present hai
//   if (obj[ch] >= start) {
//     start = obj[ch] + 1;
//   }
//   obj[ch] = end;
//   let len = end - start + 1;
//   if (len > maxLen) {
//     maxLen = len;
//   }
// }
// console.log(maxLen);


let str = "abcabcbb";
let obj = {};
let start = 0;
let maxLen = 0;
let longest = "";

for (let end = 0; end < str.length; end++) {
  let ch = str[end];
  if (obj[ch] >= start) {
    start = obj[ch] + 1;
  }
  obj[ch] = end;
  if (end - start + 1 > maxLen) {
    maxLen = end - start + 1;
    longest = str.slice(start, end + 1);
  }
}
console.log(longest);




let str = "SubhRaj123*^&_00";

let small = "";
let capital = "";
let number = "";
let zero = "";
let special = "";

for (let ch of str) {

  if (ch >= 'a' && ch <= 'z') {
    small += ch;
  }
  else if (ch >= 'A' && ch <= 'Z') {
    capital += ch;
  }
  else if (ch >= '1' && ch <= '9') {
    number += ch;
  }
  else if (ch === '0') {
    zero += ch;
  }
  else {
    special += ch;
  }

}

console.log("small =", small);
console.log("capital =", capital);
console.log("number =", number);
console.log("zero =", zero);
console.log("special =", special);


let str = "abcabcbb";

let obj = {};
let start = 0;
let maxLen = 0;

for (let end = 0; end < str.length; end++) {

  let ch = str[end];

  if (obj[ch] >= start) {
    start = obj[ch] + 1;
  }

  obj[ch] = end;

  maxLen = Math.max(maxLen, end - start + 1);
}

console.log(maxLen);



let num = 153;
let temp = num;
let sum = 0;

let digits = num.toString().length;

while (temp > 0) {

  let rem = temp % 10;
  sum += rem ** digits;
  temp = Math.floor(temp / 10);

}

if (sum === num) {
  console.log("Armstrong number");
} else {
  console.log("Not an Armstrong number");
}



let asianCountries = ["India", "China", "Japan", "South Korea", "North Korea", "Indonesia", "Malaysia", "Singapore", "Thailand", "Vietnam", "Philippines", "Myanmar", "Sri Lanka", "Nepal", "Bangladesh", "Pakistan", "Afghanistan", "Iran", "Iraq", "Saudi Arabia", "United Arab Emirates", "Qatar", "Kuwait", "Oman", "Jordan", "Israel", "Lebanon", "Kazakhstan", "Uzbekistan", "Mongolia"];
let count643 = 0;
for (let country of asianCountries) {
  if (country.toLowerCase().endsWith("tan")) {
    count643++;
    console.log(country);
  }
}
// let str = 'This is a coding test, All the best'
// //Output string - sihT is a gnidoc test, All eht best!
// // let rem = str.slice(0,2);
// //sihT is a coding test, All the best!
// let word  = str.split(" ");
// let rem  = word[0]
// let remm = word.slice(1)
// let rev = '';
let str543 = "This is a coding test, All the best!";
// split sentence into words
let words8677 = str543.split(" ");
console.log(words8677);
// reverse first word
words8677[0] = words8677[0].split("").reverse().join("");
console.log(words8677[0]);
// reverse fourth word (coding)
words8677[3] = words8677[3].split("").reverse().join("");
// reverse word "the"
words8677[6] = words8677[6].split("").reverse().join("");
// join sentence again
let result654 = words8677.join(" ");
console.log(result654);
let first word = 
let rev = str543.split(" ").map(word => word.split("").reverse().join("")).join(" ")
console.log(rev);

//JavaScript program to generate prime numbers between 1 and given number
//write the prograam of that code 

/*
1. Number-Related Programs (JavaScript)
JavaScript program to check if a number is Odd or Even-done
JavaScript program to check if a number is Prime
JavaScript program to generate Fibonacci series up to a given number/range
JavaScript program to calculate Factorial of a given number
JavaScript program to reverse a number
JavaScript program to check if a number is Armstrong number
JavaScript program to count number of digits in a given number
JavaScript program to check if a number is Palindrome
JavaScript program to calculate sum of digits of a number
JavaScript program to generate prime numbers between 1 and given number
2. Array-Related Programs (JavaScript)
JavaScript program to find common elements between two arrays
JavaScript program to find first and last element of an array
JavaScript program to sort an array without using built-in sort method
JavaScript program to remove duplicates from an array
JavaScript program to find the missing number in an array (1 to N)
JavaScript program to find largest and smallest element in an array
JavaScript program to search an element in an array
JavaScript program to find minimum and maximum from an array
JavaScript program to count odd and even numbers in an array Example input: [1,2,3,4,5,6,7,8,9]
JavaScript program to find highest number in array without using built-in methods
JavaScript program – array with integers and special characters, sum only integers
JavaScript program to find maximum sum subarray (Kadane’s algorithm)
Given array [1,1,2,2,3,4,5,5,6,6], output → [3,4] (numbers appearing exactly once)
Find missing number from 1 to N in array
3. String-Related Programs (JavaScript)
JavaScript program to reverse a string (with and without built-in methods)
JavaScript program to reverse each word of a given string
JavaScript program to check if a string is Palindrome
JavaScript program to check if two strings are Anagrams
JavaScript program to find duplicate characters in a string
JavaScript program to count occurrences of each character in a string
JavaScript program to count number of words in a string
JavaScript program to count vowels and consonants in a string
JavaScript program to find first non-repeating character in a string
JavaScript program to print unique characters from string
JavaScript program to print only even indexed characters
JavaScript program to remove all spaces from string
JavaScript program to print each letter twice (e.g. "abc" → "aabbcc")
JavaScript program to swap two strings without using third variable
JavaScript program for string compression / run-length encoding Examples: "aaabbccca" → "4a2b3c1a" or similar "aabbcccdd" → "a2b2c3d2"
JavaScript program to separate alphabets and numbers from a string
JavaScript program to extract initials from full name
JavaScript program to remove duplicate characters from string (keep first occurrence)
JavaScript program to find longest substring without repeating characters
Given "aBACbcEDed" → output "abcde" and "ABCDE"
Given "Subbu123raj" → output "Subburaj" and "123"
Given "32400121200" → output "32412120000" (remove leading zeros) or "00003241212" (preserve leading zeros)
5. Object / Map / Collection Related (JavaScript)
JavaScript – what happens with duplicate keys in an object / Map?
JavaScript program to remove the second highest value from an object / Map
JavaScript program to print all entries of a Map
*/