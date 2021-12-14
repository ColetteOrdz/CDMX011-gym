function createPhoneNumber(numbers) {
  console.log(numbers);
  let primerGrupo = numbers.splice(0, 3).join("");
  console.log(primerGrupo);
  let segundoGrupo = numbers.splice(0, 3).join("");
  console.log(segundoGrupo);
  let tercerGrupo = numbers.splice(0, 4).join("");
  console.log(tercerGrupo);
  const number = `(${primerGrupo}) ${segundoGrupo}-${tercerGrupo}`;

  return number;
}

//URL: https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
