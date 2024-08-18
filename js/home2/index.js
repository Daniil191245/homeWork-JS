// Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з інпуту на сторінці. Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки
const inputTemperature = document.getElementById("input");
const buttonTemperature = document.getElementById("temp-button");
buttonTemperature.addEventListener("click", onClick);

const weather = {
  temperature: 0,
  humidity: 0,
  windSpeed: 0,
  isTemperature() {
    return this.temperature < 0;
  },
};

const tempValue = parseFloat(inputTemperature.value);
if (!isNaN(tempValue)) {
  weather.temperature = tempValue;

  if (weather.isTemperature()) {
    alert("Температура нижче 0 градусів Цельсія");
  } else {
    alert("Температура вище або рівна 0 градусів Цельсія");
  }
} else {
  alert("Будь ласка, введіть коректну температуру.");
}
function onClick() {
  const tempValue = parseFloat(inputTemperature.value);
  if (!isNaN(tempValue)) {
    weather.temperature = tempValue;

    if (weather.isTemperature()) {
      alert("Температура нижче 0 градусів Цельсія");
    } else {
      alert("Температура вище або рівна 0 градусів Цельсія");
    }
  } else {
    alert("Будь ласка, введіть коректну температуру.");
  }
}