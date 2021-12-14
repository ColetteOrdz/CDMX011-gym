function oddOrEven(array) {
  console.log(array);
  let newArray = [];
  const sum = array.reduce(function (a, b) {
    return a + b;
  });
  console.log(sum);
  if (sum % 2 == 0) {
    newArray = "even";
  } else {
    newArray = "odd";
  }
  return newArray;
}

//URL: https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript