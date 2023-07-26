const intersect = function (nums1, nums2) {
  if (nums1.length < nums2.length) {
    return findIterSection(nums1, nums2);
  }
  return findIterSection(nums2, nums1);
};

const findIterSection = (sortArr, longArr) => {
  const result = [];
  sortArr.forEach((element) => {
    if (longArr.includes(element)) {
      result.push(element);
      longArr.splice(longArr.indexOf(element), 1);
    }
  });

  return result;
};

console.log(intersect([1, 2], [1, 1]));
