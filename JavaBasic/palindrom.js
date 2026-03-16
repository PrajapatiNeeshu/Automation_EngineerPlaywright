let num = 121;
let temp = num;
let rev = 0;

while (temp > 0) {
    rev = rev * 10 + (temp % 10); // get last digit and add to result
    temp = Math.floor(temp / 10);// remove last digit
}
console.log(num === rev);
let num1 = 121;
let rev1 = 0;

for (let temp = num1; temp > 0; temp = Math.floor(temp / 10)) {
    rev1 = rev1 * 10 + (temp % 10);
}

console.log(num1 === rev1);
let str = "madam";
let revstr = "";
for (let i = str.length - 1; i >= 0; i--) {
    revstr += str[i];
}
console.log(str === revstr);


const str1 = 'NITIN';
let rev12 = '';
for (let i = str1.length - 1; i >= 0; i--) {
    rev12 += str1[i];
    if (str1[i] !== str1[str1.length - 1 - i]) {
        break;
    }
    else {console.log(str1 === rev12);
        console.log("this is palindrome");
    }
}
