const generateTriangle = (numRows) => {
  let result = [];

  // check first two condition when numrows bellow 2

  if (numRows >= 1) {
    result.push([1]);
  }

  if (numRows >= 2) {
    result.push([1, 1]);
  }

  for (let i = 2; i < numRows; i++) {
    // sum corresponding two triangle and put that in appropriate position

    let first = 1;
    let last = 1;

    let prevArr = result[i - 1];

    if (prevArr.length === 2) {
      result.push([first, first + last, last]);
    } else {
      let left = 0;
      let right = 1;

      let colArr = [];
      while (right < prevArr.length) {
        colArr.push(prevArr[left] + prevArr[right]);

        left++;
        right++;
      }

      result.push([first, ...colArr, last]);
    }
  }
  return result;
};

console.log(generateTriangle(5));
