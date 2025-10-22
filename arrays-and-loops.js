//создай массив с тремя любимыми языками программирования 
let languages = ["JS", "Python", "Go"];

//выведет длинну массива (сколько элементов)
console.log("Кол-во языков:", languages.length);

//выведет каждый элемент массива с помощю цикла for...of
for (let lang of languages) {
    console.log("i love:", lang);
}

//используй обычный цикл for, чтобы вывести индексы и значения
for (let i = 0; i < languages.length; i++) {
    console.log("под индексом " + i + ":", languages[i]);
}