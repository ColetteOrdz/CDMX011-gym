function strCount(obj){
    let count = 0;
  
    Object.values(obj).forEach((element) => {
      if (typeof element === "string"){
        count++
      } else if (typeof element === "object" && element !== null){
        count += strCount(element)
      }
    })
    return count
  }
  
  //URL: https://www.codewars.com/kata/565b3542af398bfb50000003/train/javascript