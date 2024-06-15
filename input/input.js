// 5
const textSize = document.getElementById("font-size-control");
const text = document.getElementById("text");
textSize.addEventListener("input", fontSizeText);
function fontSizeText() {
  text.style.fontSize = textSize.value + "px";
}
// 4
const input = document.getElementById("name-input");
const span = document.getElementById("name-output");
input.addEventListener("input", onInput);
function onInput(e) {
  const inputValue = e.target.value;
  span.textContent = inputValue;
  if (inputValue.trim().length === 0) {
    span.textContent = "незнайомець";
  }
}