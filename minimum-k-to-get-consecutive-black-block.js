// 2379. Minimum Recolors to Get K Consecutive Black Blocks

// You are given a 0-indexed string blocks of length n, where blocks[i] is either 'W' or 'B', representing the color of the ith block. The characters 'W' and 'B' denote the colors white and black, respectively.

// You are also given an integer k, which is the desired number of consecutive black blocks.

// In one operation, you can recolor a white block such that it becomes a black block.

// Return the minimum number of operations needed such that there is at least one occurrence of k consecutive black blocks.

// Example 1:

// Input: blocks = "WBBWWBBWBW", k = 7
// Output: 3
// Explanation:
// One way to achieve 7 consecutive black blocks is to recolor the 0th, 3rd, and 4th blocks
// so that blocks = "BBBBBBBWBW".
// It can be shown that there is no way to achieve 7 consecutive black blocks in less than 3 operations.
// Therefore, we return 3.
// Example 2:

// Input: blocks = "WBWBBBW", k = 2
// Output: 0
// Explanation:
// No changes need to be made, since 2 consecutive black blocks already exist.
// Therefore, we return 0.

// Constraints:

// n == blocks.length
// 1 <= n <= 100
// blocks[i] is either 'W' or 'B'.
// 1 <= k <= n

/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
  let firstBlackBlockIndex = null;
  let numberConsecutiveBlocks = 0;
  let numberAppearedWhiteBlockAfterFirstBlackBlock = 0;
  let result = 0;

  for (let index = 0; index < blocks.length; index++) {
    const block = blocks[index];

    // Counting or reset consecutive 'B' block
    if (block === 'B') numberConsecutiveBlocks += 1;
    else numberConsecutiveBlocks = 0;

    // Already k consecutive 'B' block
    if (numberConsecutiveBlocks === k) break;

    // Keep first time appear 'B' block
    if (firstBlackBlockIndex === null && block === 'B')
      firstBlackBlockIndex = index;

    // Counting number of 'W' block appear after the first time appear of 'B' block
    if (
      firstBlackBlockIndex !== null &&
      block === 'W' &&
      index <= firstBlackBlockIndex + k - 1
    ) {
      numberAppearedWhiteBlockAfterFirstBlackBlock++;
    }

    if (index === blocks.length - 1) {
      if (firstBlackBlockIndex === null) result = k;
      else result = numberAppearedWhiteBlockAfterFirstBlackBlock;
    }
  }

  console.log({
    firstBlackBlockIndex,
    numberAppearedWhiteBlockAfterFirstBlackBlock,
    numberConsecutiveBlocks,
  });
  console.log(result);

  return result;
};

const input1 = ['WBBWWBBWBW', 7]; // 3
const input2 = ['WBWBBBW', 2]; // 0
const input3 = ['W', 1]; // 1
const input4 = ['BWWWBB', 6]; //
const input5 = ['WBBWWWWBBWWBBBBWWBBWWBBBWWBBBWWWBWBWW', 15];
const input6 = ['WBWW', 2];
const result = minimumRecolors(...input6);

console.log({ result });
