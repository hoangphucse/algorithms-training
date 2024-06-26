// 205. Isomorphic Strings

// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true

// Constraints:

// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const mapLiteralS = new Map();
  const mapLiteralT = new Map();
  const literalLength = s.length;

  for (let i = 0; i < literalLength; i++) {
    const literalS = s[i];
    const literalT = t[i];

    if (!mapLiteralS.has(literalS)) {
      mapLiteralS.set(literalS, i);
    }

    if (!mapLiteralT.has(literalT)) {
      mapLiteralT.set(literalT, i);
    }

    if (mapLiteralS.get(literalS) !== mapLiteralT.get(literalT)) {
      return false;
    }
  }
  console.log({ mapLiteralS, mapLiteralT });

  return true;
};

const input1 = ['egg', 'add'];
const input2 = ['foo', 'bar'];
const input3 = ['paper', 'title'];

console.log(isIsomorphic(...input3));
