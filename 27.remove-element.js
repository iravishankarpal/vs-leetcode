/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let index = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[index] = nums[i];
            index++;
        }
    }
    console.log(nums)
    return index;
};
// @lc code=end

removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)
/* 

Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
              [0,1,2,3,4,5,6,7,8] 
Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output : 5 , nums = [0,1,3,0,4]

1. 
    index 0
    i = 0 
    nums[i] = 0 is not 2 so will add to array and update the index
2.  
    index = 1
    i = 1
    nums [1] = 1 not 2 so will add to array and update the index
3. 
    index = 2
    i = 2
    nums[2] = 2 so will not add to array and not update the count
    [0,1,2]
4   
    index = 2
    i = 3
    nums[2] = 2 so will not add to array and not update the count
    [0,1,2,2]
5   
    index = 2
    i = 4
    nums[4] = 3 so will add to array and update the index
    [0,1,3,2]
6   
    index = 3
    i = 5
    nums[5] = 0 so will add to array and update the index
    [0,1,3,0]
7   
    index = 4
    i = 6
    nums[6] = 4 so will add to array and update the index
    [0,1,3,0,4]
8   
    index = 5
    i = 8
    nums[8] = 2 so will add to array and update the index
    [0,1,3,0,4]


nums =  [0, 1, 3, 0, 4, 0, 4, 2]
K = 2

*/