// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
// const textarea = document.getElementById('textarea');
// textarea.value = localStorage.getItem('text');
// textarea.oninput = (ev) => {
//     localStorage.setItem('text', ev.target.value);
// }
// const myForm = document.forms.myForm;
// getDataForm(myForm);
// function saveForm(t) {
//     setDataForm(t);
// }
//
// function setDataForm(tag) {
//     for (let i = 0; i < tag.length; i++) {
//         if (tag.children[i].name === 'checkbox' || tag.children[i].name === 'radio')
//             tag.children[i].checked
//                 ? tag.children[i].value = true
//                 : tag.children[i].value = false
//         localStorage.setItem(tag.children[i].id, tag.children[i].value);
//     }
// }
//
// function getDataForm(tag) {
//     for (let i = 0; i < localStorage.length; i++) {
//         if (localStorage.hasOwnProperty(tag.children[i].id)){
//             tag.children[i].value = localStorage.getItem(tag.children[i].id);
//             if (tag.children[i].value === true) {
//                 tag.children[i].setAttribute('checked', 'checked');
//             }
//         }
//     }
// }
//
// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// //     Сделайте ваш скрипт как можно более универсальным.
//
// let text = document.getElementById('text');
// let arrow_left = document.getElementById('arrow_left');
// let arrow_right = document.getElementById('arrow_right');
// let save = document.getElementById('save');
//
// save.onclick = () => {
//     localStorage.setItem(localStorage.length + 1, text.value);
// }
//
// arrow_left.onclick = () => {
//     arrow_right.style.visibility = 'visible';
//     let index;
//     for (const key in localStorage) {
//         if (localStorage.hasOwnProperty(key)){
//             if (localStorage.getItem(key) === text.value) {
//                 index = key;
//             }
//         }
//     }
//     if (index === '1') {
//         arrow_left.style.visibility = 'hidden';
//         return;
//     }
//     text.value = localStorage.getItem(index - 1);
// };
//
// arrow_right.onclick = () => {
//     arrow_left.style.visibility = 'visible';
//     let index;
//     for (const key in localStorage) {
//         if (localStorage.hasOwnProperty(key)){
//             if (localStorage.getItem(key) === text.value) {
//                 index = key;
//             }
//         }
//     }
//     if (index === localStorage.length.toString()) {
//         arrow_left.style.visibility = 'hidden';
//         return;
//     }
//     text.value = localStorage.getItem(+index + 1);
// };
//
// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
//
// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
