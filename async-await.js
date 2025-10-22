//функия которя имитирует аснхронную операцию (задержку)
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//используй asunc/await
async function main() {
    console.log("Начинаю...");
    await delay(2000); //ждем 2 секунды
    console.log("Закончил через 2 секунды");
}

main();