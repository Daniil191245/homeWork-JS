const findLongestWord = function (string) {
  const strings = string.split(" ");
  let bigWord = "";
  for (let i = 0; i < strings.length; i++) {
    const stringArr = strings[i];
    if (stringArr.length > bigWord.length) {
      bigWord = stringArr;
    }
  }
  return bigWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'
console.log(findLongestWord("Google do a roll")); // 'Google'
console.log(findLongestWord("May the force be with you")); // 'force'
