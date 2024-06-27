// 242. Valid Anagram

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const sObject = s.split('').reduce((acc, sCharacter) => {
    if (!acc[sCharacter]) acc[sCharacter] = 1;
    else acc[sCharacter]++;
    return acc;
  }, {});

  let result = true;

  for (let i = 0; i < t.length; i++) {
    if (sObject[t[i]]) {
      sObject[t[i]]--;
      if (sObject[t[i]] === 0) {
        delete sObject[t[i]];
      }
    } else {
      result = false;
      break;
    }
  }

  return result;
};

const input1 = ['anagram', 'nagaram'];
const input2 = ['rat', 'cart'];
console.log(isAnagram(...input2));
