/* eslint no-irregular-whitespace: ["error", { "skipComments": true }], no-unused-vars: 0 */
/*
 * [882] Peak Index in a Mountain Array
 *
 * https://leetcode.com/problems/peak-index-in-a-mountain-array/description/
 *
 * algorithms
 * Easy (69.29%)
 * Total Accepted:    9.1K
 * Total Submissions: 13.2K
 * Testcase Example:  '[0,1,0]'
 *
 * Let's call an array A a mountain if the following properties hold:
 *
 *
 * A.length >= 3
 * There exists some 0 < i < A.length - 1 such that A[0] < A[1] < ... A[i-1] <
 * A[i] > A[i+1] > ... > A[A.length - 1]
 *
 *
 * Given an array that is definitely a mountain, return any i such that A[0] <
 * A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1].
 *
 * Example 1:
 *
 *
 * Input: [0,1,0]
 * Output: 1
 *
 *
 *
 * Example 2:
 *
 *
 * Input: [0,2,1,0]
 * Output: 1
 *
 *
 * Note:
 *
 *
 * 3 <= A.length <= 10000
 * 0 <= A[i] <= 10^6
 * A is a mountain, as defined above.
 *
 *
 */
/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function (A) {
  let leftIndex = 0;
  let rightIndex = A.length - 1;
  while (leftIndex < rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (A[middleIndex] > A[middleIndex - 1] && A[middleIndex] > A[middleIndex + 1]) {
      return middleIndex;
    } else if (A[middleIndex] < A[middleIndex - 1]) {
      rightIndex = middleIndex;
    } else {
      leftIndex = middleIndex;
    }
  }
  // for (let i = 1; i < A.length; ++i) {
  //   if (A[i - 1] < A[i]) {
  //     continue;
  //   } else {
  //     return i - 1;
  //   }
  // }
};
