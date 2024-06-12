const openButton = document.querySelector("[data-action = open-modal]");
const closeButton = document.querySelector("[data-action = close-modal]");
const modalka = document.querySelector(".backdrop");
openButton.addEventListener("click", togModal);
closeButton.addEventListener("click", togModal);
function togModal() {
  document.body.classList.toggle("show-modal");
}