//переменная с указанием типа
let userName: string = "Menzhan";

//фуекция с типами параметров и возращаемого значения
function greetUser(name: string, age: number): string{
    return `Привет, ${name}! Тебе ${age} лет`;
}

//выводим результат в консоль
console.log(greetUser(userName, 20));


// Пример ошибки TypeScript (раскомментируй строку ниже и посмотри, что произойдёт)
// console.log(greetUser(123, "Менжан")); // ❌ Ошибка: аргументы не соответствуют типам