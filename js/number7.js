const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = 0;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  result += element;
}
console.log(result)
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  }
  return false;
};
isLoginValid("fdgstfhyjtdgfdz");

const isLoginUnique = function (allLogins, login) {
  if (!allLogins.includes(login)) {
    return true;
  }
  return false;
};
isLoginUnique(logins, "qwerty123");
console.log(isLoginValid("fdgstfhyjtdgfdz"));
console.log(isLoginUnique(logins, "qwerty123"));



const addLogin = function (allLogins, login) {
  if (isLoginValid(login)) {
    if (isLoginUnique(login)) {
        allLogins.push(login)
    }
    
  }
};

