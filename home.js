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