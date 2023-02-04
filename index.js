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
        if (i % 2 !== 0) {
        result++;
        }
    }

    return result;
};

// console.log(countOdds(3, 7))

// 1491. Average Salary Excluding the Minimum and Maximum Salary

// You are given an array of unique integers salary where salary[i] is the salary of the ith employee.
// Return the average salary of employees excluding the minimum and maximum salary.
// Answers within 10-5 of the actual answer will be accepted.

// Input: salary = [4000,3000,1000,2000]
// Output: 2500.00000
// Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
//     Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500

/**
 * @param {number[]} salary
 * @return {number}
 */
const average = function (salary) {
    const min = Math.min(...salary);
    const max = Math.max(...salary);

    let result = salary.filter((item) => item !== min && item !== max);

    return result.reduce((item, index) => (item + index)) / result.length
};

console.log(average([6000,5000,4000,3000,2000,1000]))