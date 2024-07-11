const array = [20, 30, 40];
array[1] = 10;
console.log(array[1]);

const array1 = ["0", "1", "2"];
array1[3] = "3";
console.log(array1);
// array1.push("3")
// Щоб додати елементи на початок масиву використовується метод Array. unshift(), який додає одне або декілька значень. Щоб додати елементи у кінець масиву використовується метод push(), який додає одне або декілька значень.

const array2 = [8, 9, 10, 11, 12];
const arrays2 = array2[0] + array2[1] + array2[2] + array2[3] + array2[4];
console.log(arrays2);
// я думаю вирішення цієї задачи не є раціональним, й її можна зробити по іншому

const array3 = [1, 2, 3, 4, 5];
for (let index = 0; index < array3.length; index++) {
  // const element = array[index];
  console.log(array3[index]);
}

const array6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array6.length; i++) {
  const element = array6[i];
  if (element % 2 === 0) {
    console.log(`всі парні числа: ${element}`);
  }
  // умову можна записати інакшу, (element % 2 != 1) ця умова в розгалужені значить, якщо довільне число з масиву ділиться на 2 і НЕ дорвнює 1, то число парне.
}
