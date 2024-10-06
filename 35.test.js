import searchInsert from "./35.search-insert-position"

let Input = { nums: [1, 3, 5, 6], target: 5 }
describe('35. Search Insert Position Test', () => {
    test('should return 2 when input is [1,3,5,6], 5', () => {
        expect(searchInsert(Input.nums, Input.target)).toBe(2)
    })

    test('should return 1 when input is [1,3,5,6], 2', () => {
        expect(searchInsert([1, 3, 5, 6], 2)).toBe(1)
    })

    test('should return 0 when input is [1,3,5,6], 0', () => {
        expect(searchInsert([1, 3, 5, 6], 0)).toBe(0)
    })
})

