// Створіть об’єкт "user", якbq буде мати властивості "name", "email", "password". Додайте метод "login", який буде перевіряти правильність введеного email та password. Використайте інпути для запису значень властивостей в об’єкт
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const button = document.getElementById("button");
button.addEventListener("click", onClick);

const user = {
  name: "",
  email: "",
  password: "",

  login() {
    const { email, password } = this;
    if (email === emailInput.value && password === passwordInput.value) {
      console.log("Супер!");
    } else {
      console.log("Спробуйте ще раз");
    }
  },
};

function onClick() {
  user.name = nameInput.value;
  user.email = emailInput.value;
  user.password = passwordInput.value;

  if (user.password.length <= 6) {
    console.log("Пароль короткий");
  } else {
    console.log("Ваш пароль підходить");
    user.login();
  }
}