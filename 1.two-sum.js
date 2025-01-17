/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let dir = {};
    for (let s in nums) {
        let value = nums[s];
        let valueInDir = target - value in dir;
        if (valueInDir) {
            let v = dir[target - value];
            return [parseInt(v), parseInt(s)];
        } else {
            dir[value] = s;
        }
    }
    console.log(dir);
};
// @lc code=end
export default twoSum;

console.log(twoSum([2, 7, 11, 15], 9));
