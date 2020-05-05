// - создать массив с 20 числами.
let array = [12, 34, 438, -1, 87, 435, 5, 40, 34, 98, 56, 43, 23, 90, 22, -23, 999, 46, 32, 76];
// -- при помощи метода sort и колбека  отсортировать массив.
// let sortArr = array.sort();

// console.log(sortArr);
// array.sort(function (a, b) {
//     return a - b;
// });
//
// console.log(array);
// -- при помощи метода
// sort и колбека отсортировать массив в ниспадающем напралении.
// array.sort(function (a, b) {
//     return b - a;
// });
// console.log(array);
// -- при помощи filter получить числа кратные 3
// let filterArr = array.filter(function (number) {
//     if (number % 3 === 0) {
//         return number;
//     }
// });
//
// console.log(filterArr);
// -- при помощи filter получить числа кратные 10
// let filterTen = array.filter(function (number) {
//     if (number % 10 === 0) {
//         return number;
//     }
// });
//
// console.log(filterTen);
// -- перебрать (проитерировать) массив при помощи foreach()
// array.forEach(function (value) {
//     console.log(value);
// });
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// let newArrMap = array.map(function (value) {
//     return value * 3;
// });
//
// console.log(newArrMap);
//
// - создать массив со словами на 15-20 элементов.
let stringsArray = ['Kostya', 'Sasha', 'Oleh', 'Alisa', 'Vitalik', 'Max', 'Denys', 'Sergiy', 'Taras', 'Evgen', 'Svyatoslav', 'Yaroslav', 'Vlad', 'Artur', 'Vasya'];
// -- отсортировать его по алфавиту в восходящем порядке.
// let sortStringsArray = stringsArray.sort(function (a,b) {
//     if (a < b){
//         return -1;
//     } else if (a > b){
//         return 1;
//     }else {
//         return 0;
//     }
// });
//
// console.log(sortStringsArray);

