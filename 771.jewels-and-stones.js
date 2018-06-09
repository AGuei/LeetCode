/*
 * [782] Jewels and Stones
 *
 * https://leetcode.com/problems/jewels-and-stones/description/
 *
 * algorithms
 * Easy (81.94%)
 * Total Accepted:    58.9K
 * Total Submissions: 71.9K
 * Testcase Example:  '"aA"\n"aAAbbbb"'
 *
 * You're given strings J representing the types of stones that are jewels, and
 * S representing the stones you have. Each character in S is a type of stone
 * you have. You want to know how many of the stones you have are also
 * jewels.
 *
 * The letters in J are guaranteed distinct, and all characters in J and S are
 * letters. Letters are case sensitive, so "a" is considered a different type
 * of stone from "A".
 *
 * Example 1:
 *
 *
 * Input: J = "aA", S = "aAAbbbb"
 * Output: 3
 *
 *
 * Example 2:
 *
 *
 * Input: J = "z", S = "ZZ"
 * Output: 0
 *
 *
 * Note:
 *
 *
 * S and J will consist of letters and have length at most 50.
 * The characters in J are distinct.
 *
 */
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  let numJewels = 0;
  let sLength = S.length;
  for (let i = 0, len = J.length; i < len; i++) {
    for (let j = 0; j < sLength; j++) {
      if (J[i] === S[j]) {
        numJewels++;
      }
    }
  }

  return numJewels;
};
