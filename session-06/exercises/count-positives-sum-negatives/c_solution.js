function countPositivesSumNegatives(input) {
  let result = "";
  if (input !== null) {
    const nums = input.filter((number) => number >= 1);
    const count = nums.length;
    const negNums = input.filter((number) => number < 0);
    const sum = negNums.reduce((a, b) => a + b, 0);
    result = [count, sum];
  } else if (input === []) {
    result = [0];
  } else {
    result = [];
  }

  return result;
}

//URL: https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript
