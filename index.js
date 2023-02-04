// 1523. Count Odd Numbers in an Interval Range

// Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).
// Input: low = 3, high = 7
// Output: 3
// Explanation: The odd numbers between 3 and 7 are [3,5,7].

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const countOdds = function (low, high) {
    let result = 0;

    for (let i = low; i <= high; i++) {
        if (i % 2 != 0) {
        result++;
        }
    }

    return result;
};

console.log(countOdds(3, 7))