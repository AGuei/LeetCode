/* eslint no-irregular-whitespace: ["error", { "skipComments": true }], no-unused-vars: 0 */
/*
 * [657] Judge Route Circle
 *
 * https://leetcode.com/problems/judge-route-circle/description/
 *
 * algorithms
 * Easy (68.67%)
 * Total Accepted:    86.9K
 * Total Submissions: 126.5K
 * Testcase Example:  '"UD"'
 *
 *
 * Initially, there is a Robot at position (0, 0). Given a sequence of its
 * moves, judge if this robot makes a circle, which means it moves back to the
 * original place.
 *
 *
 *
 * The move sequence is represented by a string. And each move is represent by
 * a character. The valid robot moves are R (Right), L (Left), U (Up) and D
 * (down). The output should be true or false representing whether the robot
 * makes a circle.
 *
 *
 * Example 1:
 *
 * Input: "UD"
 * Output: true
 *
 *
 *
 * Example 2:
 *
 * Input: "LL"
 * Output: false
 *
 *
 */
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let m = moves.split('');
  let obj = {
    'U': {x: 0, y: 1},
    'D': {x: 0, y: -1},
    'R': {x: 1, y: 0},
    'L': {x: -1, y: 0},
    y: 0,
    x: 0
  };
  m.forEach(move => {
    obj.x += obj[move].x;
    obj.y += obj[move].y;
  });
  if (obj.x === 0 && obj.y === 0) {
    return true;
  } else {
    return false;
  }
};
