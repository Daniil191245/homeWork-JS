// Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. Вивести значення властивостей на сторінку. Якщо метод повернув "true" то змінити колір тексту поля title на зелений.
 const movie = {
   title: "Ship",
   director: "Tom",
   year: 2016,
   rating: 9.3,
   isHighRated() {
     return this.rating > 8;
   },
 };

 document.getElementById("title").textContent = `Назва: ${movie.title}`;
 document.getElementById("director").textContent = `Режисер: ${movie.director}`;
 document.getElementById("year").textContent = `Рік: ${movie.year}`;
 document.getElementById("rating").textContent = `Рейтинг: ${movie.rating}`;

 if (movie.isHighRated()) {
   document.getElementById("title").style.color = "green";
 }
