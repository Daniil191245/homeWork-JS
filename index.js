// Створити змінні для зберігання температури за Цельсієм та Фаренгейтом. Перевести температуру з Цельсія у Фаренгейти за допомогою формули та вивести результат в консоль.
const celsius = 35;
const fahrenheit = (celsius * 9) / 5 + 32;
console.log(`${celsius}°C = ${fahrenheit}°F`);

// Створити змінну для зберігання кількості днів у місяці. Обчислити кількість годин та хвилин у цьому місяці за допомогою оператора множення та вивести результат в консоль.
const days = 30;
const oneHour = days * 24;
const hourMinutes = days * 24 * 60;
// console.log(oneHour);
// console.log(hourMinutes);
console.log(`У ${days} днів ${oneHour} годин та ${hourMinutes} хвилин`);

// Створити змінні для зберігання рівня здоров'я та енергії гравця в грі. Зменшити рівень здоров'я та енергії гравця за допомогою операторів віднімання та вивести результат в консоль.
const health = 100;
const energy = 100;
console.log(health - 72);
console.log(energy - 32);

// Створити змінну для зберігання суми покупки в магазині. Застосувати знижку в розмірі 10% до цієї суми за допомогою оператора множення та вивести результат в консоль.
const price = 500;
const discount = (price * 90) / 100;
console.log(`знижка на 10% становить ${discount} гривень`);
// або
// тоді в цьому випадку ми можему НЕ записувати змінну discount, а прсото обчислити коли виводимо.
console.log((price * 90) / 100);

// Створити змінну для зберігання числа з плаваючою комою. Використати метод Math.floor() для округлення числа до меншого та вивести результат в консоль.
const numbers = -1.3;
console.log(Math.floor(numbers)); //-2

const numbersTwo = 3.8;
console.log(Math.floor(numbersTwo)); // 3

// Створити змінну для зберігання рядка, який містить числа з плаваючою комою. Використати метод parseFloat() для перетворення рядка у десяткове число та вивести результат в консоль.
const decimalNumber = "9.8pxdscvsdv1";
console.log(Number.parseFloat(decimalNumber));

// Створити змінну для зберігання рядка, який містить ціле число. Використати метод parseInt() для перетворення рядка у ціле число та вивести результат в консоль.
const decimalNumberTwo = "6hgfghfhs";
console.log(Number.parseInt(decimalNumberTwo));
// примітка: знаю ,що так не добре називати змінні, але у мене вже фантазія закінчилася.

// Створити змінну для зберігання числа. Використати метод Math.sqrt() для обчислення квадратного кореня числа та вивести результат в консоль.
const squareNumber = 5;
console.log(Math.sqrt(squareNumber));
// тепер спробуємо добути корень із числа та округлити до цілого
const sevenNumbers = 31;
const sevenNumbersSq = Math.sqrt(sevenNumbers);
console.log(Math.round(sevenNumbersSq));
// метод Math.round округлює до цілого числа

let oneNumber = prompt("Введіть будь яке довільне число");
oneNumber = Math.sqrt(oneNumber);
oneNumber = Math.round(oneNumber);
alert(
  "Ось ваше число, за яким ви отримуєте дозвіл до використання нашого функціоналу:" +
    oneNumber
);
// в принципі, як ще варіант, можна записати через розгалуження

// Створити змінні для зберігання цілочисельного значення та рядка з числом у вигляді рядка. Використати метод parseInt() для перетворення рядка у ціле число та вивести результат в консоль. Потім використати метод toString() для перетворення цілочисельного значення у рядок та вивести результат в консоль.
const integral = 10;
const string = "1";
console.log(typeof Number.parseInt(string));
console.log(typeof integral.toString());

// Додаткові завдання
// Створіть змінні a1, a2, a3, a4, a5 . За допомогою математичних операторів (додавання, віднімання і т.д.) знайдіть значення виразів: 5 + 3; 5 - 3; 5 * 3; 5/3, помістивши результат кожного виразу в змінну.

const a1 = 5 + 3;
const a2 = 5 - 3;
const a3 = 5 * 3;
const a4 = 5 / 3;
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);

// Створіть змінні a6, a7, a8, a9, a10. Помістіть в них результат виразів: 5 % 3; 3 % 5; 5 + '3'; '5' - 3; 75 + 'кг' і виведіть на екран за допомогою alert по черзі всі змінні.
let a6 = 5 % 3;
let a7 = 3 % 5;
let a8 = 5 + "3";
let a9 = "5" - 3;
let a10 = 75 + "кг";
alert(a6);
alert(a7);
alert(a8);
alert(a9);
alert(a10);

