console.log("reveresd string=====>")
let str = "hello";
let rev = "";
for (let i = str.length - 1; i >= 0; i--) {
  rev += str[i];
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
let arr1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
let anagramMap = {};
for (let word of arr1) {
  let sorted = word.split("").sort().join("");
  if (!anagramMap[sorted]) 
  anagramMap[sorted] = [];
  anagramMap[sorted].push(word);
}
console.log(Object.values(anagramMap));


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

//JavaScript program to remove all spaces from string
console.log("Remove all spaces from string==>");
let str0001 = "hello world qa";
let result0001 = "";
for (let ch of str0001) {
  if (ch !== " ") 
  result0001 += ch;
}
console.log(result0001);



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





console.log("**************************************** Interview Questions *");
console.log("Remove duplicate characters and sort==>");
let str2111 = "programming";
let res211 = "";
for (let ch of str2111) {
  if (!res211.includes(ch)) 
    res211 += ch;
}
console.log(res211);










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
let arr11 = [5,3,8,1];
for (let i = 0; i < arr11.length; i++) {
  for (let j = 0; j < arr11.length - i - 1; j++) {
    if (arr11[j] > arr11[j+1]) {
      [arr11[j], arr11[j+1]] = [arr11[j+1], arr11[j]];
    }
  }
}
console.log(arr11);
console.log("JavaScript program to find first and last element of an array")
let arr111 = [1,2,3,4,5];
console.log("First element:", arr111[0]);
console.log("Last element:", arr111[arr111.length - 1]);



console.log("JavaScript program to sort an array without using built-in sort method")
let arr1111 = [5,2,9,1,5,6];
for (let i = 0; i < arr1111.length; i++) {
  for (let j = 0; j < arr1111.length - i - 1; j++) {
    if (arr1111[j] > arr1111[j+1]) {
      [arr1111[j], arr1111[j+1]] = [arr1111[j+1], arr1111[j]];
    }
  }
}
console.log(arr1111);


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
4. Pattern & Miscellaneous Logic Programs (JavaScript)
JavaScript program to print different patterns (star, number, character patterns)
JavaScript program to generate all permutations of a given string
5. Object / Map / Collection Related (JavaScript)
JavaScript – what happens with duplicate keys in an object / Map?
JavaScript program to remove the second highest value from an object / Map
JavaScript program to print all entries of a Map
*/

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