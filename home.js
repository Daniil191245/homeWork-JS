// Вивести result в консоль. Перевірити тип змінної result= 5+5+’5’.
const result = 5 + 5 + "5";
console.log(typeof result);
// Створіть змінну email з вашою електронною адресою. Напишіть скрипт, який перевіряє чи містить змінна email символ @ і рахує загальну кількість символів. Результат виведіть в консоль.
const email = "schvezdania@gmail.com";
console.log(email.includes("@"));
console.log(email.length);
// Записати в окремих змінних кожне слово: My, name, is. Поєднати всі слова в змінну fullName. До змінної fullName додати ‘Viktor’. fullName вивести в консоль.
const word1 = "My";
const word2 = "name";
const word3 = "is";
// const fullName = word1 + " " + word2+ " " + word3 + " "+ "Viktor"; // це є спосіб конкатенізації
const fullName = `${word1} ${word2} ${word3} Viktor `;// це є спосіб інтерполяції
console.log(fullName); 
// Створіть змінну userName з ім’ям користувача і змінну payment з сумою до оплати. За допомогою шаблонного рядка виведіть на екран через alert повідомлення на прикладі цього: «Дякуємо, Олександро! До сплати 300 гривень»
