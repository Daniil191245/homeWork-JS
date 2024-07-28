// 1. Напиши скрипт який при кліку на кнопку буде виводити на екран повідомлення “Hello World!”. Використовуй колбек в вигляді стрілки

const button = document.querySelector(".clickss");

// button.addEventListener("click", onButtonClick);
// function onButtonClick() {
//   console.log("Hello World!");
// }

// зробив вивід у консоль, думаю це важливу роль не відіграє куди буде виводитись.
button.addEventListener("click", ()=>{
  console.log("hello word!")
  alert("hello word!")
});
// спробував зробити через стрілочні ф-ції, але не знаю є це рішення вірним.