function count(string) {
  if (string == "") {
    return {};
  } else {
    let objContenedor = {};
    let palabra = string.split("").sort();
    console.log(palabra);
    palabra.forEach((letra) => {
      console.log(objContenedor.hasOwnProperty(letra));
      if (objContenedor.hasOwnProperty(letra) == false) {
        objContenedor[letra] = 1;
      } else {
        objContenedor[letra]++;
      }
      console.log(objContenedor);
    });
    return objContenedor;
  }
}

count("aba"); //{ a: 2, b: 1 })
count(""); //{}

//URL: https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript
