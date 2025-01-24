// Спливаюче вікно привітання
alert("Ласкаво просимо!");

// Запитання для введення даних користувача
var firstName = prompt("Введіть ваше ім'я:");
var lastName = prompt("Введіть ваше прізвище:");
var group = prompt("Введіть вашу групу:");

// Відображення введених даних на сторінці
document.write("<p>Прізвище та ім'я студента: " + lastName + " " + firstName + "</p>");
document.write("<p>Група: " + group + "</p>");

// Обробник події для кнопки
function showDateTime() {
    var currentDate = new Date();
    alert("Поточна дата і час: " + currentDate);
}
