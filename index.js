/**
 * '1523. Count Odd Numbers in an Interval Range'
 *
 * Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).
 * Input: low = 3, high = 7
 * Output: 3
 * Explanation: The odd numbers between 3 and 7 are [3,5,7].
 *
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

// console.log(countOdds(3, 7)) -> 3

/**
 * '1491. Average Salary Excluding the Minimum and Maximum Salary'
 *
 * You are given an array of unique integers salary where salary[i] is the salary of the ith employee.
 * Return the average salary of employees excluding the minimum and maximum salary.
 * Answers within 10-5 of the actual answer will be accepted.
 *
 * Input: salary = [4000,3000,1000,2000]
 * Output: 2500.00000
 * Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
 * Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500
 *
 * @param {number[]} salary
 * @return {number}
 */
const average = function (salary) {
  const min = Math.min(...salary);
  const max = Math.max(...salary);

  let result = salary.filter((item) => item !== min && item !== max);

  return result.reduce((item, index) => item + index) / result.length;
};

// console.log(average([6000,5000,4000,3000,2000,1000]))

/**
 * '1281. Subtract the Product and Sum of Digits of an Integer'
 *
 * Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 *
 * Example 1:
 * Input: n = 234
 * Output: 15
 * Explanation:
 * Product of digits = 2 * 3 * 4 = 24
 * Sum of digits = 2 + 3 + 4 = 9
 * Result = 24 - 9 = 15
 *
 * @param {number} n
 * @returns {number}
 */
const subtractProductAndSum = (n) => {
  let array = String(n).split('').map(Number),
    sum = 0,
    pro = 1;

  array.forEach((item) => {
    sum += item;
    pro *= item;
  });

  return pro - sum;
};

// console.log(subtractProductAndSum(234)); // -> 15

/**
 * 191. Number of 1 Bits
 *
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = function (n) {
  return n.toString(2).split('0').join('').length;
};

// console.log(hammingWeight(01000001011)) // -> 4

/**
 * 709. To Lower Case
 *
 * Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.
 * @param s {string}
 */
const toLowerCase = function (s) {
  return s.toLowerCase();
};

// console.log(toLowerCase('WellCOME to The cLUB, Body!'))

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function (nums) {
  let result = [];
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    nums[i] = sum;
  }

  return nums;
};

// console.log(runningSum([1, 2, 3, 4])); // 1, 3, 6, 10
