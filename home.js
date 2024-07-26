const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
let string = "";
for (let i = 0; i < friends.length; i++) {
  string += friends[i];
  if (i < friends.length - 1) {
    string += ",";
  }
}
console.log(string); 

// const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
// let string = friends.join(",");
// console.log(string);


// Працюємо з колекцією карток в trello. Метод splice() (можна використати інші методи)
const cards = [
  "карточка-1",
  "карточка-2",
  "карточка-3",
  "карточка-4",
  "карточка-5",
];
// видалення
const cardToRemove = "карточка-3";
const i = cards.indexOf(cardToRemove);
if (i !== -1) {
  cards.splice(i, 1);
}
console.log(cards); 
// додавання
const cardToInsert = "Карточка-6";
cards.push(cardToInsert);
console.log(cards)

const cardToUpdate = "Карточка-4";
const indexToUpdate = cards.indexOf(cardToUpdate);
if (indexToUpdate !== -1) {
  cards[indexToUpdate] = "оновлена-карточка-4";
}
console.log(cards);