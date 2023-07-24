const digits = [9, 9, 9];

const plusOne = function (digits) {
  let remaining = 1;
  const result = [];
  digits.reverse().forEach((element) => {
    element += remaining;
    remaining = Math.floor(element / 10);
    element = element % 10;
    result.unshift(element);
  });
  if (remaining === 1) {
    result.unshift(1);
  }

  return result;
};

console.log(plusOne([1, 2, 3]));
