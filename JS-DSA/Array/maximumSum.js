function maximumSum(A, K) {
  A.sort((a, b) => a - b);
  let i = 0,
    j = A.length - 1,
    maxSum = -1;
  while (i < j) {
    let s = A[i] + A[j];
    if (s >= K) {
      j--;
    } else {
      maxSum = Math.max(maxSum, s);
      i++;
    }
  }
  return maxSum;
}

maximumSum([34, 23, 1, 24, 75, 33, 54, 8], 60);
console.log(maximumSum([34, 23, 1, 24, 75, 33, 54, 8], 60));
