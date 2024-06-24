// 1805. Number of Different Integers in a String

// You are given a string word that consists of digits and lowercase English letters.

// You will replace every non-digit character with a space. For example, "a123bc34d8ef34" will become " 123  34 8  34". Notice that you are left with some integers that are separated by at least one space: "123", "34", "8", and "34".

// Return the number of different integers after performing the replacement operations on word.

// Two integers are considered different if their decimal representations without any leading zeros are different.

// Example 1:

// Input: word = "a123bc34d8ef34"
// Output: 3
// Explanation: The three different integers are "123", "34", and "8". Notice that "34" is only counted once.
// Example 2:

// Input: word = "leet1234code234"
// Output: 2
// Example 3:

// Input: word = "a1b01c001"
// Output: 1
// Explanation: The three integers "1", "01", and "001" all represent the same integer because
// the leading zeros are ignored when comparing their decimal values.

/**
 * @param {string} word
 * @return {number}
 */
var Solution_1__numDifferentIntegers = function (word) {
  return new Set(
    word
      .replaceAll(/[a-zA-Z]+/g, ' ')
      .trim()
      .split(' ')
      .reduce((acc, digitString) => {
        if (digitString) {
          let newNum = digitString * 1;
          console.log({ newNum });
          acc.push(isFinite(newNum) ? `${newNum}` : digitString);
        }
        return acc;
      }, [])
  ).size;
};

var Solution_2__numDifferentIntegers = function (word) {
  const matches = word.match(/\d+/g) || [];
  const uniqueIntegers = new Set();
  if (matches.length) {
    for (const match of matches) {
      const newNum = match * 1;
      uniqueIntegers.add(isFinite(newNum) ? `${newNum}` : match);
    }
  }

  return uniqueIntegers.size;
};
const input1 = 'a123bc34d8ef34';
const input2 = 'leet1234code234';
const input3 = 'a1b01c001';
const input4 = 'u';

console.log(Solution_1__numDifferentIntegers(input3));
