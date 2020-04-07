// let firstArr = [1, 2, 3, 4, 5];
// console.log(firstArr);
//
// let secondArr = ['a', 'b', 'c', 'e', 'd'];
// console.log(secondArr);
//
// let thirdArr = [true, false, 11, 00, 'arr'];
// console.log(thirdArr);
//
// let fourArr = [];
// fourArr[0]  = 1;
// fourArr[1] = 'js';
// fourArr[2] = 'html';
// fourArr[3] = 'css';
// fourArr[4] = true;
// console.log(fourArr);
//
// for (let i = 0; i < 10; i++) {
//     document.write('<div>forewer young</div>');
// }
//
// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let j = 0; j < 10; j++) {
//     document.write(`<div>just do it ${j}</div>`)
// }
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let b = 0;
// while (b < 20) {
//     document.write('<h1>OWU</h1>');
//     b++;
// }
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let c = 0;
// while (c < 20){
//     document.write(`<h1>Quarantino ${c}</h1>`);
//     c++;
// }
// // - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let ArrForI = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let e = 0;e < ArrForI.length;e++) {
//     console.log(ArrForI[e]);
// }
// // - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let stringArr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
// for (let sArr = 0; sArr < stringArr.length; sArr++) {
//     console.log(stringArr[sArr]);
// }
// // - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let diverseArr = [true, false, 777, 888, 999, 'AB', 'Canoe Slalom', 'Dragonboat', 'Vinnytsya', 1100];
// for (let diverse = 0; diverse < diverseArr.length; diverse++) {
//     console.log(diverseArr[diverse]);
// }
// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let boolik = true;
// let ifDiverseArr = [true, false, 89, 'Kostya', 98, 'JS', 78, 'OWU', true, 333];
// for (let ifArr = 0; ifArr < ifDiverseArr.length; ifArr++) {
//     if (typeof ifDiverseArr[ifArr] == typeof boolik) {
//         console.log(ifDiverseArr[ifArr]);
//     }
// }
// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let Numbers = 123;
// for (let nInd = 0; nInd < ifDiverseArr.length; nInd++) {
//     if (typeof ifDiverseArr[nInd] == typeof Numbers) {
//         console.log(ifDiverseArr[nInd]);
//     }
// }
// // - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let str = ' ';
// for (let strInd = 0; strInd < ifDiverseArr.length; strInd++ ){
//     if (typeof ifDiverseArr[strInd] == typeof str){
//         console.log(ifDiverseArr[strInd]);
//     }
// }
// // - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let zeroArr = [];
// zeroArr[0] = 1;
// zeroArr[1] = 'Coca-Cola';
// zeroArr[2] = 'Pepsi';
// zeroArr[3] = '78';
// zeroArr[4] = 1234;
// zeroArr[5] = 1996;
// zeroArr[6] = 'Red-bull';
// zeroArr[7] = true;
// zeroArr[8] = 1 + 1;
// zeroArr[9] = 2 + 2;
// for (let xx = 0; xx < zeroArr.length; xx++) {
//     console.log(zeroArr[xx]);
// }
// // - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let it = 0; it < 10; it++) {
//     console.log(it + 1);
//     document.write(`<div>${it + 1}</div>`);
// }
// // - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let itH = 0; itH < 100; itH++) {
//     console.log(itH + 1);
//     document.write(`<div>${itH + 1}</div>`);
// }
// // - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let iterX = 0; iterX < 100; iterX= iterX + 2){
//     console.log(iterX);
//     document.write(`<div>${iterX}</div>`);
// }
// // - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let it2n = 0; it2n < 100; it2n++){
//         if (it2n % 2 == 0){
//             console.log(it2n);
//             document.write(it2n, '</br>');
//         }
// }
// // - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let it1n = 0; it1n < 100; it1n++) {
//     if (it1n % 2 != 0){
//         console.log(it1n);
//         document.write(it1n, '</br>');
//     }
// }
// // - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// // let minuta = 0;
// // while (minuta < 2) {
// //     for (let secunda = 0; secunda < 60; secunda++){
// //         console.log(secunda + 1);
// //     }
// //     console.log(minuta + 1 + 'min');
// //     minuta ++;
// // }
// // - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// let hodyna = 0;
// while (hodyna < 2) {
//     for (let minuta = 0; minuta < 60; minuta++){
//         console.log(minuta + 1 + 'min');
//         for (let secunda = 0; secunda < 60; secunda++){
//             console.log(secunda + 1 + 'sec');
//         }
//     }
//     console.log(hodyna + 1 + 'hodyna');
//     hodyna ++;
// }
// // Додатково
// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let aBCarr = ['a', 'b', 'c'];
// let arrABC = ' ';
// for (let abc = 0; abc < aBCarr.length; abc++) {
//     arrABC = arrABC + aBCarr[abc];
// }
//
// console.log(arrABC);
//
//
// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let aabbcc = 0;
// let aaBC = ' ';
// while (aabbcc < aBCarr.length) {
//     aaBC = aaBC + aBCarr[aabbcc];
//     aabbcc++;
// }
// console.log(aaBC);
// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let forOfStr = ' ';
// for (value of aBCarr) {
//     forOfStr = forOfStr + value + ' ';
// }
//
// console.log(forOfStr + 'плюсанув з пробілами');
// =================
// =================
// =================
// =================
//
// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
let arrAbC = ['a', 'b', 'c'];
for (let p = 0; p < 3; p++){
    arrAbC.push(p + 1);
}

