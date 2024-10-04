/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {

    let val = s.trim()
    let splitValue = val.split(" ")
    let endValue = splitValue[splitValue.length - 1]
    return endValue.length
};
console.log(lengthOfLastWord("Hello World"))

// @lc code=end


