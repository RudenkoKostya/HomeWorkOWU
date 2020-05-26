// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let div = document.querySelector('#text');
// let btn = document.querySelector('.btn');
// btn.onclick = function () {
//     div.style.display = 'none';
// };

//
//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let btnHiddenSelf = document.querySelector('.btn-hiddenSelf');
// btnHiddenSelf.onclick = function () {
//     btnHiddenSelf.style.display = 'none';
// };
//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// const myBtn = document.querySelector('.btnAge');
//
// myBtn.onclick = ev => {
//     const myInput = document.forms.mainForm.age;
//     const value = myInput.value;
//     value < 18
//     ?console.log('Юзеру менше ніж 18 років')
//     :console.log(`Юзеру ${value} років`)
// };

// const menu = document.querySelector('.menu');
// const ul = document.querySelector('ul');
//
// menu.onclick = ev => {
//     ul.style.display == 'none'
//     ?ul.style.display = 'block'
//         :ul.style.display = 'none'
// };




// - Создайте меню, которое раскрывается/сворачивается при клике
//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// let commentList = [
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'}
// ];
// //     Вывести список комментариев в документ, каждый в своем блоке.
// let container = document.querySelector('.comment');
// commentList.forEach(comment => {
//     let div = document.createElement('div');
//     let btn = document.createElement('button');
//     let h2 = document.createElement('h2');
//     let p = document.createElement('p');
//     h2.innerText = comment.title;
//     p.innerText = comment.body;
//
//
//
//     btn.innerText = 'Off';
//     btn.onclick = ev => {
//         p.style.display == 'block'
//             ?p.style.display = 'none'
//             :p.style.display = 'block'
//     };
//     div.appendChild(h2);
//     div.appendChild(p);
//     div.appendChild(btn);
//     container.appendChild(div);
//
// });


//     Добавьте каждому комментарию по кнопке для сворачивания его body.
//
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.\
// const form1 = document.forms.mainFormOne;
// const form2 = document.forms.mainFormTwo;
// const fBtn = document.getElementById('formBtn');
//
//
// fBtn.onclick = ev => {
//     let name = form1.userName.value;
//     let surname = form1.userSurname.value;
//     let hobby = form2.hobby.value;
//     let job = form2.job.value;
//
//     console.log(`Новий юзер - ${name} ${surname}: хоббі ${hobby}, робота ${job}`);
// };


//
// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
//
//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
// let tableForm = document.forms.tableForm;
// let elTable = document.querySelector('.tableHere');
// function tableGen(tr, td, elemPaste) {
//     const table = document.createElement('table');
//     for (let itr = 0; itr < tr; itr++) {
//         const tR = document.createElement('tr');
//         for (let itd = 0; itd < td; itd++) {
//             const tD = document.createElement('td');
//             let value = tableForm.value.value;
//             tD.innerText = value;
//
//             tR.appendChild(tD);
//         }
//         table.appendChild(tR);
//     }
//     elemPaste.appendChild(table);
// }
//
//
// const getBtn = document.getElementById('tableGenerate');
// getBtn.onclick = ev => {
//     let trValue = tableForm.tr.value;
//     let tdValue = tableForm.td.value;
//     let value = tableForm.value.value;
//     tableGen(trValue, tdValue, elTable);
// };

//
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
// let pageArr = [
//     {
//         id: 1,
//         img_url: 'page/img1.jpg'
//     },
//     {
//         id: 2,
//         img_url: 'page/img2.jpg'
//     },
//     {
//         id: 3,
//         img_url: 'page/img3.jpg'
//     },
//     {
//         id: 4,
//         img_url: 'page/img4.jpg'
//     },
//     {
//         id: 5,
//         img_url: 'page/img5.jpg'
//     },
//     {
//         id: 6,
//         img_url: 'page/img6.jpg'
//     }
// ];
//
// let gallery = document.getElementById('gallery');
// let img = document.createElement('img');
// let btn1 = document.createElement('button');
// let btn2 = document.createElement('button');
//
//
// btn1.innerText = 'Left';
// btn2.innerText = 'Right';
// let index = 0;
// img.width = 300;
// img.src = pageArr[index].img_url;
//
// gallery.appendChild(img);
// gallery.appendChild(btn1);
// gallery.appendChild(btn2);
//
// btn1.onclick = () => {
//     index - 1 < 0
//     ?index = pageArr.length - 1
//         :index = index - 1
//     img.src = pageArr[index].img_url;
// };
//
// btn2.onclick = () => {
//     index + 1 > pageArr.length - 1
//     ?index = 0
//         :index = index + 1
//     img.src = pageArr[index].img_url;
// };
//

//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
//
//
//
// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
//
// -- взять массив пользователей
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
//
//
//
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
//
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан