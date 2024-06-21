// так як структуру switch ми використовуємо у рідких випадках, то реалізацію завдань буду виконувати за допомогою розгалуження
// 1
const drinks = document.querySelector(".drinks");
const choice = document.querySelector(".choice");
drinks.addEventListener("change", onChoice);
function onChoice() {
  const choiceDrinkValue = drinks.value;
  if (choiceDrinkValue === "coffee") {
    choice.textContent = "Ваш вибір - це кава";
  } else if (choiceDrinkValue === "tea") {
    choice.textContent = "Ваш вибір - це чай";
  } else if (choiceDrinkValue === "juice") {
    choice.textContent = "Ваш вибір - це сік";
  }
}
// 2
const text = document.querySelector(".text");
const button = document.querySelector(".button");
const message = document.querySelector(".message");
button.addEventListener("click", onButton);
function onButton() {
  const daysUser = text.value.trim();
  const dayWork = ["понеділок", "вівторок", "середа", "четвер", "п'ятниця"];
  const dayOff = ["субота", "неділя"];
  if (dayWork.includes(daysUser)) {
    message.textContent = "Це є робочим днем";
  } else {
    message.textContent = "Це є вихідний";
  }
}
// 3
// якщо розбити місяця за порою року, то отримаємо 1,2 - це зима; 3,4,5 - весна; 6,7,8- літо; 9,10,11 - осінь, а 12 це виклюЧення для нашої задачі, тобто ми можемо зробити розгалуження, де в умові можемо прОписувати прміжок, і якщо число входить в цей - то отримаємо пору року.
const month = document.querySelector(".month");
const buttonTwo = document.querySelector(".button2");
const monthInform = document.querySelector(".month-inf");
buttonTwo.addEventListener("click", onMonth);
function onMonth() {
  const monthUser = month.value;
  if (monthUser > 0 && monthUser <= 2) {
    alert("Це є зима");
  } else if (monthUser >= 3 && monthUser <= 5) {
    alert("Це є весна");
  } else if (monthUser >= 6 && monthUser <= 8) {
    alert("Це є літо, можна відповичати, але НЕ забувати виконувати завдання!");
  } else if (monthUser >= 9 && monthUser <= 11) {
    alert("Це є осінь");
  } else {
    alert(
      "Вітаю, скоро новий рік, це є перший місяць зими! А це значить, що треба доробити всі свої не виконані справи."
    );
  }
}
// Помилка в цьому завданні була в тому, що я не правильно прописував умову, потім згадав про оператори і все вийшло

// 4
// Створити розмітку з полем введення, що приймає номер місяця та кнопкою. При натисканні на кнопку виводити кількість днів у цьому місяці.
// Кількість днів по місяцях
// і так, спочатку відберемо місяці в яких однакова кількість днів: Березень: 31 день, Травень: 31 день, Липень: 31 день, Серпень: 31 день,Жовтень: 31 день,  Грудень: 31 день ,Січень: 31 день
// наступні місяці з однаковою кількістю: Квітень: 30 дні,Червень: 30 дні,Листопад: 30 днів
// Лютий: 28 днів в звичайному році, 29 днів у високосному році візьмемо 28 днів. Лютий місяць це буде наше виключення.
const numberInput = document.querySelector(".number-input");
const numberButton = document.querySelector(".button-number");
numberButton.addEventListener("click", onNumberButton);
function onNumberButton() {
  const numberUserMonth = numberInput.value.trim();
  const daysMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const days = daysMonth[numberUserMonth - 1];
  //Примітка: оскільки індексація в масиві починається з нуля, потрібно відняти 1.
  if (days === 31) {
    alert("Вітаю в цьому місяці 31 день, у вас є більше часу щось вивчити.");
  } else if (days === 30) {
    alert("Вітаю в цьому місяці 30 днів, нормас у Вас достатньо часу");
  } else {
    alert(
      "Вітаю в цьому місяці 28 днів, Вам треба трішки пришвидшити темпи для вивчення чогось небудь"
    );
  }
}
// 5
const colorInput = document.querySelector(".color");
const colorButton = document.querySelector(".button-color");
colorButton.addEventListener("click", onColorInput);
function onColorInput() {
  const introductionColorUser = colorInput.value.toLowerCase();
  // toLowerCase() - поставив щоб користовач вводив у нижньому регистрі для того, щоб співпадало з кодом, й не виникало зачіпок
  if (introductionColorUser === "червоний") {
    alert("Червоний колір - стоп");
  } else if (introductionColorUser === "зелений") {
    alert("Зелений - йти");
  } else if (introductionColorUser === "жовтий") {
    alert("Жовтий - чекати");
  } else {
    alert("Шановний, Ви ввели не вірний колір, спробуйте ще раз");
  }
}
// 6
// Створити розмітку з двома полями введення, що приймають числа та список (select) з варіантами вибору операцій: "+", "-", "*", "/". При натисканні на кнопку виводити результат обраної операції над цими числами. Користувач повинен бути попереджений про можливість ділення на нуль.
const inputOne = document.querySelector(".input1");
const inputTwo = document.querySelector(".input2");
const matemOper = document.getElementById("list-matem-operations");
const buttonOperations = document.querySelector(".button-operations");
buttonOperations.addEventListener("click", onButtonOperations);
function onButtonOperations() {
  const valueInputOne = inputOne.value;
  const valueInputTwo = inputTwo.value;
  // const sumValue = valueInputOne + valueInputTwo;
  // const differenceValue = valueInputOne - valueInputTwo;
  // const dobutokValue = valueInputOne * valueInputTwo;
  // const divisionValue = valueInputOne / valueInputTwo;
  const matemOperations = matemOper.value;
  if (matemOperations === "summa") {
    // в цьому випадку використаємо інтерполяцію
    const sum = valueInputOne + valueInputTwo;
    alert(`Сума двох чисел становить: ${sum}`);
  } else if (matemOperations === "difference") {
    const difference = valueInputOne - valueInputTwo;
    alert(`Різниця двох чисел становить: ${difference}`);
  } else if (matemOperations === "dobutok") {
    const dobutok = valueInputOne * valueInputTwo;
    alert(`Добуток двох чисел становить: ${dobutok}`);
  } else if (matemOperations === "division") {
    if (valueInputTwo === 0) {
      alert("Попередження: на нуль ділити не можна");
    } else {
      const division = valueInputOne / valueInputTwo;
      alert(`Ділення двох чисел становить: ${division}`);
    }
  }
}

