/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  let insertPos = 0;
  for (const element of nums) {
    if (element != 0) {
      nums[insertPos] = element;
      insertPos++;
    }
  }

  while (insertPos < nums.length) {
    nums[insertPos] = 0;
    insertPos++;
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0]));
