/* ALGORITHMS */

/**
 * BINARY SEARCH
 *
 * @param {number[]} nums
 * @param {number} target
 * @returns {number} index of target
 */
const binarySearch = (nums, target) => {
  let leftIndex = 0,
    rightIndex = nums.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (nums[middleIndex] === target) {
      return middleIndex;
    } else {
      if (nums[middleIndex] < target) {
        leftIndex = middleIndex + 1;
      } else {
        rightIndex = middleIndex - 1;
      }
    }
  }

  return -1;
};

// console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9)); // 4
