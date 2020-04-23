// - створити функцію яка виводить масив 1
// let arrayForFunction = [1,2,3,4,5,6,7,8];
// function arrayLog(array) {
//     console.log(array);
//     return array;
// };
//  2- створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
// let arrayForPush = [];
// function arrPush(pushEl, maxEl) {
//     for (let i = 0;i < maxEl;i++) {
//         pushEl.push(Math.floor(Math.random() * Math.floor(100)));
//     }
//     arrayLog(pushEl);
// }

// arrPush(arrayForPush, 6);



//  3 - створити функцію яка приймає три числа та виводить та повертає найменьше.
// function littleNumber(a, b, c) {
//     if (a < b && a < c){
//         console.log(a);
//         return a;
//     } else if (b < a && b < c ) {
//         console.log(b);
//         return b;
//     } else {
//         console.log(c);
//         return c;
//     }
// };
//
// let littleNum = littleNumber(2,5, 1);

// console.log(littleNum);
//4 - створити функцію яка приймає три числа та виводить та повертає найбільше.
// function bigNumber(a, b, c) {
//     if (a > b && a > c) {
//         console.log(a);
//         return a;
//     } else if (b > a && b > c){
//         console.log(b);
//         return b;
//     } else {
//         console.log(c);
//         return c;
//     }
// };
//
// bigNumber(4,17,10);
//5 - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function returnMinPrintMax() {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const item of arguments){
//         if (item > max) max = item;
//         if (item < min) min = item;
//     }
//     console.log('max');
//     console.log(max);
//     return min;
// }
//
// let minNumber = returnMinPrintMax(2,42,32,12,564, 2,4,1,0,98,4,4,34,6);
// console.log('minNumber');
// console.log(minNumber);
// - створити функцію яка виводить масив
// function printArr(array) {
//     console.log(array);
// };

// - створити функцію яка повертає найбільше число з масиву
// function maxNumArr(array) {
//     let max = array[0];
//     for (let arrayEl of array) {
//         if (arrayEl > max) max = arrayEl;
//     }
//     console.log(max);
//     return max;
// };
//
// maxNumArr([23234, 23,12223,999999, 8987, 73,43 ,3423,5]);
// - створити функцію яка повертає найменьше число з масиву
// function minNumArr(array) {
//     let min = array[0];
//     for (let arrayEl of array) {
//         if (arrayEl < min) min = arrayEl;
//     }
//     console.log(min);
//     return min;
// };
//
// minNumArr([23, 4839, 232, 98, 89, 76, 66, 21]);


// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// function sumArr(array) {
//     let sum = 0;
//     for (arrayElem of array) {
//         sum = arrayElem + sum;
//     }
//     console.log(sum);
//     return sum;
// };
//
// sumArr([2,2,2,2,2,2,2,2,2,2]);
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function middleNumArr(array) {
//     let sum = 0;
//     for (let arrElem of array) {
//         sum = arrElem + sum;
//     }
//     let middNum = sum / array.length;
//     console.log(middNum);
//     return middNum;
// };
// middleNumArr([22,22,22,22,22,22,20]);
// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// function objArr(array) {
//     let obj = 0;
//     for (let arrElem of array) {
//         if (typeof arrElem == 'object') {
//             obj = obj + 1;
//         }
//     }
//     console.log(`В цьому масиві ${obj} об'єкти`);
// };
//
// objArr([{name: 'kostya', age: 23}, 23, 'ksdo', 87, {name: 'vasya', age: 87}, 82, 'ksdof', {name: 'alisa', age: 64}]);

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// function objKeys(array) {
//     let objKeysSum = 0;
//     for (let arrayObj of array) {
//         for (const objKey in arrayObj) {
//             objKeysSum = objKeysSum + 1;
//         }
//     }
//     console.log(`Загальна кількість ключів = ${objKeysSum}`);
// };
// objKeys([ { key: 'слово', value: 'значение1' },
//                 { key: 'слово2', value: 'значение2' },
//                 { key: 'слово3', value: 'значение3' }]);
// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     Приклад
//     [1,2,3,4]
//     [2,3,4,5]
// результат
// function sumArray(array1, array2) {
//     let newArr = [];
//     for (let i = 0; i < array1.length; i++){
//         newArr.push(array1[i] + array2[i]);
//     }
//     console.log(newArr);
//     return newArr;
// };
//
// sumArray([1,1,1,1,1],[2,2,2,2,2]);

//     [3,5,7,9]
// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.

// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
// function zeroElEnd(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === 0 ) {
//             let zero = array.splice(i ,1);
//             array.push(zero[0]);
//         }
//     }
//     console.log(array);
// };
// zeroElEnd([0,1,2,3,4]);
// zeroElEnd([1,0,6,0,3]);
// zeroElEnd([0,0,1,0]);

//
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// function addTextInBody() {
//     let divHello = document.createElement('div');
//     divHello.innerText = 'Hello owu';
//     document.body.appendChild(divHello);
// }
//
// addTextInBody();
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// function addElemWithText(type, text) {
//     let Elem = document.createElement(type);
//     Elem.innerText = text || 'Hello OWU';
//     document.body.appendChild(Elem);
// }
//
// addElemWithText('div', 'Hello Function');
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
let cars = [
    {
        name: 'Mersedes: w221',
        year: 2008,
        powerEngine: '500 л.с.',
        color: 'Black'
    },
    {
        name: 'Audi: A8',
        year: 2008,
        powerEngine: '460 л.с.',
        color: "Black"
    },
    {
        name: 'BMW: 740',
        year: 2008,
        powerEngine: '473 л.с.',
        color: 'Black'
    },
    {
        name: 'Toyota: Camry',
        year: 2008,
        powerEngine: '430 л.с.',
        color: 'Black'
    },
    {
        name: 'Nissan: GT-R Nismo',
        year: 2010,
        powerEngine: '600 л.с.',
        color: 'Red'
    },
    {
        name: 'Bentley: Flying Spur w12',
        year: 2011,
        powerEngine: '625 л.с.',
        color: 'Black'
    },
    {
        name: 'Cadillac: CTS',
        year: 2009,
        powerEngine: '311 л.c.',
        color: 'Black'
    },
    {
        name: 'Porshe: Panamera 4S',
        year: 2010,
        powerEngine: '400 л.с.',
        color: 'White'
    },
    {
        name: 'Subaru: Impreza WRX STI',
        year: 2007,
        powerEngine: '400 л.с.',
        color: 'Black'
    },
    {
        name: 'MersedesBenz: E63 AMG',
        year: 2011,
        powerEngine: '525 л.с.',
        color: 'Black'
    }
];


function carsList(cars, id) {

    for (const carEl of cars) {
        let ids = document.getElementById(id);
        let carDiv = document.createElement('div');
        // carDiv.innerText = carEl.name;
            let featuresDiv = document.createElement('div');
            let yearDiv = document.createElement('div');
            let powerDiv = document.createElement('div');
            featuresDiv.innerText = carEl.name;
            yearDiv.innerText = carEl.year;
            powerDiv.innerText = carEl.powerEngine;

            carDiv.appendChild(featuresDiv);
            carDiv.appendChild(yearDiv);
            carDiv.appendChild(powerDiv);
        ids.appendChild(carDiv);
    }
}

carsList(cars, 'carList');

// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
//
// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// let filterArr = [];
// function concatFiltArray(userIdArr, citiesIdArr) {
//
//     for (let i = 0; i < userIdArr.length; i++) {
//         for (let a = 0; a < citiesIdArr.length; a++) {
//             if (userIdArr[i].id === citiesIdArr[a].user_id) {
//                 filterArr.push(userIdArr[i]);
//                 filterArr.push(citiesIdArr[a]);
//             }
//         }
//     }
//     return filterArr;
// };
// let resultFiltration = concatFiltArray(usersWithId, citiesWithId);
// console.log(resultFiltration);
//
//
//
// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},
//             ];
//
// function constrDiv(array) {
//     let block = document.createElement('div');
//     for (arrEl of array) {
//         let arrElDiv = document.createElement('div');
//         let title = document.createElement('div');
//         let body = document.createElement('div');
//
//         title.innerText = arrEl.title;
//         body.innerText = arrEl.body;
//
//         arrElDiv.appendChild(title);
//         arrElDiv.appendChild(body);
//         block.appendChild(arrElDiv);
//     }
//     document.body.appendChild(block);
// };
// constrDiv(rules);

// "
//
// ===========додаткове від віктора========
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!
//
// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій
//
// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// ===========додаткове========