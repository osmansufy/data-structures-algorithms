const digits = [9, 9, 9];

const plusOne = function (digits) {
  let remaining = 1;
  const result = [];
  for (let i = digits.length - 1; i >= 0; i--) {
    let currentValue = digits[i];
    currentValue += remaining;
    result.unshift(currentValue % 10);
    remaining = Math.floor(currentValue / 10);
  }
  if (remaining == 1) {
    result.unshift(1);
  }
  return result;
};

console.log(plusOne([1, 2, 3]));
