const checkIfPangram = function (sentence) {
  const letras = sentence.toLowerCase().match(/[a-z]/g);
  const newSent = [...new Set(letras)];
  if (newSent.length === 26) {
    return true;
  } else if (newSent.length !== 26) {
    return false;
  }
};

//URL: https://leetcode.com/problems/check-if-the-sentence-is-pangram/