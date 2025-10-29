//1. переменныес типами 
var product = "Msi katana";
var price = 69990;
var lable = true;
//3. переменные laptop типа Product
var laptop = {
    title: "Msi katana",
    price: 69990,
    inStock: true
};
//4. функция printProductInfo
function printProductInfo(product) {
    console.log("\u0422\u043E\u0432\u0430\u0440: ".concat(product.title, ", \u0426\u0435\u043D\u0430: ").concat(product.price, ", \u0412 \u043D\u0430\u043B\u0438\u0447\u0438\u0438: ").concat(product.inStock));
}
//5. вызов функции 
printProductInfo(laptop);
