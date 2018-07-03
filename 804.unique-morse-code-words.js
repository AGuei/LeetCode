/* eslint no-irregular-whitespace: ["error", { "skipComments": true }], no-unused-vars: 0 */

/*
 * [822] Unique Morse Code Words
 *
 * https://leetcode.com/problems/unique-morse-code-words/description/
 *
 * algorithms
 * Easy (73.10%)
 * Total Accepted:    20.1K
 * Total Submissions: 27.5K
 * Testcase Example:  '["gin", "zen", "gig", "msg"]'
 *
 * International Morse Code defines a standard encoding where each letter is
 * mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b"
 * maps to "-...", "c" maps to "-.-.", and so on.
 *
 * For convenience, the full table for the 26 letters of the English alphabet
 * is given below:
 *
 *
 *
 * [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
 *
 * Now, given a list of words, each word can be written as a concatenation of
 * the Morse code of each letter. For example, "cab" can be written as
 * "-.-.-....-", (which is the concatenation "-.-." + "-..." + ".-"). We'll
 * call such a concatenation, the transformation of a word.
 *
 * Return the number of different transformations among all words we have.
 *
 *
 * Example:
 * Input: words = ["gin", "zen", "gig", "msg"]
 * Output: 2
 * Explanation:
 * The transformation of each word is:
 * "gin" -> "--...-."
 * "zen" -> "--...-."
 * "gig" -> "--...--."
 * "msg" -> "--...--."
 *
 * There are 2 different transformations, "--...-." and "--...--.".
 *
 *
 *
 *
 * Note:
 *
 *
 * The length of words will be at most 100.
 * Each words[i] will have length in range [1, 12].
 * ⁠   words[i] will only consist of lowercase letters.
 *
 */
/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  let eng = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let morse = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..'];
  let patterns = {};
  words.map(ele => ele.split('').map(char => morse[eng.indexOf(char)])
    .reduce((previousValue, currentValue) => previousValue + currentValue))
    .forEach(pa => {
      patterns[pa] = true;
    });
  return Object.keys(patterns).length;
};
