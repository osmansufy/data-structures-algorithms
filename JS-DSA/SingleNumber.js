/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  const hasMap = {};
  nums.forEach((num) => {
    if (hasMap.hasOwnProperty(num)) {
      delete hasMap[num];
    } else {
      hasMap[num] = true;
    }
  });

  return Object.keys(hasMap)[0];
};

console.log(singleNumber([4, 1, 2, 1, 2]));
