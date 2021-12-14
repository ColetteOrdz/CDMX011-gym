var moveZeros = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      const position = arr.indexOf(arr[i]);
      arr.splice(position, 1);
      arr.push(0);
    }
  }
  return arr;
};

//URL: https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript