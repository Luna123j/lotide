const countLetters = function(str) {
  const result = {};
  const strLowerCase = str.toLowerCase();
  for (const letter of strLowerCase) {
    if (!result[letter]) {
      result[letter] = 1;
    } else {
      result[letter]++;
    }
  }
  return result;
};

console.log(countLetters('stringLHLST'));