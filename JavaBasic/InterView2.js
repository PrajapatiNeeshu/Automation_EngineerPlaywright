/*
1. letters check
2. lowercase separate
3. uppercase separate
4. remove duplicates (Set)
5. sort
🧠 FINAL STRUCTURE
1️⃣ STRING – BASIC
2️⃣ STRING – WORD BASED
3️⃣ STRING – VOWEL / CASE / SPACE
4️⃣ STRING – HASHMAP
5️⃣ STRING – DUPLICATE
6️⃣ STRING – ANAGRAM
7️⃣ STRING – ADVANCED
8️⃣ COMMON (STRING + ARRAY HASHMAP)
9️⃣ ARRAY – BASIC
🔟 ARRAY – DUPLICATE / UNIQUE
1️⃣1️⃣ ARRAY – POSITION BASED
1️⃣2️⃣ ARRAY – SET OPERATIONS
1️⃣3️⃣ ARRAY – SEARCH / SORT
1️⃣4️⃣ NUMBER PROGRAMS
1️⃣5️⃣ OBJECT / MAP
1️⃣6️⃣ PATTERN
1️⃣7️⃣ HARD (LAST)


*/


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
console.log("**************************************** Interview Questions *");


let str11 = "Subbu123raj";

let letters = "";
let digits = "";

for (let ch of str11) {
    if (ch >= '0' && ch <= '9')
        digits += ch;
    else
        letters += ch;
}
console.log(letters);
console.log(digits);
console.log("**************************************** Interview Questions *");
console.log("remove leading zeros")
let str1 = "32400121200";
let result1 = str.replace(/^0+/, '');
console.log(result);
console.log("**************************************** Interview Questions *");
console.log("move zeros front)")
let str111 = "32400121200";
let zeroCount = (str111.match(/0/g) || []).length;
let noZeros = str111.replace(/0/g, '');
let result11 = '0'.repeat(zeroCount) + noZeros;
console.log(result11); // 00003241212
console.log("String Compression==>")
console.log("**************************************** Interview Questions *");
let str12 = "aaabbccca";

//write the  TAG: STRING_TRAVERSAL_REVERSAL PATTERN:   for this problem

let result21 = "";
let count21 = 1;
for (let i = 0; i < str12.length; i++) {
    if (str12[i] === str12[i+1]) {
        count21++;
    } else {
        result21 += count21 + str12[i];
        count21 = 1;
    }
}
console.log(result21); // 3a2b3c1a
console.log("**************************************** Interview Questions *");



//🟢 1️⃣ STRING – BASIC (Traversal Based)

/*
🟢 1️⃣ STRING REVERSAL FAMILY
🏷 TAG: STRING_TRAVERSAL_REVERSAL
🧠 PATTERN:
start from end → build new string
🧩 TEMPLATE:
for (let i = str.length - 1; i >= 0; i--)
🎯 USE:
reverse string
palindrome
reverse array (manual)
*/
console.log("reveresd string=====>")
let str = "hello";
let rev = "";
for (let i = str.length - 1; i >= 0; i--) {
  rev += str[i];
}
console.log(rev);


console.log("Check Palindrome String")




/*
🟢 2️⃣ PALINDROME CHECK
🏷 TAG: TWO_POINTER_COMPARE
🧠 PATTERN:
original === reversed
OR
start++ & end--
*/

let str2 = "madam";
let rev2 = "";
for (let i = str2.length - 1; i >= 0; i--) {
  rev2 += str2[i];
}
console.log(str2 === rev2);
console.log("removed space==>")
let str5 = "hello world qa";
let result = "";
for (let ch of str5) {
  if (ch !== " ") result += ch;
}
console.log(result);

let result2 = str5.replace(/\s/g, "");
console.log(result2);
console.log("Count words in a string==>");
let str21 = "I love automation testing";
let count11= 1;
for (let ch of str21) {
  if (ch === " ") count11++;
}
console.log(count11);
console.log("Reverse each word of a given string==>");
let str1211 = "UI automation testing";
let result1211 = str1211
  .split(" ")
  .map(word => word.split("").reverse().join(""))
  .join(" ");
