// // создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// let user = {
//     name: 'Kostya',
//     age: 23,
//     status: 'married'
// }
//
// let bottle = {
//     label: 'blue',
//     volume: 2,
//     material: 'plastic'
// }
//
// let pensil = {
//     color: 'blue',
//     madeIn: 'Germany',
//     price: 20
// }
//
// let niveaPena = {
//     model: 'Ultra',
//     baloon: '200ml',
//     company: 'Nivea'
// }
//
// let parfum = {
//     smell: 'Atlantica',
//     structure: ['Citrus', 'Muscat', 'Rose'],
//     sex: 'For Men'
// }
//
// // - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// let iAm = {
//     name: 'Kostya',
//     age: 23,
//     hobby: 'Canoe Slalom',
//     wife: {
//         name: 'Alisa',
//         age: 24,
//         hobby: 'Adventures'
//     },
//     skills: ['HTML', 'CSS', 'JSbeginer', 'self-development']
// }
//
// let myCar = {
//     marka: 'Opel Astra',
//     year: 1998,
//     color: 'GrayBlue',
//     equipment: ['conditioner', 'magnitola', 'automat'],
//     features: {
//          maxSpeed: 200,
//         distance: 130000,
//         engine: 1.6
//     }
// }
//
// let myBoat = {
//     model: 'SaltoXl',
//     company: 'Vajda',
//     features: ['Speed', 'Great control', 'Light weight'],
//     innerFeatures: {
//         material: 'Carbon',
//         weight: 9,
//         long: 3.5
//     },
//     color: 'Ultramarine'
// }
// // - При помощи for in вывести все ключи всех объектов из задания 1 и 2
// // for (let userEl in user) {
// //     console.log(userEl);
// // }
// //
// // for (let bottleKeys in bottle) {
// //     console.log(bottleKeys);
// // }
// //
// // for (let pensilKeys in pensil) {
// //     console.log(pensilKeys);
// // }
// //
// // for (let niveaKeys in niveaPena) {
// //     console.log(niveaKeys);
// // }
// //
// // for (let parfumeKeys in parfum) {
// //     console.log(parfumeKeys);
// // }
// //
// // for (let iAmKeys in iAm) {
// //     console.log(iAmKeys);
// // }
// //
// // for (let myCarKeys in myCar) {
// //     console.log(myCarKeys);
// // }
// //
// // for (let myBoatKeys in myBoat){
// //     console.log(myBoatKeys);
// // }
// // - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// let iAmKeys = Object.keys(iAm);
// console.log(iAmKeys);
// let userKeys = Object.keys(user);
// console.log(userKeys);
//
// let bottleKeys = Object.keys(bottle);
// console.log(bottleKeys);
//
// let pensilKeys = Object.keys(pensil);
// console.log(pensil);
//
// let parfumeKeys = Object.keys(parfum);
// console.log(parfum);
//
// let niveaKeys = Object.keys(niveaPena);
// console.log(niveaKeys);
//
// let myCarKeys = Object.keys(myCar);
// console.log(myCarKeys);
//
// let myBoatKeys = Object.keys(myBoat);
// console.log(myBoatKeys);
// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
// let cars = [
//     {
//         Mersedes: 'w221',
//         year: 2008,
//         powerEngine: '500 л.с.',
//         color: 'Black'
//     },
//     {
//         Audi: 'A8',
//         year: 2008,
//         powerEngine: '460 л.с.',
//         color: "Black"
//     },
//     {
//         BMW: '740',
//         year: 2008,
//         powerEngine: '473 л.с.',
//         color: 'Black'
//     },
//     {
//         Toyota: 'Camry',
//         year: 2008,
//         powerEngine: '430 л.с.',
//         color: 'Black'
//     },
//     {
//         Nissan: 'GT-R Nismo',
//         year: 2010,
//         powerEngine: '600 л.с.',
//         color: 'Red'
//     },
//     {
//         Bentley: 'Flying Spur w12',
//         year: 2011,
//         powerEngine: '625 л.с.',
//         color: 'Black'
//     },
//     {
//         Cadillac: 'CTS',
//         year: 2009,
//         powerEngine: '311 л.c.',
//         color: 'Black'
//     },
//     {
//         Porshe: 'Panamera 4S',
//         year: 2010,
//         powerEngine: '400 л.с.',
//         color: 'White'
//     },
//     {
//         Subaru: 'Impreza WRX STI',
//         year: 2007,
//         powerEngine: '400 л.с.',
//         color: 'Black'
//     },
//     {
//         MersedesBenz: 'E63 AMG',
//         year: 2011,
//         powerEngine: '525 л.с.',
//         color: 'Black'
//     }
// ]
// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
// let cities = [
//     {
//         name: 'Madrid',
//         country: 'Spain',
//         region: 'Europe',
//         population: '3.2 mln.p.'
//     },
//     {
//         name: 'London',
//         country: 'England',
//         region: 'Europe',
//         population: '7.5 mln.p.'
//     },
//     {
//         name: 'Berlin',
//         country: 'Germany',
//         region: 'Europe',
//         population: '3.47 mln.p.'
//     },
//     {
//         name: 'Kyiv',
//         country: 'Ukraine',
//         region: 'Europe',
//         population: '2.8 mln.p.'
//     },
//     {
//         name: 'Roma',
//         country: 'Italy',
//         region: 'Europe',
//         population: '2.7 mln.p'
//     },
//     {
//         name: 'Paris',
//         country: 'France',
//         region: 'Europe',
//         population: '2.2 mln.p.'
//     },
//     {
//         name: 'Budapesht',
//         country: 'Hungary',
//         region: 'Europe',
//         population: '1.7 mln.p.'
//     },
//     {
//         name: 'Warsaw',
//         country: 'Poland',
//         region: "Europe",
//         population: '1.7 mln.p.'
//     },
//     {
//         name: 'Vienna',
//         country: 'Austria',
//         region: "Europe",
//         population: '1.67 mln.p.'
//     },
//     {
//         name: 'Prague',
//         country: 'Czech Republic',
//         region: "Europe",
//         population: '1.2 mln.p'
//     }
// ]
// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
// let carS = [
//     {
//         model: 'BMW X5',
//         year: 2010,
//         engine: 3,
//         color: 'Silver',
//         driver: {
//             name: 'Andriy',
//             age: 22,
//             sex: 'male',
//             experience: 4
//         }
//     },
//     {
//         model: 'Porshe Panamera',
//         year: 2014,
//         engine: 3.6,
//         color: 'white',
//         driver: {
//             name: 'Pavlo',
//             age: 26,
//             sex: 'male',
//             experience: 8
//         }
//     },
//     {
//         model: 'Mercedes-Benz GL550 AMG',
//         year: 2013,
//         engine: 4.7,
//         color: 'Black',
//         driver: {
//             name: 'Kostya',
//             age: 23,
//             sex: 'male',
//             experience: 5
//         }
//     },
//     {
//         model: 'Mercedes-Benz C63 AMG',
//         year: 2019,
//         engine: 4,
//         color: 'Gray',
//         driver: {
//             name: 'Sergiy',
//             age: 31,
//             sex: 'male',
//             experience: 11
//         }
//     },
//     {
//         model: 'Porshe Macan',
//         year: 2019,
//         engine: 2,
//         color: 'Gray',
//         driver: {
//             name: 'Alisa',
//             age: 24,
//             sex: 'female',
//             experience: 2
//         }
//     }
// ];
// - проитерировать каждый массив из задания 5,6,7 при помощи while.
// let i = 0;
// while (i < cars.length) {
//     console.log(cars[i]);
//     i++;
// }
//
// let a = 0;
// while (a < cities.length) {
//     console.log(cities[a]);
//     a++;
// }
//
// let b = 0;
// while (b < carS.length) {
//     console.log(carS[b]);
//     b++;
// }
// - проитерировать каждый массив из задания 5,6,7 при помощи for .
// for (let j = 0; j < cars.length; j++) {
//     const iAmElement = cars[j];
//     console.log(iAmElement);
// }
//
// for (let c = 0; c < cities.length; c++) {
//     console.log(cities[c]);
// }
//
// for (let v = 0;v < carS.length; v++) {
//     console.log(carS[v]);
// }
// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// for (const carsEl of cars) {
//     console.log(carsEl);
// }
//
// for (const citiesEl of cities) {
//     console.log(citiesEl);
// }
//
// for (const carSEl of carS) {
//     console.log(carSEl);
// }
// - взять объекты из задания 1 и превратить каждый в json.
// let userJSON = JSON.stringify(user);
// console.log(userJSON);
//
// let bottleJSON = JSON.stringify(bottle);
// let pensilJSON = JSON.stringify(pensil);
// let niveaJSON = JSON.stringify(niveaPena);
// let parfumeJSON = JSON.stringify(parfum);
// 12- взять json из задания 11 и превратить их обратно в объекты.
// let bottleParse = JSON.parse(bottleJSON);
// console.log(bottleParse);
//
// let userParse = JSON.parse(userJSON);
// let pensilParse = JSON.parse(pensilJSON);
// let niveaParse = JSON.parse(niveaJSON);
// let parfumeParse = JSON.parse(parfumeJSON);
// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// for (let carsElem of cars) {
//     let carsJSON = JSON.stringify(carsElem);
//     console.log(carsJSON);
// }

// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// for (let citiesElem of cities){
//     let citiesJSON = JSON.stringify(citiesElem);
//     console.log(citiesJSON);
// }
// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// for (let carSElem of carS){
//     let carSJSON = JSON.stringify(carSElem);
//     console.log(carSJSON);
// }
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// let users = [
//     {
//         name: 'Kostya',
//         age: 23,
//         skills: ['JS', 'HTML', 'CSS']
//     },
//     {
//         name: 'Alisa',
//         age: 24,
//         skills: ['Photoshop', 'Sales', 'Marketing']
//     },
//     {
//         name: 'John',
//         age: 26,
//         skills: ['Python', 'Jango', 'Html', 'Css']
//     },
//     {
//         name: 'Alexis',
//         age: 25,
//         skills: ['Java', 'HTML', 'CSS']
//     }
// ];
//
// for (let usersEL of users) {
//     console.log(usersEL);
//     for (let iEL = 0; iEL < usersEL.skills.length; iEL++){
//         console.log(usersEL.skills[iEL]);
//     }
// }
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
// let skillsArr = [];
// for (let usersEL of users) {
//     console.log(usersEL);
//     for (let iEL = 0; iEL < usersEL.skills.length; iEL++){
//         console.log(usersEL.skills[iEL]);
//     }
//     skillsArr.push(usersEL.skills);
// }
// console.log(skillsArr);
//
// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
// for (let usersElem of users){
//     console.log(usersElem);
//     for (let skillInd = 0; skillInd < usersElem.skills.length; skillInd++ ){
//         console.log(usersElem.skills[skillInd]);
//     }
// }
//
//
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let addressUsers = [];
// for (const user1 of users) {
//     addressUsers.push(user1.address);
// };
// console.log(addressUsers);
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// for (let user of users) {
//     let userEl = document.createElement('div');
//     for (let userKey in user) {
//         let innerUser = document.createElement('div');
//         innerUser.innerText = `${user[userKey]}`;
//
//         userEl.appendChild(innerUser);
//     }
//     for (const userAddress in user.address) {
//         let userAd = document.createElement('div');
//         userAd.innerText = user.address[userAddress];
//         userEl.appendChild(userAd);
//     }
//     document.body.appendChild(userEl);
// };

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
//

