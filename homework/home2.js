// Створи програму, яка генерує випадкове число від 1 до 100. Користувач повинен вгадати число, введенням його в текстове поле. При кліку на кнопку "Перевірити" програма повинна повідомити користувача, чи є їх відповідь правильною.
const randomNumbers = Math.floor(Math.random() * (100 - 1) + 1);
console.log(randomNumbers);
const input = document.getElementById("guessField");
const button = document.querySelector(".button");
const result = document.getElementById("guessResult");

button.addEventListener("click", onButtonNumbers);

function onButtonNumbers() {
  const user = parseInt(input.value);
  if (!user) {
    result.textContent = "Будь ласка, введіть число!";
    return;
  }

  if (user === randomNumbers) {
    result.textContent = "Вітаємо! Ви вгадали число!";
  } else if (user > randomNumbers) {
    result.textContent = "Ваше число завелике. Спробуйте ще раз!";
  } else {
    result.textContent = "Ваше число замале. Спробуйте ще раз!";
  }
}
// лотерейку можна зробити не виграшну ось так
//   const user = input.value;
//   тобто, ми з інпуту отримуємо рядок й не переводимо його у число