console.log(arrAbC);
// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

let oneTwoThre = [1, 2, 3];
oneTwoThre =oneTwoThre.reverse();
console.log(oneTwoThre);

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
let ooArr = [1, 2, 3];
for (let oo = 0; oo < 3; oo++) {
    ooArr.push(oo + 4);
}

console.log(ooArr);

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
let ttArr = [1, 2, 3];
for (let tt = 0; tt < 3; tt++) {
    ttArr.unshift(tt + 4);
}

console.log(ttArr);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
let techArr = ['js', 'css', 'jq'];
let firstEl = techArr.shift();
console.log(firstEl);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
let techArrPop = ['js', 'css', 'jq'];
let lastEl = techArrPop.pop();
console.log(lastEl);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
let vElem = [1, 2, 3, 4, 5];
let newVEl = vElem.slice(3);
console.log(newVEl);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
let fiveEl = [1, 2, 3, 4, 5];
let newEl = fiveEl.slice(0, 2);
console.log(newEl);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
let fiveElem = [1, 2, 3, 4, 5];
let newElem = fiveElem.splice(1, 2);
console.log(fiveElem);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
let fFiveEl = [1, 2, 3, 4, 5];
fFiveEl.splice(3, 0, 'a', 'b', 'c');
console.log(fFiveEl);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
let arrayF = [1, 2, 3, 4, 5];
arrayF.splice(1, 0, 'a', 'b');
arrayF.splice(arrayF.length - 1, 0, 'c');
arrayF.splice(arrayF.length, 0, 'e');
console.log(arrayF);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let tenArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (value of tenArr) {
    if (tenArr[value] % 2 == 0) {
        console.log(tenArr[value]);
    }
}
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
let newtenArr = [];
for (let value = 0; value < tenArr.length; value++) {
    newtenArr.push(tenArr[value]);
}
console.log(newtenArr);

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let tensArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newTenArr = [];
for (let vv = 9; vv >= 0; vv--) {
    newTenArr.unshift(tensArr[vv]);
}
console.log(newTenArr);
//
//
// ============
//
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
let xArr = [2,17,13,6,22,31,45,66,100,-18];
let indX = 0;
while (indX < xArr.length) {
    console.log(xArr[indX]);
    indX++;
}
//     2. перебрати його циклом for
for (let ii = 0; ii < xArr.length; ii++) {
    console.log(xArr[ii]);
}
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
let qq = 0;
while (qq < xArr.length) {
    if (xArr[qq] % 2 != 0) {
        console.log(xArr[qq]);
    }
    qq++;
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let ww = 0; ww < xArr.length; ww++) {
    if (xArr[ww] % 2 != 0) {
        console.log(xArr[ww]);
    }
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
let rr = 0;
while (rr < xArr.length) {
    if (xArr[rr] % 2 == 0) {
        console.log(xArr[rr]);
    }
    rr++;
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення\
for (let tt = 0; tt < xArr.length; tt++) {
    if (xArr[tt] % 2 == 0) {
        console.log(xArr[tt]);
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"
for (let yy = 0; yy < xArr.length; yy++) {
    if (xArr[yy] % 3 == 0) {
        xArr[yy] = 'okten';
    }
}

console.log(xArr);
// 8. вивести масив в зворотньому порядку.
console.log(xArr.reverse());
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 10
// створити пустий масив та :
//     - заповнити його 50 парними числами за допомоги циклу.
let nulArr = [];
for (uu = 0; uu <= 100;uu++) {
    if (uu % 2 == 0 && uu != 0){
        nulArr.push(uu);
    }
}

console.log(nulArr);
// - заповнити його 50 непарними числами за допомоги циклу.
let zerArr = [];
for (let ss = 0; ss < 100; ss++){
    if (ss % 2 > 0) {
        zerArr.push(ss);
    }
}
console.log(zerArr);
//
//
// 1
// створити пустий масив та :
//     1. заповнити його 50 парними числами за допомоги циклу.
// 2. заповнити його 50 непарними числами за допомоги циклу.
// 1,2 зроблено вище
// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
let pustyiMasiv = [];
let max = 10;
for (let nnn = 0; nnn < 100; nnn++) {
    pustyiMasiv.push(Math.floor(Math.random() * Math.floor(max)));
}

console.log(pustyiMasiv);
    //     диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
// 2. вывести на консоль  каждый третий елемент
for (let mmm = 0;mmm < 100; mmm = mmm + 3){
    console.log(pustyiMasiv[mmm])
}
// 3. вывести на консоль  каждый третий елемент
// но при условии что его значение является парным.
for (let abe = 0; abe < 100; abe = abe + 3) {
    if (pustyiMasiv[abe] % 2 == 0 && pustyiMasiv[abe] != 0) {
        console.log(pustyiMasiv[abe]);
    }
}
// 4. вывести на консоль  каждый третий елемент
// но при условии что он имеет парное значение и
// записать их в другой массив.
let xbXX = [];
for (let xbx = 0; xbx < 100; xbx = xbx + 3) {
    if (pustyiMasiv[xbx] % 2 == 0 && pustyiMasiv[xbx] != 0) {
        console.log(pustyiMasiv[xbx]);
        xbXX.push(pustyiMasiv[xbx]);
    }
}
console.log(xbXX);
// 5. Вывести каждый елемент массива у которого соседний с права элемент - парный
let parnyiSosed = [23, 234, 11, 22, 88, 89, 75, 76, 45, 23, 44, 8, 4, 3, 43, 34];
for (let nbn = 0; nbn < parnyiSosed.length; nbn++) {
    if (parnyiSosed[nbn + 1] % 2 == 0 && parnyiSosed[nbn + 1] != 0) {
        console.log(parnyiSosed[nbn]);
    }
}
console.log(parnyiSosed);
// 5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.
let chekInShop = [100,250,50,168,120,345,188];
let summChek = 0;
for (let cvc = 0; cvc < chekInShop.length;cvc++) {
    summChek = chekInShop[cvc] + summChek;
}
console.log(summChek);
let middleChek = summChek / chekInShop.length;
console.log(middleChek);
//
// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let desyatochka = [1, 2, 3, 4, 5 , 6, 7, 8, 9, 10];
let novaDesyatka = [];
for (let vcv = 0;vcv < desyatochka.length;vcv++){
    novaDesyatka.push(desyatochka[vcv] * 5);
}

console.log(novaDesyatka);

// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
// додати його в інший масив.

let raznoboy = [23, 'skldfj', 43, true, 'skldfj', false, 38, 29, 'sdf', 'lkjv', 43];
let chisla = [];
for (let kkk = 0;kkk < raznoboy.length; kkk++) {
    if (typeof raznoboy[kkk] === typeof 1) {
        chisla.push(raznoboy[kkk]);
    }
}

console.log(chisla);



