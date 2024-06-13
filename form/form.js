const radioInputOne = document.querySelector("[value = red]");
const radioInputTwo = document.querySelector("[value = white]");
const radioInputThree = document.querySelector("[value = green]");

radioInputOne.addEventListener("click", colorInput1);
radioInputTwo.addEventListener("click", colorInput2);
radioInputThree.addEventListener("click", colorInput3);

function colorInput1() {
  document.body.style.backgroundColor = "red";
  //  document.body.style.backgroundColor = this.value;
}
function colorInput2() {
  document.body.style.backgroundColor = "white";
  //  document.body.style.backgroundColor = this.value;
}
function colorInput3() {
  document.body.style.backgroundColor = "green";
  //  document.body.style.backgroundColor = this.value;
}
// в цьому завданні, як інший спосіб, можна використовувати ключове слово this, щоб не прописувати вручну кольори input, але я не знаю чи є це раціональним розв'язком цього завдання.

// this - це є посилання на об'єкт, тобто в моєму розумінні за допомогою this ми можемо зсилатися на будь-який елемент на нашій сторінці.