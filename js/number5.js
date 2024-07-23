const checkForSpam = function (message) {
  const word = message.toLowerCase();
if (word.includes("spam") || word.includes("sale")) {
  return true;
} else {
  return false;
}
};
// const checkForSpam = function (message) {
//   const word = message.toLowerCase();
//   const wordsArr = ["spam", "sale"];

//   for (let i = 0; i < wordsArr.length; i++) {
//     if (word.includes(wordsArr[i])) {
//       return true;
//     }
//   }
//   return false;
// };
/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true


