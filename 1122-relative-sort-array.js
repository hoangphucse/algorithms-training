// 1122. Relative Sort Array

// Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

// Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.

// Example 1:

// Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
// Output: [2,2,2,1,4,3,3,9,6,7,19]
// Example 2:

// Input: arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
// Output: [22,28,8,6,17,44]

// Constraints:

// 1 <= arr1.length, arr2.length <= 1000
// 0 <= arr1[i], arr2[i] <= 1000
// All the elements of arr2 are distinct.
// Each arr2[i] is in arr1.

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
// var relativeSortArray = function (arr1, arr2) {
//   const mapDistinctNum = new Map(arr2.map((num, index) => [num, index]));
//   let tempRelativeSortNums = new Array(arr2.length);
//   const remainNums = [];

//   arr1.forEach((num) => {
//     if (mapDistinctNum.has(num)) {
//       if (typeof tempRelativeSortNums[mapDistinctNum.get(num)] !== 'object') {
//         tempRelativeSortNums[mapDistinctNum.get(num)] = [];
//       }
//       tempRelativeSortNums[mapDistinctNum.get(num)].push(num);
//     } else {
//       remainNums.push(num);
//     }
//   });

//   return tempRelativeSortNums.flat().concat(remainNums.sort((a, b) => a - b));
// };


/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    const mapDistinctNum = new Map(arr2.map((num, index) => [num, index]));
    const tempRelativeSortNums = Array(arr2.length).fill().map(() => []);
    const remainNums = [];
  
    arr1.forEach((num) => {
      if (mapDistinctNum.has(num)) {
        tempRelativeSortNums[mapDistinctNum.get(num)].push(num);
      } else {
        remainNums.push(num);
      }
    });
  
    const sortedRemainNums = remainNums.sort((a, b) => a - b);
    const result = tempRelativeSortNums.flat().concat(sortedRemainNums);
  
    return result;
  };

const input1 = [
  [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
  [2, 1, 4, 3, 9, 6],
];

const input2 = [
  [28, 6, 22, 8, 44, 17],
  [22, 28, 8, 6],
];

console.log(relativeSortArray(...input1));