//
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// let newArr = [];
// for (let userEl of usersWithId) {
//     for (let citiesEl of citiesWithId) {
//         if (userEl.id == citiesEl.user_id){
//             newArr.push(userEl, citiesEl);
//         }
//     }
// }
// console.log(newArr);
// Частковий приклад реультату:
//     let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]
//
//
//
//
//
// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// let newElement = document.createElement('div');
// newElement.classList.add('newElem');
// newElement.id = 'newEl';
// newElement.innerText = 'new div';
// document.body.appendChild(newElement);
// let elemDivtag = document.getElementsByTagName('div');
// let divWithId = document.getElementById('newEl');
// let newElemclas = document.getElementsByClassName('newElem');


// - змінити цей текст використовуючи селектори id, class,  tag
// newElemclas.innerText = 'first text';
// console.log(newElemclas);
// divWithId.innerText = 'second text';
// elemDivtag.innerText = 'zero text';
// console.log(elemDivtag);
// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// newElemclas.width = '100px';
// divWithId.style.height = '100px';
// divWithId.style.backgroundColor = 'coral';
// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// let table = document.createElement('table');
// let tr = document.createElement('tr');
// let td1 = document.createElement('td');
// let td2= document.createElement('td');
// let td3 = document.createElement('td');
//
// tr.appendChild(td1);
// tr.appendChild(td2);
// tr.appendChild(td3);
//
// table.appendChild(tr);
// document.body.appendChild(table);

// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// for (let trInd = 0; trInd < 10; trInd++){
//     let trNew = document.createElement('tr');
//     for (tdInd = 0;tdInd < 3; tdInd++){
//         let tdNew = document.createElement('td');
//         tdNew.innerText = `${tdInd + 1}`;
//         trNew.appendChild(tdNew);
//     }
//     table.appendChild(trNew);
// }
// document.body.appendChild(table);

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
// let tablePrompt = document.createElement('table');
// let n = prompt('Скільки рядків потрібно?');
// let m = prompt('Скільки осередків потрібно?');
// parseInt(n);
// parseInt(m);
// for (let trI = 0; trI < n; trI++){
//     let trBurn = document.createElement('tr');
//     for (let tdI = 0;tdI < m; tdI++){
//         let tdBurn = document.createElement('td');
//         tdBurn.innerText = `${tdI + 1}`;
//         trBurn.appendChild(tdBurn);
//     }
//     tablePrompt.appendChild(trBurn);
// }
// document.body.appendChild(tablePrompt);
//
// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
// - знайти всі елементі, які мають class
// - знайти всі параграфи ,та змінити текст на hello oktenweb!
// let arrP = document.getElementsByTagName('p')
// for (const pEl of arrP) {
//     pEl.innerText = 'hello oktenweb';
// }
//     - знайти всі div та змінити ім колір на червоний
// let divElement = document.getElementsByTagName('div');
// ============
// ====class===
//     ============
//
//     - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
let h2 = document.getElementsByTagName('h2');
let content = document.getElementById('content');
let ul = document.createElement('ul');
for (let h2El of h2){
    let li = document.createElement('li');
    let h2Clone = h2El.cloneNode(true);
    li.appendChild(h2Clone);
    ul.appendChild(li);
}

content.appendChild(ul);
//
// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];
let rulesDiv = document.createElement('div');
for (let rule of rules){
    let ruleDiv = document.createElement('div');
    let titleDiv = document.createElement('div');
    let bodyDiv = document.createElement('div');

    titleDiv.innerText = rule.title;
    bodyDiv.innerText = rule.body;

    ruleDiv.appendChild(titleDiv);
    ruleDiv.appendChild(bodyDiv);
    rulesDiv.appendChild(ruleDiv);
}

document.body.appendChild(rulesDiv);
//
//
//
//
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
// fetch('https://jsonplaceholder.typicode.com/users').then((users) => {
//     return users.json();
// }).then(usersJSON => {
//     for (let user of usersJSON) {
//         console.log(user);
//         let userDiv = document.createElement('div');
//         let userAddress = document.createElement('div');
//         userAddress.innerText = `${user.address.street}`;
//
//         userDiv.appendChild(userAddress);
//         document.body.appendChild(userDiv);
//     }
// });
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту
