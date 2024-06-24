const merge = (nums1, m, nums2, n) => {
  let left = 0;
  let right = 0;
  let output = [];

  // loop until nums1 or nums2 length

  while (left < m && right < n) {
    if (nums1[left] < nums2[right]) {
      output.push(nums1[left]);
      left++;
    } else {
      output.push(nums2[right]);
      right++;
    }
  }

  console.log(left);
  console.log(right);

  if (m != left) {
    const remainArrLeft = nums1.slice(left, m);

    output = [...output, ...remainArrLeft];
  }
  if (n != right) {
    const remainArr = nums2.slice(right, n);
    output = [...output, ...remainArr];
  }

  return output;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
