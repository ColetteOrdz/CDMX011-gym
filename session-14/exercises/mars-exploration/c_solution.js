function marsExploration(s) {
  const leng = s.length;
  //const div = leng/3
  let contador = 0;
  for (let i = 0; i < s.length; i += 3) {
    if (s[i] != "S") {
      contador++;
    }
    if (s[i + 1] != "O") {
      contador++;
    }
    if (s[i + 2] != "S") {
      contador++;
    }
  }
  return contador;
}

//URL: https://www.hackerrank.com/challenges/mars-exploration/problem