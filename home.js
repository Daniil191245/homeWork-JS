// Створити змінну з іменем age і присвоїти їй значення свого віку. Вивести значення цієї змінної в консоль.
const age = 17;
console.log(age);
// Створити змінну з іменем name і присвоїти їй значення свого імені. Вивести значення цієї змінної в консоль.
const name = "Daniil";
console.log(name);
// Створити змінну з іменем isStudent і присвоїти їй значення true або false, залежно від того, чи є студентом. Вивести значення цієї змінної в консоль.
const isStudent = "true";
console.log(isStudent);
// Створити змінну з іменем myString і присвоїти їй рядок з вашої улюбленою цитатою. Вивести цей рядок в консоль.
const myString = "Навіть найдовший шлях починається з першого кроку.";
console.log(myString);
// Створити змінну з іменем myNumber і присвоїти їй довільне числове значення. Потім присвоїти цій змінній результат додавання до неї числа 10. Вивести значення myNumber в консоль.
const myNumber = "50" + 10;
console.log(myNumber);
// Створити змінну з іменем myNull і присвоїти їй значення null. Вивести значення цієї змінної в консоль
const myNull = "null";
console.log(myNull);
// Створити скрипт який виводить спливаюче вікно з запитом на введення імені користувача за допомогою prompt(). Після введення імені вивести повідомлення привітання з використанням введеного імені.
// схема
// if (умова){
//     інструкція1
// }
// else{
//     інструкція2
// }
const userNames = prompt("введіть ім'я");
if (userNames) {
  alert("Вітаю, " + userNames + "!");
} else {
  alert("Привіт, анонім!");
}
// >= цей значить більше або дорівнює нашому значенню
const ages = prompt("Скільки вам років?");
if (ages >= 18) {
  alert("Ви можете продовжувати свої дії!");
} else {
  alert("Ви Не можете продовжувати свої дій, так як вам ще немає 18 років.");
}
// Створити скрипт який виводить спливаюче підтвердження за допомогою confirm(). Якщо користувач підтверджує дію, вивести повідомлення "Дякую за підтвердження!". Якщо користувач відмовляється, вивести повідомлення "Дію відмінено!".
const user = confirm("Ви підтверджуєте дію");
// але ще не знаю як правильно сформувати умовуу
if (user) {
  console.log("Дякую за підтвердження!");
} else {
  console.log("Дію відмінено!");
}
// Створити скрипт який виводить спливаюче попередження за допомогою alert(). Вивести повідомлення про те, що дія небезпечна та попросити користувача підтвердити дію за допомогою confirm(). Якщо користувач підтверджує дію, вивести повідомлення "Дякую за підтвердження!". Якщо користувач відмовляється, вивести повідомлення "Дію відмінено!".

// if else - якщо - інакше
// if  відпрацьовує тільки у випадку коли в круглих дужках true
