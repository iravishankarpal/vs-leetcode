/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Find the Index of the First Occurrence in a String
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle.length > haystack.length) return -1
    if (haystack.includes(needle)) {
        for (let i = 0; i < haystack.length; i++) {
            if (haystack[i] === needle[0]) {
                let sliceStck = haystack.slice(i, i + needle.length)
                if (sliceStck === needle) {
                    return i
                }
            }
        }

    } else {
        return -1
    }
};
// @lc code=end
console.log(strStr("sadbutsad", "sad"))

/* 
Input: haystack = "sadbutsad", needle = "sad"
Output: 0

Input: haystack = "leetcode", needle = "leeto"
Output: -1

























*/


