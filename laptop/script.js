function Laptop(name, model, number, year, ram, rom, weight) {
    this.name = name;
    this.model = model;
    this.number = number;
    this.year = year;
    this.ram = ram;
    this.rom = rom;
    this.weight = weight;
    this.disc = false;
    this.webCam = true;

    this.memoryInfo = function () {
        return `ОЗУ: ${this.ram} ГБ, ПЗУ: ${this.rom} ГБ`;
    };

    this.nameInfo = function () {
        return `Название: ${this.name}, Модель: ${this.model}`
    };
}

function UltraBook(name, model, number, year,  weight, ram, rom,) {
    Laptop.call(this, name, model, number, year, weight, ram, rom);
    // this.disc = false;
    // this.webCam = true;
}

UltraBook.prototype = Object.create(Laptop.prototype);
UltraBook.prototype.constructor = UltraBook;

UltraBook.prototype.nameInfoUltrabook = function () {
    return `Название: ${this.name}, Вес: ${this.weight}, Год: ${this.year}`
};

const laptop1 = new Laptop('lenovo', 'ideapad', 'kgh89', 2023, 8, 256, 3);
console.log(laptop1.memoryInfo());
console.log(laptop1.nameInfo());
console.log(laptop1.disc);
console.log(laptop1.webCam);



const ultrabook1 = new UltraBook('hp', 'bus', 'ffe344', 2024, 3.5, 16, 1024);
console.log(ultrabook1.memoryInfo());
console.log(ultrabook1.nameInfo());
console.log(ultrabook1.nameInfoUltrabook());
console.log(ultrabook1.disc);
console.log(ultrabook1.webCam);