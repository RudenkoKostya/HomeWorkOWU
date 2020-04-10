// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// let dog = {
//     name: 'Lucky',
//     age: 7,
//     sex: 'male',
//     breed: 'mops',
//     color: 'black'
// };
// console.log(dog);
// - людину
// let johny = {
//     name: 'John',
//     age: 23,
//     weight: 100,
//     height: 175,
//     muscles: 'normal'
// };
// console.log(johny);
// // - автомобіль
// let car = {
//     marka: 'Opel',
//     model: 'Astra G',
//     age: 22,
//     engineV: 1.6,
//     color: 'gray'
// };
// // - квартиру
// let flat = {
//     square: 35,
//     kitchen: 1,
//     bedroom: 1,
//     bathroom: 1,
//     price: 25.000
// };
// - книгу
// let book = {
//     title: 'Learning JavaScript',
//     author: 'Ethan Brown',
//     publichingHouse: "O'Reilly",
//     size: 367,
//     price: 350
// };
//
// -- Створити масив та вивести його в консоль:
//     - з 5 собак
// let dogs = ['Buldog', 'Mops', 'Pitbul', 'Chao-chao', 'Toj terier'];
// // - 3 5 людей
// let people = ['Alisa', 'Kostya',  johny, 'Ethan', 'Max'];
// console.log(people);
// // - з 5 автомобілів
// let cars = ['Audi', 'Mersedes-benz', 'Opel', 'BMW', 'Toyota'];
//
// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом

// - будинок
// let house = {
//     square: 150,
//     floor: 3,
//     rooms: {
//         kitchen: 15,
//         bathroom: 5,
//         bedroom: 20,
//         guestroom: 20,
//         childroom: 10
//     },
//     material: ['Цегла', 'Металевий каркас', 'Деревина', 'Бетон']
// };
// console.log(house);


// - водій
// let driver = {
//     name: 'Valeriy',
//     age: 35,
//     category: ['A', 'B', 'C', 'CE', 'D'],
//     experiense: 15,
// };
// - іграшку
// let toy = {
//     name: 'Maseratti',
//     material: 'Metal',
//     features: ['Радіоуправління', 'Швидкість', 'Дистанція 50м від джойстика', 'Можливість управління смартфоном'],
//     size: {
//         height: 70,
//         width: 25,
//         weight: 10,
//         value: 'cm & kg'
//     }
// };
// - стіл
// let table = {
//     color: 'gray',
//     material: 'Dub',
//     features: ['Під ваш інтерьєр', 'Легкий у використанні', 'Розкладається'],
//     detali: {
//         nizhky: 4,
//         osnova: 1,
//         bolt: 4,
//         shurup: 24
//     },
//     weight: 30
// };
// - сумка
// let bag = {
//     color: 'black',
//     model: 'Mens classic',
//     features: ['Good size', 'Classic style', 'Top design'],
//     detali: {
//         viddily: 5,
//         height: 30,
//         width: 15,
//         weight: 1
//     },
//     material: 'Leather'
// };
//
//
//
// Дан массив:
    let users = [
        {name: 'vasya', age: 31, status: false},
        {name: 'petya', age: 30, status: true},
        {name: 'kolya', age: 29, status: true},
        {name: 'olya', age: 28, status: false},
        {name: 'max', age: 30, status: true},
        {name: 'anya', age: 31, status: false},
        {name: 'oleg', age: 28, status: false},
        {name: 'andrey', age: 29, status: true},
        {name: 'masha', age: 30, status: true},
        {name: 'olya', age: 31, status: false},
        {name: 'max', age: 31, status: true}
    ];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// // - статус Андрія
// console.log(users[7].status);
// // - статус Максима
// console.log(users[users.length - 1].status);
// // - ім'я передостаннього об'єкту
// console.log(users[users.length - 2].name);
// // - ім'я третього об'єкта
// console.log(users[2].name);
// // - вік Олега
// console.log(users[6].age);
// // - вік Олі
// console.log(users[users.length - 2].age);
// // - вік + ім'я 5го об'єкта
// console.log(users[4].age + users[4].name);
// // - вік + сатус Анни
// console.log(users[5].age);
// console.log(users[5].status);
// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!
//
// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
let content = document.getElementById('content');
console.log(content.innerText);
// - отримує текст з блоку з id "rules"
let rules = document.getElementById('rules');
console.log(rules.innerText);
// - замініть текст параграфа з id 'content' на будь-який інший
content.innerText = 'Тут були правила бійцівського клубу';
// - замініть текст параграфа з id 'rules' на будь-який інший
rules.innerText = 'Тут були правила';
// - змініть кожному елементу колір фону на червоний
let elements = document.getElementsByTagName('*');
console.log(elements);
for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    element.style.backgroundColor = 'red';
}
// - змініть кожному елементу колір тексту на синій
for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    element.style.color = 'blue';
}
// - отримати весь список класів елемента з id=rules і вивести їх в console.log
let elementIdRules = document.getElementById('rules');
console.log(elementIdRules);
// - отримати всі елементи з класом fc_rules
let fc_rules = document.getElementsByClassName('fc_rules');
console.log(fc_rules);
// - поміняти колір тексту у всіх елементів fc_rules на червоний
for (let i = 0; i < fc_rules.length; i++) {
    const fc_rule = fc_rules[i];
    fc_rule.style.color = 'red';
}
//
// ====================
// ====================
// ====================
//
// =================
// =====class=======
// =================
// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший
// -- робить шириниу елементу ul 400 пікселів
// -- робить шириниу всіх елементів з класом linkList шириною 50%
// -- отримує текст який зберігається в елементі з класом listElement2
// -- отримує всі елементи li та змінює ім колір фону на сірий
// -- отримує всі елементи 'a' та додає їм клас anchor
// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// -- отримати елементи p та змінити їм paddin на довільне значення
// -- отримати елементи з класом text2 та змінити їм текст на довільне значення