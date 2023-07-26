const reverse = function (x) {
  let isNegative = false;
  if (x < 0) {
    isNegative = true;
    x = Math.abs(x);
  }

  let sum = 0;
  while (x > 0) {
    sum = (x % 10) + sum * 10;

    x = Math.floor(x / 10);
  }
  if (sum > Math.pow(2, 31) - 1) return 0;
  return isNegative ? sum * -1 : sum;
};

console.log(reverse(1534236469));