console.log(result1211);




//🟢 2️⃣ STRING – FIRST LETTER FIX / WORD LOGIC
/*
🟢 3️⃣ REMOVE SOMETHING FROM STRING
🏷 TAG: STRING_FILTER_BUILD
🧠 PATTERN:
loop → condition → result += ch
🎯 USE:
remove spaces
remove digits
keep only vowels
*/

function reverseExceptFirst(str) {
  return str[0] + str.slice(1).split('').reverse().join('');
}
console.log(reverseExceptFirst('neeshu'));
let str2121 = "Neeshu kumar";
let result2211 = str2121
  .split(" ")
  .map(word => word[0] + word.slice(1).split("").reverse().join(""))
  .join(" ");
console.log(result2211);





//🟢 3️⃣ STRING – VOWELS / CONSONANTS
/*
🟢 4️⃣ VOWEL / CONSONANT COUNT
🏷 TAG: MEMBERSHIP_CHECK
🧠 PATTERN:
"aeiou".includes(ch)*/

console.log("count vowels==>")
let str3 = "automation neeshu as well as kumar";
let count = 0;
let consonants = 0;
for (let ch of str3) {
  if ("aeiou".includes(ch)) count++;
  else if (ch !== " ") consonants++;
}
console.log("count of vowels:", count, "count of consonants:", consonants);
//🟢 4️⃣ STRING – HASHMAP FAMILY
//Character frequen
/*
🟢 5️⃣ CHARACTER FREQUENCY
🏷 TAG: HASHMAP_FREQUENCY
🧠 CORE TEMPLATE ⭐
map[ch] = (map[ch] || 0) + 1
🎯 USE:
char count
number count
most frequent
fruits count
*/


console.log("Count characters frequency===>")
let str4 = "banana";
let map = {};
for (let ch of str4) {
  map[ch] = (map[ch] || 0) + 1;
}
console.log(map);
//First non-repeating
for(let ch in map){
   if(map[ch] === 1){
      console.log(ch);
      break;
   }
}
console.log("First non-repeating character==>");


// 🟢 6️⃣ FIRST NON-REPEATING
// 🏷 TAG: FREQUENCY + SECOND_PASS
// 🧠 PATTERN:
// 1️⃣ build frequency map
// 2️⃣ loop again → check frequency
// 🎯 USE:
// first non-repeating character
// first non-repeating word
// first non-repeating number
// */

let str1111 = "swiss";
let map1 = {};
for (let ch of str1111) map1[ch] = (map1[ch] || 0) + 1;
for (let ch of str1111) {
  if (map1[ch] === 1) {
    console.log(ch);
    break;
  }
}
//🟢 5️⃣ STRING – REMOVE DUPLICATES
// 🟢 REMOVE DUPLICATES
// 🏷 TAG: SEEN_SET_PATTERN
// 🧠 PATTERN:
// if (!seen.has(ch))
// 🎯 USE:
// string unique
// array unique 

let abc = 'aabbccddee';
let uniqueArr1 = '';  
for (let ch of abc) {
  if (!uniqueArr1.includes(ch)) uniqueArr1 += ch;
}
console.log(uniqueArr1);

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
// //🟢 6️⃣ STRING – ANAGRAM FAMILY
// 🟢  ANAGRAM FAMILY
// 🏷 TAG: SORT_AND_COMPARE
// 🧠 PATTERN:
// word.split('').sort().join('')
// 🎯 USE:
// anagram check
// group anagram
// 🟢 9️⃣ GROUPING
// 🏷 TAG: HASHMAP_GROUPING
// 🧠 PATTERN:
// map[key] = map[key] || []
// map[key].push(value)

