for(let i=1;i<=4;i++){
    let row="";
    for(let j=1;j<=i;j++){
        row += "*";
    }
    console.log(row);
}



for(let i=1;i<=3;i++){
    let space=" ".repeat(3-i);
    let star="*".repeat(2*i-1);
    console.log(space+star);
}



for(let i=1;i<=4;i++){
    let row="";
    for(let j=1;j<=i;j++){
        row+=j;
    }
    console.log(row);
}


let arr=[1,2,3,4];

for(let i=0,j=arr.length-1;i<j;i++,j--){
    [arr[i],arr[j]]=[arr[j],arr[i]];
}
console.log(arr);

let max=arr[0];
for(let n of arr){
    if(n>max) max=n;
}
console.log(max);

let arr1=[1,2,2,3];
let unique=[...new Set(arr1)];
console.log(unique);

let count={};
for(let n of arr){
    count[n]=(count[n]||0)+1;
}
console.log(count);




let first=-Infinity, second=-Infinity;

for(let n of arr){
    if(n>first){
        second=first;
        first=n;
    }
    else if(n>second && n!==first){
        second=n;
    }
}


let str="hello";
let rev=str.split("").reverse().join("");
console.log(rev);

let s="madam";
console.log(s===s.split("").reverse().join(""));

let str1 = "hello world";
let count1=0;
for(let ch of str1.toLowerCase()){
    if("aeiou".includes(ch)) count1++;
}
console.log(count1);

let str2="hello world";
let count2=0;
for(let ch of str2.toLowerCase()){
    if(!"aeiou".includes(ch) && ch!==" ") count2++;
}
console.log(count2);

let str3="hello world";
let count3=0;
for(let ch of str3.toLowerCase()){
    if(ch!==" ") count3++;
}
console.log(count3);

let str4="hello world";
let count4=0;
for(let ch of str4.toLowerCase()){
    if(ch===" ") count4++;
}
console.log(count4);

let str5="hello world";
let count5=0;
for(let ch of str5.toLowerCase()){
    if(ch==="l") count5++;
}
console.log(count5);
let str7="hello world";
str=str7.replace(/\s/g,"");
console.log(str);



function isAnagram(a,b){
    return a.split('').sort().join('') === b.split('').sort().join('');
}
console.log(isAnagram("listen","silent"));

let a=0,b=1;

for(let i=0;i<10;i++){
    console.log(a);
    [a,b]=[b,a+b];
}


let n = 5;
let fact = 1;

while (n > 0) {
  fact *= n;
  n--;
}
console.log("Factorial =", fact);


let nm = 6;
let c = 0, d = 1;

while (nm > 0) {
  process.stdout.write(c + " ");
  let e = c + d;
  c = d;
  d = e;
  nm--;
}

