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

// 4
// Створити розмітку з полем введення, що приймає номер місяця та кнопкою. При натисканні на кнопку виводити кількість днів у цьому місяці.
