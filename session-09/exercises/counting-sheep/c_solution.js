function countSheeps(arrayOfSheep) {
  let sheeps = 0;
  arrayOfSheep.forEach((item) => {
    if (item === true && item !== null) {
      sheeps++;
    }
  });
  return sheeps;
}

// URL: https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript
