// Вивести на екран всі числа від 1 до 10 за допомогою циклу while.
let num = 0;
while (num < 10) {
      num++;
  console.log(num);

}
// Вивести на екран всі парні числа від 2 до 20 за допомогою циклу for. Якщо число не парне, пропустити його за допомогою continue.
for (let i = 2; i <= 20; i++) {
  if (i % 2 === 1) {
    continue;
  } else {
    console.log(i);
  }
}
// Вивести на екран таблицю множення числа 7 за допомогою циклу for.
const number = 7;
for (let i = 1; i <= 10; i++) {
  console.log(number * i);
}

// Створити масив з числами від 1 до 5. Вивести на екран кожен елемент масиву за допомогою циклу while.
const names = [1, 2, 3, 4, 5];
let i = 0;
while (i <= names.length - 1) {
  i++;
  console.log(i);
}

// for (let index = 0; index < names.length; index++) {
//   const element = names[index];
//   console.log(element);
// }
// console.log(names[names.length - 1]);
// індекси рахуються з нуля
// за цим записом ми отримали останній елемент масиву
// console.log(names[names.length - 1]);

// Створити масив із числами від 1 до 10. За допомогою циклу for пройтися по масиву та вивести на екран всі числа, крім числа 7. Якщо зустрінете число 7, закінчити виконання циклу за допомогою оператора break.
const arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i <= 10; i++) {
  const element = arrays[i];
  if (element === 7) {
    break;
  }
  console.log(element);
}
// // Створити скрипт, який виводить на екран всі числа, які менші за n. Якщо зустрічається число, що більше або дорівнює n, цикл повинен бути закінчений за допомогою break.
const n = 100;
let ind = 1;
while (ind < n) {
   ind++;
  if (ind <= n) {
    console.log(ind);
  } else {
    break;
  }
}