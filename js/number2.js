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
