//переменная с указанием типа
var userName = "Menzhan";
//фуекция с типами параметров и возращаемого значения
function greetUser(name, age) {
    return "\u041F\u0440\u0438\u0432\u0435\u0442, ".concat(name, "! \u0422\u0435\u0431\u0435 ").concat(age, " \u043B\u0435\u0442");
}
//выводим результат в консоль
console.log(greetUser(userName, 20));
// Пример ошибки TypeScript (раскомментируй строку ниже и посмотри, что произойдёт)
// console.log(greetUser(123, "Менжан")); // ❌ Ошибка: аргументы не соответствуют типам
