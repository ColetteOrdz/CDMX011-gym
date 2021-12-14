function disemvowel(str) {
  const expReg = /[aeiouAEIOU]/g;
  const result = str.replace(expReg, "");
  console.log(result);

  return result;
}

//URL: https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript