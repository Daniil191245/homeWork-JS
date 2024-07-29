//  Створи програму, яка відображає повідомлення про те, скільки разів користувач клікнув на сторінці.
const button = document.querySelector(".activ");
button.addEventListener("click", onActivClick);
const numbersDiv = document.querySelector(".numbers");
let clickButton = 0;
function onActivClick() {
  clickButton++;
  if (clickButton >= 20) {
    alert("навіщо стільки клікаєте по кнопці, пальці зайві");
  }
  numbersDiv.textContent = `Кількість натискань на кнопку: ${clickButton}`;
}
// // зробимо ще одну кнопку і виведемо юзеру к-ть натискать на кнопку
// зробимлю спочатку через фанкшн декларейшн, а потім спробую стрічну.

// let clickButton = 0;
// button.addEventListener("click", () => {
//   clickButton++;
//   if (clickButton >= 20) {
//     alert("навіщо стільки клікаєте по кнопці, пальці зайві");
//   }
//   numbersDiv.textContent = `Кількість натискань на кнопку: ${clickButton}`;
// });
