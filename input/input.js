// 5
const textSize = document.getElementById("font-size-control");
const text = document.getElementById("text");
textSize.addEventListener("input", fontSizeText);
function fontSizeText() {
  text.style.fontSize = textSize.value + "px";
}