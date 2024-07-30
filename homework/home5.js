// // Розрахунок дисконтної ціни
// // Створіть функцію, яка розраховує дисконтну ціну на товар з урахуванням знижки. Функція повинна приймати вартість товару та відсоток знижки як аргументи. Використайте стрілкову функцію та колбек.

const calculateDiscountedPrice = (price, discount, callback) => {
  const finalPrice = callback(price, discount);
  console.log(`Ціна товару з урахуванням знижки: ${finalPrice} UAH`);
};

const showDiscountedPrice = (price, discount) => {
  const priceCalculator = price * (1 - discount / 100);
  return priceCalculator;
};

calculateDiscountedPrice(100, 10, showDiscountedPrice);