console.log("anagram check==>");
let a = "listen";
let b = "silent";
let s1 = a.split("").sort().join("");
let s2 = b.split("").sort().join("");
console.log(s1 === s2);
console.log("Group Anagrams==> ")
let arr1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
let anagramMap = {};
for (let word of arr1) {
  let sorted = word.split("").sort().join("");
  if (!anagramMap[sorted]) anagramMap[sorted] = [];
  anagramMap[sorted].push(word);
}
console.log(Object.values(anagramMap));
//🟡 7️⃣ COMMON (STRING + ARRAY SAME CONCEPT)
Frequency
const  fruits = ['Apple', 'Orange', 'Mango','Apple', 'Orange', 'Apple'];
const countMap = {};
for (let fruit of fruits) {
  countMap[fruit] = (countMap[fruit] || 0) + 1;
}
console.log(countMap);
//🟠 8️⃣ ARRAY – BASIC
let ar222= [3, 7, 1, 9];
let max = ar222[0];
for (let n of ar222) if (n > max) max = n;
console.log(max);
let min = ar222[0];
for (let n of ar222) if (n < min) min = n;
console.log(min);
//🟠 9️⃣ ARRAY – DUPLICATES / UNIQUE
let arr12 = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr = [];
for (let n of arr12) {
  if (!uniqueArr.includes(n)) uniqueArr.push(n);
}
console.log(uniqueArr);
//🟠 🔟 ARRAY – SECOND HIGHEST / SECOND LOWEST
let arr = [5, 9, 2, 7];
let des = arr.sort((a, b) => b - a);
let asc = arr.sort((a, b) => a - b);
let seclowest = asc.find(num => num > asc[0]);
let secondHighest1 = des.find(num => num < des[0]);
console.log(secondHighest1);
//🔵 1️⃣1️⃣ ARRAY – MOST FREQUENT
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
//🟣 1️⃣2️⃣ NUMBER BASED
console.log("Factorial of a given number==>");
let num = 5;
let factorial = 1;
for (let i = 1; i <= num; i++) factorial *= i;
console.log(factorial);
console.log("Check if a number is Prime==>");
let num1 = 17;
let isPrime = true;
if (num1 <= 1) isPrime = false;
for (let i = 2; i <= Math.sqrt(num1); i++) {
  if (num1 % i === 0) {
    isPrime = false;
    break;
  }
}
console.log(isPrime);
//🔴 1️⃣3️⃣ HARD (LAST ME PADHNE WALE)
console.log("Find longest substring without repeating characters==>");
let str11121111 = "abcabcbb";
let longest = "";
let current = "";
for (let ch of str11121111) {
  if (!current.includes(ch)) current += ch;
  else {
    if (current.length > longest.length) longest = current;
    current = current.slice(current.indexOf(ch) + 1) + ch;
  }
}
if (current.length > longest.length) longest = current;
console.log(longest);


//🟠 8️⃣ ARRAY – BASIC (MAX / MIN / SUM / AVG)
console.log("**************************************** Interview Questions *");
console.log("ARRAY BASED QUESTIONS==>");
let ar22221= [3, 7, 1, 9];
let max21 = ar22221[0];
for (let n of ar22221) {
  if (n > max21) 
    max21 = n;
}
console.log(max);

console.log('Find min number');
let min111 = ar222[0];
for (let n of ar222) {
  if (n < min111) min111 = n;
}
console.log(min111);
console.log('Sum of array');
let sum = 0;
for (let n of arr) sum += n;
console.log(sum);

console.log('Average of array');
let avg = sum / ar222.length;
console.log(avg);


//🟠 9️⃣ ARRAY – DUPLICATES / UNIQUE
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


