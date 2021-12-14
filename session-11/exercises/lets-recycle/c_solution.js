function recycle(array) {
  const newArray = ["paper", "glass", "organic", "plastic"];
  const result = [];
  newArray.forEach((m) => {
    const filtResult = array.filter((material) => {
      return material.material == m || material.secondMaterial == m;
    });
    const title = filtResult.map((item) => item.type);
    result.push(title);
  });
  return result;
}

//URL: https://www.codewars.com/kata/5b6db1acb118141f6b000060/train/javascript
