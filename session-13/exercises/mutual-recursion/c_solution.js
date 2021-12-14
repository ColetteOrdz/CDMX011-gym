function F(n) {
  if (n === 0) {
    return 1;
  } else {
    return n - M(F(n - 1));
  }
}

function M(n) {
  if (n === 0) {
    return 0;
  } else {
    return n - F(M(n - 1));
  }
}

//URL: https://www.codewars.com/kata/53a1eac7e0afd3ad3300008b/train/javascript
