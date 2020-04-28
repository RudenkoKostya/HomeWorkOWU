//
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru

function tagFeatures(titleOfTag, description, attr) {
    this.titleOfTag = titleOfTag || 'No title';
    this.description = description || 'No description';
    this.attr = attr || [];
};

let inputAttr = [
    {
        titleOfAttr: 'type',
        attrDescript: 'Сообщает браузеру, к какому типу относится элемент формы.'
    },
    {
        titleOfAttr: 'name',
        attrDescript: 'Имя поля, предназначено для того, чтобы обработчик формы мог его идентифицировать.'
    },
    {
        titleOfAttr: 'placeholder',
        attrDescript: 'Выводит подсказывающий текст.'
    }
];

let inputTag = new tagFeatures('<input>',
    `Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков.`,
    inputAttr);

console.log(inputTag);

//
// Таким чином описати теги
// -a
let anchorAttr = [
    {
        titleOfAttr: 'href',
        attrDescript: 'Задает адрес документа, на который следует перейти.'
    },
    {
        titleOfAttr: 'title',
        attrDescript: 'Добавляет всплывающую подсказку к тексту ссылки.'
    },
    {
        titleOfAttr: 'accesskey',
        attrDescript: 'Активация ссылки с помощью комбинации клавиш.'
    }
];

let anchorTag = new tagFeatures('<a>',
                                'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок',
                                anchorAttr);
console.log(anchorTag);
// -div
let divAttr = [
    {
        titleOfAttr: 'align',
        attrDescript: 'Задает выравнивание содержимого тега <div>'
    },
    {
        titleOfAttr: 'title',
        attrDescript: 'Добавляет всплывающую подсказку к содержимому.'
    }
];

let divTag = new tagFeatures('div',
                            'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
                            divAttr);
console.log(divTag);

// -h1
let h1Attr = {
    titleOfAttr: 'align',
    attrDescript: 'Определяет выравнивание заголовка.'
};

let h1Tag = new tagFeatures('h1', `HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка.`, h1Attr);

console.log(h1Tag);
// -span
let spanAttr = 'Для этого тега доступны универсальные атрибуты и события.';

let spanTag = new tagFeatures('span', 'Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль.', spanAttr);

console.log(spanTag);
// -input
// -form
let formAttr = [
    {
        titleOfAttr: 'action',
        attrDescript: 'Адрес программы или документа, который обрабатывает данные формы.'
    },
    {
       titleOfAttr: 'autocomplete',
        attrDescript: 'Включает автозаполнение полей формы.'
    },
    {
        titleOfAttr: 'method',
        attrDescript: 'Метод протокола HTTP.'
    }
];

let formTag = new tagFeatures('form', 'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. ', formAttr);
console.log(formTag);
// -option
let optionAttr = [
    {
        titleOfAttr: 'disabled',
        attrDescript: 'Заблокировать для доступа элемент списка'
    },
    {
        titleOfAttr: 'label',
        attrDescript: 'Указание метки пункта списка.'
    },
    {
        titleOfAttr: 'selected',
        attrDescript: 'Заранее устанавливает определенный пункт списка выделенным.'
    }
];

