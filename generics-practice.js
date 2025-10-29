// 1. Функция getLastElement
function getLastElement(arr) {
    if (arr.length === 0) {
        throw new Error("Массив пуст");
    }
    return arr[arr.length - 1];
}
// 2. Функция swap
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
// 4. Переменные
var stringBox = { content: "Это строка в коробке" };
var numberBox = { content: 42 };
// 5. Вызовы функций и вывод
console.log("Последний элемент массива строк:", getLastElement(["a", "b", "c"])); // "c"
console.log("Последний элемент массива чисел:", getLastElement([1, 2, 3])); // 3
console.log("Swap [1, 'hello']:", swap([1, "hello"])); // ["hello", 1]
console.log("Swap ['a', true]:", swap(["a", true])); // [true, "a"]
console.log("Содержимое stringBox:", stringBox.content);
console.log("Содержимое numberBox:", numberBox.content);
