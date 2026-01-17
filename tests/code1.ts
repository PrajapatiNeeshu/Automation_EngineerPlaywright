function reverseNumber(num:string){
    let result = '';
    for(let i=num.length-1;i>=0;i--){
        result += num[i];
    }
    console.log(result);
    return result;
}
console.log(reverseNumber('12345'));