// Напишіть скрипт для створення випадкового числа з плаваючою крапкою від min до max (не враховуючи max).
const min = 0.8;
const max = 3.2;
const randomNumber = Math.floor(Math.random() * (max - min)) + min;
console.log(randomNumber);

// Створіть функцію яка генерує випадкове ціле число від min до max включно.
// це є аналогічне завдання до попереднього просто з цілим числом, але алгоритм той самий.
const minWhole = 81;
const maxWhole = 163;
const randomWhole =
  Math.floor(Math.random() * (maxWhole - minWhole)) + minWhole;
console.log(randomWhole);

// Напишіть скрипт, який просить відвідувача ввести два числа, і в результаті показує їх суму.
const numberOne = prompt("Введіть число");
const numberTwo = prompt("Введіть будь-яке число");
const num1 = parseFloat(numberOne);
const num2 = parseFloat(numberTwo);
const numberGeneral = num1 + num2;
alert("сума становить" + numberGeneral);

// Творче завдання

// Створити змінні к1… к4 , в них почергово записати ТІЛЬКИ результат приведення до ЦІЛОГО ЧИСЛА з даних : 1) 5px; 2) 12djd334; 3) 12.45asdwe12; 4) qwqweeewq;
const k1 = "5px";
const k2 = "12djd334";
const k3 = "12.45asdwe12";
const k4 = "qwqweeewq";
// в цьому випадку ми беремо parseInt так як воно виділяє тільки ціле число, що й насм треба в цій задачі.
console.log(Number.parseInt(k1));
console.log(Number.parseInt(k2));
console.log(Number.parseInt(k3));
console.log(Number.parseInt(k4));

// Створити змінні к1… к4 , в них почергово записати ТІЛЬКИ результат приведення до ДРОБОВОГО ЧИСЛА з даних : 1) 5px; 2) 12djd334; 3) 12.45asdwe12; 4) qwqweeewq;
const kOne = "5px";
const kTwo = "12djd334";
const kThree = "12.45asdwe12";
const kFoure = "qwqweeewq";
console.log(Number.parseFloat(kOne));
console.log(Number.parseFloat(kTwo));
console.log(Number.parseFloat(kThree));
console.log(Number.parseFloat(kFoure));

// За допомогою об’єкту Math виведіть в консоль найбільше і найменше значення серед заданих (2, 34, 99, 3, 22, 36, 733, 18)
console.log(Math.max(2, 34, 99, 3, 22, 36, 733, 18));
console.log(Math.min(2, 34, 99, 3, 22, 36, 733, 18));

// У змінну random згенеруйте випадкове число від 3 до 19 включно. Результат виведіть в консоль. 
// (Треба ще подумати як виконати це завдання)

// Супер творче завдання
// Напишіть скрипт, який знаходить площу прямокутника. Висота 23см, шириною 10см — всі данні повинні зберігатися в змінних. Значення площі повинно зберігається в числовій змінній.
const height = 23;
const width = 10;
const area = height * width;
console.log(area);

// Напишіть скрипт, який знаходить обсяг циліндра висотою 10м і діаметром основи 4м , результат та дані повинні зберігатися в змінних.
const cylinderHeight = 10;
const cylinderDiameter = 4;
// почнемо з того на що нам треба орієнтуватися це формула V = πR2H
// Math.pow() метод об'єкту Math повертає число n в степінь step, nstep.
const cylinderRadius = cylinderDiameter / 2;
const cylinderRadius2 = Math.pow(cylinderRadius, 2);
const cylinderVolume = Math.PI * cylinderRadius2 * cylinderHeight;
console.log(cylinderVolume); //125.66370614359172
// в результаті чого виводить не гарне число, спробуємо його зробити гарніше.
console.log(Math.round(cylinderVolume)); // 126

// У прямокутного трикутника дві сторони зі значенням 3 і 4 Знайдіть гіпотенузу k по теоремі Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор піднесення до степеня **). Результат та дані повинні зберігатися в змінних.
const katetOne = 4;
const katetTwo = 3;
const sumaKatet = Math.pow(katetOne, 2) + Math.pow(katetTwo, 2);
const hypotenuse = Math.sqrt(sumaKatet);
console.log(hypotenuse);