//🟠 🔟 ARRAY – SECOND HIGHEST / SECOND LOWEST
let arr22112 = [5, 9, 2, 7];
let des21 = arr.sort((a, b) => b - a); // sort descending
let asc21 = arr22112.sort((a, b) => a - b); // sort ascending
let seclowes21t = asc21.find(num => num > asc21[0]); // first number greater than min
let secondHighest211 = des21.find(num => num < des21[0]); // first number smaller than max
console.log(secondHighest211);
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
//🟠 1️⃣1️⃣ ARRAY – MOST FREQUENT
console.log("Most frequent element in array====>")
let arr011 = [1, 2, 3, 2, 4, 2, 5];
let map111 = {};
for (let n of arr011) {
  map111[n] = (map111[n] || 0) + 1;
}
let maxCount11 = 0;
let mostFrequentElement11 = null;
for (let n in map111) {
  if (map111[n] > maxCount11) {
    maxCount11 = map111[n];
    mostFrequentElement11 = n;
  }
}
console.log("Most frequent element is:", mostFrequentElement);
//🟠 1️⃣2️⃣ ARRAY – UNION / INTERSECTION / DIFFERENCE
console.log('Find common elements in two arrays');
let arr3 = [1, 2, 3, 4];
let arr4 = [3, 4, 5, 6];
let set3 = new Set(arr3);
let common = [];
for (let n of arr4) {
  if (set3.has(n)) 
    common.push(n);
}

let common1 = [...new Set(arr4.filter(n => set3.has(n)))];
let count1 = arr4.filter(n => set3.has(n)).length;

let a111 = [1,2,3];
let b111 = [3,4,5];
let union = [...new Set([...a111, ...b111])];
console.log(union);

let av = [1,2,3,4];
let bv = [3,4,5];
let setB = new Set(bv);
let diff = av.filter(n => !setB.has(n));
console.log(diff);

console.log(common);
//🟠 1️⃣3️⃣ ARRAY – ROTATE / REVERSE / SEARCH / SORT
console.log('Reverse an array');
let arr6 = [1, 2, 3, 4, 5];
let revArr = [];
for (let i = arr6.length - 1; i >= 0; i--) {
  revArr.push(arr6[i]);
}
console.log(revArr);
console.log('Rotate an array to the left by d positions');
let arr7 = [1, 2, 3, 4, 5];
let d = 2;
let rotated = arr7.slice(d).concat(arr7.slice(0, d));
console.log(rotated);
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
//🟣 1️⃣4️⃣ NUMBER PROGRAMS
console.log("Factorial of a given number==>");
let num11 = 5;
let factorial1 = 1;
for (let i = 1; i <= num11; i++) {
  factorial1 *= i;
}
console.log(factorial);
console.log("Check if a number is Prime==>");
let num111 = 17;
let isPrime1 = true;
if (num111 <= 1) 
  isPrime1 = false;
for (let i = 2; i <= Math.sqrt(num111); i++) {
  if (num111 % i === 0) {
    isPrime1 = false;
    break;
  }
}
console.log(isPrime);
console.log("Check if a number is Armstrong number==>");
let numArmstrong = 153;
let sumArmstrong = 0;
let temp = numArmstrong;
while (temp > 0) {
  let digit = temp % 10;
  sumArmstrong += digit ** 3;
  temp = Math.floor(temp / 10);
}
console.log(sumArmstrong === numArmstrong);
//🟣 1️⃣5️⃣ OBJECT / MAP
console.log("Remove the second highest value from an object / Map==>");
let obj = { a: 10, b: 20, c: 30, d: 40 };
let values = Object.values(obj);
values.sort((x, y) => y - x);
let secondHighest = values[1];
for (let key in obj) {
  if (obj[key] === secondHighest) {
    delete obj[key];
    break;
  }
}
console.log(obj);
//🟣 1️⃣6️⃣ PATTERN
console.log("Print star pattern==>");
let rows = 5;
for (let i = 1; i <= rows; i++) {
  console.log("*".repeat(i));
}
console.log("Print number pattern==>");
for (let i = 1; i <= rows; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += j + " ";
  }
  console.log(line.trim());
}
console.log("Print character pattern==>");
let charCode = 65;
for (let i = 1; i <= rows; i++) {
  let line = "";
  for (let j = 0; j < i; j++) {
    line += String.fromCharCode(charCode + j) + " ";
  }
  console.log(line.trim());
}
// 🏁 FINAL STATUS (NOW TRUE ✅)

// ✅ tumhara har code present
// ✅ kuch delete nahi
// ✅ same variable
// ✅ same console
// ✅ same duplicate
// ✅ concept wise arranged