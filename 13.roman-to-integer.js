/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (inputString) {
    let dir = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000,
    };

    let sum = 0;
    for (let i = 0; i < inputString.length; i++) {
        let intration = i + 1;
        let l = inputString[i];
        let r = inputString[i + 1];
        let lv = dir[l];
        let rv = dir[r];
        if (lv > rv) {
            sum += lv;
        } else if (lv < rv) {
            sum += dir[l + r];
            i++;
        } else if (l) {
            sum += dir[l];
        }
    }
    return sum;
};
// @lc code=end
