// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший
// let main_headerId = document.getElementById('main_header');
// main_headerId.style.color = 'azure';
// // -- робить шириниу елементу ul 400 пікселів
// let ulWidth = document.getElementsByTagName('ul');
// ulWidth.offsetWidth = '400px';
// // -- робить шириниу всіх елементів з класом linkList шириною 50%
// let linkList = document.getElementsByClassName('linkList');
// linkList.offsetWidth = '50%';
// // -- отримує текст який зберігається в елементі з класом listElement2
let listElement2 = document.getElementsByClassName('listElement2');
console.log(listElement2);
console.log(listElement2[0].innerText);
// -- отримує всі елементи li та змінює ім колір фону на сірий
let lishky = document.getElementsByTagName('li');
console.log(lishky);
for (let i = 0; i < lishky.length; i++) {
    const lishkyElement = lishky[i];
    lishkyElement.style.backgroundColor = 'gray';
}
// -- отримує всі елементи 'a' та додає їм клас anchor
let elemA = document.getElementsByTagName('a');
for (let i = 0; i < elemA.length; i++) {
    const elemAElement = elemA[i];
    elemAElement.classList.add('anchor');
}
// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// for (let i = 0; i < elemA.length; i++) {
//     const elemAElement = elemA[i];
//     if (elemAElement.innerText == 'link3'){
//         elemAElement.style.fontSize = '40px';
//     }
// }
// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// for (let i = 0; i < elemA.length; i++) {
//     const elemAElement = elemA[i];
//     elemAElement.classList.add(`element_${elemAElement.innerText}`);
// };
// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let sub_header = document.getElementsByClassName('sub-header');
// for (const elemSub of sub_header) {
//     elemSub.style.backgroundColor = prompt('colir');
// }
// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// for (const elemSH of sub_header) {
//     if (elemSH.innerText == 'content 2 segment') {
//         elemSH.style.color = prompt('Text color');
//     }
// };
// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let content_1 = document.getElementsByClassName('content_1');
// for (const content1Element of content_1) {
//     content1Element.innerText = prompt('Введіть текст');
// }
// -- отримати елементи p та змінити їм paddin на довільне значення
// let elemP = document.getElementsByTagName('p');
// for (const elemPElement of elemP) {
//     elemPElement.style.padding = '50px';
// }
// -- отримати елементи з класом text2 та змінити їм текст на довільне значення
let text2 = document.getElementsByClassName('text2');
for (const textElem of text2) {
    textElem.innerText = 'Змінений текст';
}