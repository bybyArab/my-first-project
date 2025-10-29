//1. переменныес типами 
let product: string = "Msi katana";
let price: number = 69990;
let lable: boolean = true;

//2. интерфейс Product
interface Product {
    title: string;
    price: number;
    inStock: boolean;
}

//3. переменные laptop типа Product
let laptop: Product = {
    title: "Msi katana",
    price: 69990,
    inStock: true 
};

//4. функция printProductInfo
function printProductInfo (product: Product): void {
    console.log(`Товар: ${product.title}, Цена: ${product.price}, В наличии: ${product.inStock}`);
}

//5. вызов функции 
printProductInfo(laptop);