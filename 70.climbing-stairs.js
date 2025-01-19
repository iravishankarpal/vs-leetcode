/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
function climbStairs(n) {
    if (n <= 2) {
        return n;
    }
    let first = 1;
    let second = 2;
    let num = 0;
    for (let i = 3; i <= n; i++) {
        num = first + second;
        first = second;
        second = num;
    }
    return num;
}
console.log(climbStairs(6));
// @lc code=end
