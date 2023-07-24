/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hasMap = {};

  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    const needValue = target - currentNumber;
    const index2 = hasMap[needValue];
    if (index2 != null) {
      return [index2, i];
    } else {
      hasMap[currentNumber] = i;
    }
  }
};

console.log(twoSum([3, 3], 6));