// -- отсортировать его по алфавиту  в нисходящем порядке.
// let sortStrArrDecr = stringsArray.sort(function (a,b) {
//     if (a < b){
//         return 1;
//     }else if (a > b) {
//         return -1;
//     } else {
//         return 0;
//     }
// });
//
// console.log(sortStrArrDecr);
// -- отфильтровать слова длиной менее 4х символов
// let filtrStringArray = stringsArray.filter(value => {
//     if (value.length < 4){
//         return value;
//     }
// });
//
// console.log(filtrStringArray);
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// let mapStringArr = stringsArray.map(value => value + ' !');
// console.log(mapStringArr);
//
// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
    let users = [ {name: 'vasya', age: 31, status: false}, 
                    {name: 'petya', age: 30, status: true}, 
                    {name: 'kolya', age: 29, status: true}, 
                    {name: 'olya', age: 28, status: false}, 
                    {name: 'max', age: 30, status: true}, 
                    {name: 'anya', age: 31, status: false}, 
                    {name: 'oleg', age: 28, status: false}, 
                    {name: 'andrey', age: 29, status: true}, 
                    {name: 'masha', age: 30, status: true}, 
                    {name: 'olya', age: 31, status: false}, 
                    {name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// users.sort(function (a,b) {
//     return a.age - b.age;
// })
// console.log(users);
// users.sort(function(a, b){
//     return b.age - a.age;
// });
// console.log(users);

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// users.sort(function(a,b){
//     if (a.name.length > b.name.length){
//         return 1;
//     } else if (a.name.length < b.name.length){
//         return -1;
//     } else {
//         return 0;
//     }
// });

// console.log(users);

// users.sort(function(a, b){
//     if (a.name.length < b.name.length){
//         return 1;
//     } else if (a.name.length > b.name.length){
//         return -1;
//     } else {
//         return 0;
//     }
// });
// console.log(users);
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
let newUsers = users.map(function (user, index){
    user.id = index;
    return user;
});

console.log(newUsers);
// - відсортувати його за індентифікатором
let newUsersSort = newUsers.sort((a,b) => b .id - a.id);
console.log(newUsersSort);

//
//
// -- наисать функцию калькулятора с 2мя числами и колбеком
function calc(a, b, cb) {
    cb(a,b);
}

calc(1, 1, function (a, b) {
    return a + b;
});
// -- наисать функцию калькулятора с 3мя числами и колбеком
function calculate(a,b,c, callback) {
    callback(a,b,c);
}

calculate(1,1,2,function (a,b,c) {
    return (a + b) * c;
});
//
// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================
//
//
//
//
let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
    {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
    {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
    {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
    {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
    {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
    {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
    {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
    {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
    {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
    {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
    {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
    {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
// let filterCars = cars.filter(function (value) {
//     if (value.volume >= 3) {
//         return value;
//     }
// });
// console.log(filterCars);
// - двигун = 2л
// let volTwo = cars.filter(function (value) {
//     if (value.volume == 2){
//         return value;
//     }
// });
//
// console.log(volTwo);
// - виробник мерс
// let mers = cars.filter(function (value) {
//     if (value.producer == 'mercedes') {
//         return value;
//     }
// });

// console.log(mers);
// - двигун більше 3х літрів + виробник мерседес
// let mersXXX =  cars.filter(function (value) {
//     if (value.volume >= 3 && value.producer == 'mercedes') {
//         return value;
//     }
// });
//
// console.log(mersXXX);
// - двигун більше 3х літрів + виробник субару
// let subaru = cars.filter(value => {
//     if (value.volume >= 3 && value.producer == 'subaru'){
//         return value;
//     }
// });
//
// console.log(subaru);
// - сили більше ніж 300
// console.log(cars.filter(value => value.power > 300));

// - сили більше ніж 300 + виробник субару
// console.log(cars.filter(value => {
//     if (value.power > 300 && value.producer == 'subaru'){
//         return value;
//     }
// }));
// - мотор серіі ej
// let engineEJ = cars.filter(car => {
//    if (car.engine.startsWith('ej')) {
//        return car;
//    }
// });
//
// console.log(engineEJ);
// - сили більше ніж 300 + виробник субару + мотор серіі ej
// console.log(cars.filter(car => {
//     if (car.power > 300 && car.producer == 'subaru' && car.engine.startsWith('ej')){
//         return car;
//     }
// }));
// - двигун меньше 3х літрів + виробник мерседес
// console.log(cars.filter(car => {
//     if (car.volume < 3 && car.producer == 'mercedes') {
//         return car;
//     }
// }));
// - двигун більше 2л + сили більше 250
// cars.filter(car => {
//     if (car.volume > 2 && car.power > 250){
//         return car;
//     }
// });
// - сили більше 250  + виробник бмв
// cars.filter(car => {
//     if (car.power > 250 && car.producer == 'bmw'){
//         return car;
//     }
// });
//
//
//
// - взять слдующий массив
let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];
// -- отсортировать его по id пользователей
// usersWithAddress.sort( (a,b) => a - b
// );
// console.log(usersWithAddress);
// -- отсортировать его по id пользователей в обратном опрядке
// usersWithAddress.sort((a,b)=> b.id - a.id);
// console.log(usersWithAddress);
// -- отсортировать его по возрасту пользователей
// usersWithAddress.sort((user1, user2) => user1.age - user2.age);
// console.log(usersWithAddress);
// -- отсортировать его по возрасту пользователей в обратном порядке
// usersWithAddress.sort((user1, user2) => user2.age - user1.age);
// console.log(usersWithAddress);
// -- отсортировать его по имени пользователей
// usersWithAddress.sort((user1, user2) => {
//     if (user1.name > user2.name) {
//         return 1;
//     } else if (user1.name < user2.name) {
//         return  -1;
//     } else {
//         return 0;
//     }
// });
// console.log(usersWithAddress);
// -- отсортировать его по имени пользователей в обратном порядке
// usersWithAddress.sort((user1, user2) => {
//     if (user1.name > user2.name) {
//         return -1;
//     } else if (user1.name < user2.name) {
//         return  1;
//     } else {
//         return 0;
//     }
// });
// console.log(usersWithAddress);
// -- отсортировать его по названию улицы  в алфавитном порядке
// usersWithAddress.sort((user1, user2) => {
//     if (user1.address.street > user2.address.street){
//         return 1;
//     } else if (user1.address.street < user2.address.street) {
//         return -1;
//     } else {
//         return 0;
//     }
// });
//
// console.log(usersWithAddress);
// -- отсортировать его по номеру дома по возрастанию
// usersWithAddress.sort((user1, user2) => user1.address.number - user2.address.number);
// console.log(usersWithAddress);
// -- отфильтровать (оставить) тех кто младше 30
// console.log(usersWithAddress.filter((user) => user.age < 30));
// -- отфильтровать (оставить) тех у кого отрицательный статус
// console.log(usersWithAddress.filter(user => user.status == false));
// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// console.log(usersWithAddress.filter(user => {
//     if (user.status == false && user.age < 30){
//         return user;
//     }
// }));
// -- отфильтровать (оставить) тех у кого номер дома четный
// console.log(usersWithAddress.filter(user => {
//     if (user.address.number % 2 === 0) {
//         return user;
//     }
// }));
//
//
// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================
//
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.

let listDriver = [{id: 1, name: 'vasya', age: 31,experience: 5, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30,experience: 8, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29,experience: 8, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28,experience: 10, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30,experience: 11, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31,experience: 13, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28,experience: 4, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29,experience: 6, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30,experience: 9, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31,experience: 3, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31,experience: 5, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];

class Car {
    constructor(marka, power, owner, price, year) {
        this.marka = marka;
        this.power = power;
        this.owner = owner;
        this.price = price;
        this.year = year;
    }

}
let mercedes = new Car('Mercedes-benz s63', 500, {name: 'Kostya', age: 23, experience: 5}, 35000, 2008);
let subaru = new Car('Subaru Impreza WRX ', 500, {name: 'Andriy', age: 22, experience: 5}, 30000, 2003);
let audi = new Car('Audi A8', 460, {name: 'Sergiy', age: 28, experience: 4}, 25000, 2008);
let bmw = new Car('BMW 740', 473, {name: 'John', age: 26, experience: 7}, 22000, 2008);
let toyota = new Car('Toyota Camry', 430, {name: 'Vova', age: 33, experience: 10}, 25000, 2008);
let nissan = new Car('Nissan GT-R Nismo', 600, {name: 'Alisa', age: 25, experience: 5}, 40000, 2010);
let bentley = new Car('Bentley Flying Spur w12', 625, {name: 'Max', age: 22, experience: 3}, 50000, 2011);
let cadillac = new Car('Cadillac CTS', 311, {name: 'Jack', age: 35, experience: 3}, 42000, 2009);
let porshe = new Car('Porshe Panamera 4S', 400, {name: 'Denys', age: 24, experience: 4}, 47000, 2010);

let carsArray = [mercedes, subaru, audi, bmw, toyota, nissan, bentley, cadillac, porshe];


let carTunes = function (percentChanges, car, newDriver ,cb) {
    cb(percentChanges, car);
};

carTunes(10, carsArray, usersWithAddress,function (percentChanges, car) {
    for (let i = 0; i < carsArray.length; i += 2) {
        carsArray[i].power = carsArray[i].power / 100 * percentChanges + carsArray[i].power;
        carsArray[i].price = carsArray[i].price / 100 * 5 + carsArray[i].price;
        if (listDriver[i].experience >= 5) {
            carsArray[i].owner = listDriver[i];
        }
    }
});

console.log(carsArray);

carsArray.forEach(car => {
    if (car.owner.experience < 5 && car.owner.age > 25){
        car.owner.experience = car.owner.experience + 1;
    }
});

console.log(carsArray);

let priceAllCars = 0;

carsArray.forEach(car => {
    priceAllCars = priceAllCars + car.price;
});

console.log('Price all cars = ' + priceAllCars + ' $');



//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
//
//
// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.