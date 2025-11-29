


function removeDuplicatesManual(arr: number[]): number[] {
  let result: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
}
// Example
const nums2 = [5, 1, 2, 1, 3, 5];
console.log(removeDuplicatesManual(nums2)); 
// Output: [5, 1, 2, 3]
//let numbers = [1, 2, 2, 3, 3, 4];
//let unique = removeDuplicatesManual(numbers);
// unique will be [1, 2, 3, 4]