const logItems = function (array) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(i + 1 + " - " + element);
  }
};
logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

const calculateEngravingPrice = function (message, pricePerWord) {
  const arr = message.split(" ");
  const wordNum = arr.length;
  const price = pricePerWord * wordNum;
  console.log(price);
  return price;
};

calculateEngravingPrice(prompt("Введіть рядок для гравіювання"), 50);
calculateEngravingPrice(
  "Proin sociis natoque et magnis parturient montes mus",
  10
);
calculateEngravingPrice(
  "Proin sociis natoque et magnis parturient montes mus",
  20
);
calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40);
calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20);

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

const formatString = function (string) {
  if (string.length <= 40) {
  return string;
  } else{
     const format = string.slice(0, 40) + "...";
     return format;
  }
};
console.log(formatString("Curabitur ligula sapien, tincidunt non."));
console.log(formatString("Curabitur ligula sapien, tincidunt non."));
console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
console.log(formatString("Curabitur ligula sapien."));
console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);