//  Творчі завдання
// Написати програму яка перевіряє чи введене число через input потрапляє в діапазон від 55 до 99 включно. Якщо так, вивести на екран "Число потрапляє в діапазон". Якщо ні, вивести "Число не потрапляє в діапазон".
const numberAge = document.querySelector(".number-age");
const buttonAge = document.querySelector(".button-age");
buttonAge.addEventListener("click", onButtonAge);
function onButtonAge() {
  const numberAgeUser = numberAge.value;
  if (numberAgeUser >= 55 && numberAgeUser <= 99) {
    alert("Число потрапляє в діапазон");
  } else {
    alert("Число не потрапляє в діапазон");
  }
}
// Є 3 вікові групи : діти (0-16), дорослі (17-60), пенсіонери (61-100). До якої групи відноситься Максим, якщо йому 55 років. Назву групи вивести на екран.
const ageMax = 55;
if (ageMax >= 0 && ageMax <= 16) {
  alert("Максим відноситься до групи: діти");
} else if (ageMax >= 17 && ageMax <= 60) {
  alert("Максим відноситься до групи: дорослі");
} else if (ageMax >= 61 && ageMax <= 100) {
  alert("Максим відноситься до групи: пенсіонери");
}
// Якщо ваше ім’я містить більше 4 букв і прізвище більше 5, то виведіть на екран число,яке дорівнює сумі букв імені і прізвища. Якщо умова не виконується - вивести “УПС”. Наприклад: “Віктор Сташко” Віктор — 6 літер, Сташко — 6 літер. Виводимо 12. Використовувати вбудований метод length.
const nameInput = document.querySelector(".name");
const surnameInput = document.querySelector(".surname");
const buttonInform = document.querySelector(".button-inform");
buttonInform.addEventListener("click", onButtonInform);
function onButtonInform() {
  const nameUser = nameInput.value.length.trim();
  const surnameUser = surnameInput.value.length;
  if (nameUser > 4 && surnameUser > 5) {
    const sum = nameUser + surnameUser;
    alert(`Сума становить: ${sum}`);
  } else {
    alert("УПС");
  }
}
// Виберіть будь-яке число від 1 до 5 включно через функцію random. За допомогою if else визначіть, що це за число.

const numbers = Math.round(Math.random() * (5 - 1) + 1);
if (numbers === 1) {
  console.log("це 1");
} else if (numbers === 2) {
  console.log("це 2");
} else if (numbers === 3) {
  console.log("це 3");
} else if (numbers === 4) {
  console.log("це 4");
} else {
  console.log("це 5");
}
// Змінна lang може приймати 4 значення: 'ua', 'en', 'ru', 'fr'. За допомогою конструкції switch виведи на екран назву місяця в залежності від обраної мови. Наприклад, якщо lang = 'fr', то в консоль виводимо "Janvier".
const lang = prompt("Введіть мову");
const lang1 = "ua";
const lang2 = "en";
const lang3 = "ru";
const lang4 = "fr";
switch (lang) {
  case lang1:
    console.log("червень");
    break;
  case lang2:
    console.log("June");
    break;
  case lang3:
    console.log("Июнь");
    break;
  case lang4:
    console.log("Janvier");
    break;
  default:
    console.log("Спробуй ще раз");
    break;
}
// Напиши скрипт вибору готеля по кількості зірок (1 — 20$, 2 — 30$, 3 — 50$, 4 — 70$, 5 — 120$). Якщо в змінній stars щось окрім чисел 1-5, виведи рядок: 'Токої кількості зірок немає'.
const stars = parseInt(
  prompt("Введіть кількість зірок готелю у який Ви хочете приїхати")
);
const starsOne = "20$";
const starsTwo = "30$";
const starsThree = "50$";
const starsFour = "70$";
const starsFive = "120$";
const numberStars1 = 1;
const numberStars2 = 2;
const numberStars3 = 3;
const numberStars4 = 4;
const numberStars5 = 5;
switch (stars) {
  case numberStars1:
    alert(`Ціна готелю ${starsOne}`);
    break;
  case numberStars2:
    alert(`Ціна готелю ${starsTwo}`);
    break;
  case numberStars3:
    alert(`Ціна готелю ${starsThree}`);
    break;
  case numberStars4:
    alert(`Ціна готелю ${starsFour}`);
    break;
  case numberStars5:
    alert(`Ціна готелю ${starsFive}`);
    break;
  default:
    alert("Цієї кількості зірок немає");
    break;
}
// У мене є сумніві щодо раціональності реалізації цього завдання, тому що велика низка змінних записано. Може є коротший шлях. В принципі можна записати в інтерполяції ціну, а не змінну яка підтягується з пам'яті, в цьому випадку ми скоротимо в пам'яті комп'ютера змінні.

// При виконанні домашнього завдання стикався з деяками труднощами, але з ними вправився.
// Примітка: треба повторювати конспект, щоб пам'ятати всі нюанси






// 2
// Створити розмітку  з двома числовими полями та кнопкою. При натисканні на кнопку перевіряти, чи сума значень полів більша за 10, якщо так, то виводити повідомлення "Сума більша за 10", якщо ні — "Сума менша або дорівнює 10".
const inputNumber1 = document.getElementById("number1");
const inputNumber2 = document.getElementById("number2");
const buttonNumber = document.getElementById("button-number");
buttonNumber.addEventListener("click", onButtonNumber);
function onButtonNumber() {
  const userInputNumber1 = Math.round(inputNumber1.value);
  const userInputNumber2 = Math.round(inputNumber2.value);
  const summaUserInputNumber = userInputNumber1 + userInputNumber2;
  if (summaUserInputNumber > 10) {
    console.log("Сума більша за 10");
  } else {
    console.log("Сума менша або дорівнює 10");
  }
  // Примітка: в умові задачи НЕ сказали включно чи ні більше значення 10.
}
// 3
// Створити розмітку  з текстовим полем та кнопкою. При натисканні на кнопку перевіряти, чи введений текст містить слово "JavaScript", якщо так, то виводити повідомлення "Текст містить слово JavaScript", якщо ні — "Текст не містить слово JavaScript".
const inputJS = document.getElementById("input-js");
const buttonJs = document.querySelector(".button-js");
buttonJs.addEventListener("click", onButtonJS);
function onButtonJS() {
  const userInputJS = inputJS.value;
  if (userInputJS.includes("JavaScript")) {
    console.log("Текст містить слово JavaScript");
  } else {
    console.log("Текст не містить слово JavaScript");
  }
}
// 4
// Створити розмітку  з формою з полями введення та кнопкою. При натисканні на кнопку перевіряти, чи введене число більше за 10 та менше за 20, якщо так, то виводити повідомлення "Число входить в діапазон від 10 до 20", якщо ні — "Число не входить в діапазон від 10 до 20".
const numericInput = document.querySelector(".numeric-input");
const numericButton = document.querySelector(".numeric-button");
numericButton.addEventListener("click", onNumericButton);
function onNumericButton() {
  const userNumeric = Math.round(numericInput.value);
  if (userNumeric > 10 && userNumeric < 20) {
    console.log("Число входить в діапазон від 10 до 20");
  } else {
    console.log("Число не входить в діапазон від 10 до 20");
  }
}
// якщо ми закоментуємо тег fоrm, то побачимо, що в консолі виводить задану умову


// залишилось доробити 1 та 5 задачу
// 1
// Створити розмітку з двома текстовими полями та кнопкою. При натисканні на кнопку перевіряти, чи обидва поля містять значення, якщо так, то виводити повідомлення "Обидва поля заповнені", якщо ні — "Не всі поля заповнені".
// 5
// Створити розмітку  з формою з полями введення та кнопкою. При натисканні на кнопку перевіряти, чи введені дані правильно заповнені, якщо так, то перенаправляти на іншу сторінку, якщо ні — виводити повідомлення про помилку. Правильно заповнені дані: ім'я містить не менше 3 символів, email містить символ @ та крапку після неї, пароль містить не менше 6 символів.
