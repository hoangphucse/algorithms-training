// Given a 0-indexed integer array nums, find the leftmost middleIndex (i.e., the smallest amongst all the possible ones).

// A middleIndex is an index where nums[0] + nums[1] + ... + nums[middleIndex-1] == nums[middleIndex+1] + nums[middleIndex+2] + ... + nums[nums.length-1].

// If middleIndex == 0, the left side sum is considered to be 0. Similarly, if middleIndex == nums.length - 1, the right side sum is considered to be 0.

// Return the leftmost middleIndex that satisfies the condition, or -1 if there is no such index.

// Example 1:

// Input: nums = [2,3,-1,8,4]
// Output: 3
// Explanation: The sum of the numbers before index 3 is: 2 + 3 + -1 = 4
// The sum of the numbers after index 3 is: 4 = 4
// Example 2:

// Input: nums = [1,-1,4]
// Output: 2
// Explanation: The sum of the numbers before index 2 is: 1 + -1 = 0
// The sum of the numbers after index 2 is: 0
// Example 3:

// Input: nums = [2,5]
// Output: -1
// Explanation: There is no valid middleIndex.

/**
 * @param {number[]} nums
 * @return {number}
 */

// ! SOLUTION 1: O(n) = n^2
var findMiddleIndex1 = function (nums) {
  let result = -1;

  for (let i = 0; i < nums.length; i++) {
    let totalLeft = 0;
    let totalRight = 0;

    if (i != 0) {
      totalLeft = nums.reduce((acc, num, lIndex) => {
        if (lIndex < i) return acc + num;
        return acc;
      }, 0);
    }

    if (i !== nums.length - 1) {
      totalRight = nums.reduce((acc, num, rIndex) => {
        if (rIndex > i) return acc + num;
        return acc;
      }, 0);
    }

    if (totalLeft == totalRight) {
      result = i;
      break;
    }
  }

  return result;
};

// ! SOLUTION 2: O(n) =

var findMiddleIndex2 = function (nums) {
  let result = -1;

  const total = nums.reduce((acc, num) => acc + num, 0);
  let totalLeft = 0;
  let totalRight = 0;

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];

    if (i !== 0) {
      totalLeft += nums[i - 1];
    }
    totalRight = total - totalLeft - currentNum;

    if (totalRight === totalLeft) {
      result = i;
      break;
    }
  }

  return result;
};

let input1 = [2, 3, -1, 8, 4];
let input2 = [1, -1, 4];
let input3 = [2, 5];
const result = findMiddleIndex2(input3);
console.log({ result });
