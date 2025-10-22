//функция приветствия
function greetUser(name, age) {
    console.log("Привет, " + name + "! Тебе " + age + " лет.");
}

//вызов функции
greetUser("Менжан", 20);

// Условие: проверка возраста
let userAge = 20;

if (userAge >=18) {
 console.log("Доступ разрешен");
} else {
    console.log("Доступ запрещен");
}
