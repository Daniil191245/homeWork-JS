// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку.
// Методи повинні зпрацьовувати при натисканні на кнопки “поповнити рахунок” та отримати ‘готівку’ відповідно. Після проведення операції виводити повідомлення про залишок на рахунку.
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
button1.addEventListener("click", deposit);
button2.addEventListener("click", withdraw);
const bankAccount = {
  ownerName: "Petro Vasilev",
  accountNumber: "34567890",
  balance: 10000,

  deposit(amount) {
    this.balance += amount;
    this.showBalance();
  },

  withdraw(amount) {
    if (amount > this.balance) {
      alert("Недостатньо коштів на рахунку!");
    } else {
      this.balance -= amount;
      this.showBalance();
    }
  },

  showBalance() {
    document.getElementById("balance").innerText = this.balance;
  },
};

function deposit() {
  const amount = parseFloat(document.getElementById("amount").value);
  if (!isNaN(amount) && amount > 0) {
    bankAccount.deposit(amount);
    alert(
      `Рахунок поповнено на ${amount} грн. Залишок: ${bankAccount.balance} грн.`
    );
  } else {
    alert("Будь ласка, введіть коректну суму.");
  }
}

function withdraw() {
  const amount = parseFloat(document.getElementById("amount").value);
  if (!isNaN(amount) && amount > 0) {
    bankAccount.withdraw(amount);
    alert(`Знято ${amount} грн. Залишок: ${bankAccount.balance} грн.`);
  } else {
    alert("Будь ласка, введіть коректну суму.");
  }
}
