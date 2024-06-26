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
    let dir = {}
    for (index in nums) {
        let value = nums[index]
        let valueInDir = (target - value) in dir
        if (valueInDir) {
            return [dir[target - value], index]
        } else {
            dir[value] = index
        }
    }
    console.log(dir)

};
// @lc code=end
console.log(twoSum([2, 7, 11, 15], 9))


/*
    input :  [2, 7, 11, 15]
    targe : 9
    empty dir {}

    1 iter 
                if target - 2 in dir 
                not 
                add in dir
    2 iter  
                if target - 7 in dir
                yes return [current intex , number[target-7]]

*/