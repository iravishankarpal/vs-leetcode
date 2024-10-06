import twoSum from './1.two-sum'

describe('twoSum', () => {
    test('should return [0, 2] when input is [2, 7, 11, 15], 9', () => {
        let value = twoSum([2, 7, 11, 15], 9)
        expect(value).toEqual([0, 1])
    })
    test('should return [1, 2] when input is [3, 2, 4], 6', () => {
        expect(twoSum([3, 2, 4], 6)).toEqual([1, 2])
    })
})


