// 1)
const button = document.getElementById("button");
const input = document.getElementById("input");
button.textContent = input.value;
console.log(button);
// 2)
const img = document.querySelector(".img");
img.src =
  "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg";
// 3)
const link = document.querySelector(".link");
link.href = "https://rozetka.com.ua/ua/";
const img1 = document.querySelector(".img1");
img1.alt = "nice nature";
// 4)
const oneListElements = document.querySelector(".list");
const oneListElementChild =
  oneListElements.firstElementChild.querySelector(".text");
oneListElementChild.textContent = "Hello one elements";
// цей варіант трішки складніше, тому що ми використовуємо, ще одну властивість firstElementChild.

const oneListElements1 = document.querySelector(".text");
oneListElements1.textContent = "Hello one elements";
// querySelector - вибрав перший збіг й проігнорував інші класи - це є простіший спосіб.