let optionTag = new tagFeatures('option', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. ', optionAttr);
console.log(optionTag);

// -select
let selectAttr = [
    {
        titleOfAttr: 'accesskey',
        attrDescript: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'
    },
    {
        titleOfAttr: 'autofocus',
        attrDescript: 'Устанавливает, что список получает фокус после загрузки страницы.'
    },
    {
        titleOfAttr: 'disabled',
        attrDescript: 'Блокирует доступ и изменение элемента.'
    }
];

let selectTag = new tagFeatures('select', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка. ', selectAttr);
console.log(selectTag);
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================
//
//
// ==============================================
//     -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
class Tag {
    constructor(titleOfTag, description, attr) {
        this.titleOfTag = titleOfTag;
        this.description = description;
        this.attr = attr;
    }
}
// Таким чином описати теги
// -a
let anchorTagClass = new Tag('anchor', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь.', anchorAttr);
console.log(anchorTagClass);
// -div
let divTagClass = new Tag('div',
    'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
    divAttr);
console.log(divTagClass);
// -h1
let h1TagClass = new Tag('h1', `HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка.`, h1Attr);

console.log(h1TagClass);
// -span
let spanTagClass = new Tag('span', 'Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль.', spanAttr);

console.log(spanTagClass    );
// -input
let inputTagClass = new Tag('<input>',
    `Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков.`,
    inputAttr);

console.log(inputTagClass);
// -form
let formTagClass = new Tag('form', 'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. ', formAttr);
console.log(formTagClass);
// -option
let optionTagClass = new Tag('option', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. ', optionAttr);
console.log(optionTagClass);
// -select
let selectTagClass = new Tag('select', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка. ', selectAttr);
console.log(selectTagClass);
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================
//
//
//
// ==============================================
//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
let car = {
    model: 'Mercedes-Benz s63',
    manufacturer: 'Germany',
    dataOfManufacture: 2008,
    maxSpeed: 220,
    powerEngine: 300,
    volumeEngine: 2.5,
    drive: function () {
        console.log(`We drive with speed ${maxSpeed} km/h`);
    },
    increasMaxSpeed: function (newSpeed) {
        this.maxSpeed = newSpeed;
    },
    changeYear: function (newValue) {
        this.dataOfManufacture = newValue;
    },
    addDrive: function (driverObj) {
        car.driver = driverObj;
    },
    info: function () {
        console.log(`model : ${this.model}
                     dataOfManufacture: ${this.dataOfManufacture}
        `);
    }
};

console.log(car);

car.addDrive({name: 'Kostya', age: 23, experience: 5});
car.info();
// ==============================================
//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
//
function CarConstructor(model, manufactured, dateOfManufactured, maxSpeed, volSpeed) {

    this.model = model;
    this.manufactured = manufactured;
    this.dateOfManufactured = dateOfManufactured;
    this.maxSpeed = maxSpeed;
    this.volSpeed = volSpeed;

    this.drive = function () {
        console.log(`We drive with speed ${maxSpeed}`);
    };

    this.info = function () {
        console.log(this.model, this.dateOfManufactured);
    };

    this.increseMacSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed;
    };

    this.changeYear = function (newValue) {
        this.dateOfManufactured = newValue;
    };

    this.driver = function (driver) {
        this.driver = driver;
    };

}

let mercedes = new CarConstructor('Mercedes S63', 'Germany', 2008, 270, 5.2);
console.log(mercedes);
mercedes.drive();
mercedes.info();
// ==============================================
//     - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобільc
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
//
class Car {
    constructor(model, manufacturer, dataOfManufacture, maxSpeed, powerEngine, volumeEngine) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.dataOfManufacture = dataOfManufacture;
        this.maxSpeed = powerEngine / 1.8;
        this.powerEngine = powerEngine;
        this.volumeEngine = volumeEngine;
    }

    drive () {
        console.log(`We drive ${this.maxSpeed} km/h`);
    }

    info () {
        for (const CarKey in Car) {
            document.write(Car.CarKey);
            document.write('<br>')
        }
    }

    changeYear (newValue) {
        this.dataOfManufacture = newValue;
    }

    addDriver (name, age , experience) {
        this.driverName = name;
        this.driverAge = age;
        this.driverExp = experience;
    }
}
//
// ==============================================
//     -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================
class Cinderella {
    constructor(name, age, legSize) {
        this.name = name;
        this.age = age;
        this.legSize = legSize;
    }
}

let cinderella1 = new Cinderella('Lana', 23, 35);
let cinderella2 = new Cinderella('Mika', 22, 35.5);
let cinderella3 = new Cinderella('Asya', 24, 36);
let cinderella4 = new Cinderella('Asia', 22, 36.5);
let cinderella5 = new Cinderella('Alisa', 26, 37);
let cinderella6 = new Cinderella('Nastya', 23, 37.5);
let cinderella7 = new Cinderella('Sveta', 27, 38);
let cinderella8 = new Cinderella('Liuda', 29, 38.5);
let cinderella9 = new Cinderella('Nadin', 30, 39);
let cinderella10 = new Cinderella('Viola', 32, 40);
//

let arrCinderell = [cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8, cinderella9, cinderella10];
//

class Prince {
    constructor(name, age, slipperSize) {
        this.name = name;
        this.age = age;
        this.slipperSize = slipperSize;
    }

    slipperCinderella(array) {
        for (const cindSlip of array) {
            if (cindSlip.legSize === this.slipperSize) {
                console.log(`My cinderella is ${cindSlip.name}`);
            }
        }
    }
}

let prince = new Prince('Oleh', 24, 35);

prince.slipperCinderella(arrCinderell);
//
// ==============================================
//     -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================
function Cinderellas(name, age, legSize) {
    this.name = name;
    this.age = age;
    this.legSize = legSize;
}

let cinderella11 = new Cinderellas('Lana', 23, 35);
let cinderella22 = new Cinderellas('Mika', 22, 35.5);
let cinderella33 = new Cinderellas('Asya', 24, 36);
let cinderella44 = new Cinderellas('Asia', 22, 36.5);
let cinderella55 = new Cinderellas('Alisa', 26, 37);
let cinderella66 = new Cinderellas('Nastya', 23, 37.5);
let cinderella77 = new Cinderellas('Sveta', 27, 38);
let cinderella88 = new Cinderellas('Liuda', 29, 38.5);
let cinderella99 = new Cinderellas('Nadin', 30, 39);
let cinderella101 = new Cinderellas('Viola', 32, 40);

let arrCinderells = [cinderella11, cinderella22, cinderella33, cinderella44, cinderella55, cinderella66, cinderella77, cinderella88, cinderella99, cinderella101];

function Princce (name, age, slipperSize){
        this.name = name;
        this.age = age;
        this.slipperSize = slipperSize;

    this.slipperCinderella = function (array) {
        for (const cindSlip of array) {
            if (cindSlip.legSize === this.slipperSize) {
                console.log(`My cinderella is ${cindSlip.name}`);
            }
        }
    }
}

let Princc = new Princce('Vasya', 24, 37);

Princc.slipperCinderella(arrCinderells);