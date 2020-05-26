// Зробити свій розпоряжок дня.
//
//     Мають бути функції, які є асинхронними (мають сетТаймАут або сетІнтервал) які описують якусь певну вашу дію в день.
//     Наприклад функція прокинутись триває 1с, поїсти - 0,5с. Доїхати до роботи - 2с. Пообідати - 1с.
//     Зробити таких функцій в районі 10 штук. Функція має приймати параметр, який буде відповідати за успішне чи не успішне виконання.
//     Далі виконати їх в тій послідовності, в якій ви виконуєте їх у свій звичайний день.
//S
//     Тобто, як приклад
// Прокинулись - Поснідали - Зібрались - ПОїхали на роботу - Працююєте - Пообідали - Працюєте - Випили кави - Працюєте - Поїхали до дому - Повчились - Лягли спати.
//
//     Кожна функція має мати якесь успіше або не успішне виконання.
//     Тобто можливий варіант, що при виконанні функції доїхати на роботу ви стали в заторі і не попали на роботу.
//     Або йдучи на обід ви забули гаманець і лишились голодні.

//
// //Прокинувся
// function wakeUp(alClock, cb) {
//     console.log('Пора вставати Дзинь дзилинь!');
//     setTimeout(
//         () => {
//             alClock
//             ?cb(null, 'Вітаю ти не вимкнув будильник і встав, мерщій робити мильнорильні процедури!')
//             :cb('Коли прочитаєш це - знай, день втрачено будильник не спрацював')
//
//         },2000);
//
// }
//
//
// //Ранкова гігієна
// function morningHygiene(done, cb) {
//     console.log('Ранкова гігієна...');
//     setTimeout(() => {
//         done
//             ?cb(null, 'Ще успіх ти почистив зуби і вмився, можна йти їсти')
//             :cb('Хоча б вмився, зачуханий поїдеш на роботу')
//     },2000);
// }
//
// //Сніданок
//
// function breakfast(eat, cb) {
//     console.log('eat breakfast...');
//     setTimeout(() =>{
//         eat
//             ?cb(null, 'Поїдеш на роботу ситий')
//             :cb('Голодний остався бідолага!')
//     },3000)
// }
//
// //goingToWork
//
// function goingToWork(go, cb) {
//     console.log('ready to work....');
//     setTimeout(() =>{
//         go
//             ?cb(null, 'Поїхали на роботу')
//             :cb('Знову не зібрав чохли!')
//     },4000)
// }
//
// //дорога на роботу
//
// function wayToWork(luck, cb) {
//     console.log('way to work...');
//     setTimeout(() =>{
//         luck
//             ?cb(null,'Ти добрався до роботи')
//             :cb('В місті транспортний колапс, ти не добрався')
//     }, 5000)
// }
//
// // job Vjob vjob
//
// function jobJob(goodJob, cb) {
//     console.log('job job job...');
//     setTimeout(() => {
//         goodJob
//             ?cb(null, 'Ти гарно працюєш!')
//             :cb('Работать і работать , хто не працює той не їсть')
//     }, 6000)
// }
//
//
// //lunch
//
// function lunch(eatLunch, cb) {
//     console.log('eat lunch...');
//     setTimeout(() => {
//         eatLunch
//         ?cb(null,'Смачного))')
//         :cb('Голодний бо погано працював!');
//     }, 7000)
// }
//
//
// function jobJob2(goodJob, cb) {
//     console.log('job job job...');
//     setTimeout(() => {
//         goodJob
//             ?cb(null, 'Ти гарно працюєш!')
//             :cb('Работать і работать , хто не працює той не їсть')
//     }, 8000)
// }
//
// function coffeBreak(coffeGood, cb) {
//     console.log('coffeBreak');
//     setTimeout(() => {
//         coffeGood
//         ?cb(null, 'Ідеї хочуть кави!')
//             :cb('Ідеї без кави нажаль(((')
//     }, 9000)
// }
//
// function jobJob3(goodJob, cb) {
//     console.log('job job job...');
//     setTimeout(() => {
//         goodJob
//             ?cb(null, 'Ти гарно працюєш!')
//             :cb('Работать і работать , хто не працює той не їсть')
//     }, 8000)
// }
//
// function goHome(goodWay, cb) {
//     console.log('Я їду до дому!');
//     setTimeout(() => {
//         goodWay
//         ?cb(null, 'Приїхав додому')
//             :cb('Шото пошло не так')
//     }, 9000)
// }
//
// function learnCode(learn, cb) {
//     console.log('Колбеки і проміси...');
//     setTimeout(() => {
//         learn
//         ?cb(null, 'Темка зашла на Ура!')
//             :cb('Та ну його я спати')
//     }, 10000)
// }
//
// function sleep(sleep) {
//     setTimeout(() => {
//         sleep
//             ? console.log('Крепкий сон запорука відновлення організму')
//             : console.log('Перенасичений інформацією ,не можеш заснути, треба ретельніше готуватись до сну')
//     }, 11000)
// }

// wakeUp(true, function (error, data) {
//     if (error) {
//         console.log(error);
//         return error;
//     } else {
//         console.log(data);
//         morningHygiene(true, function (error, data) {
//             if (error) {
//                 console.log(error);
//                 return error;
//             } else {
//                 console.log(data);
//                 breakfast(true, function (error, data) {
//                     if (error){
//                         console.log(error);
//                         return error;
//                     } else {
//                         console.log(data);
//                         goingToWork(true, (error, data) => {
//                             if (error) {
//                                 console.log(error);
//                                 return error;
//                             } else {
//                                 console.log(data);
//                                 wayToWork(true, (error, data) => {
//                                     if (error) {
//                                         console.log(error);
//                                         return error;
//                                     } else {
//                                         console.log(data);
//                                         jobJob(true, (error, data) => {
//                                             if (error) {
//                                                 console.log(error);
//                                                 return error;
//                                             } else {
//                                                 console.log(data);
//                                                 lunch(true, (error, data) => {
//                                                     if (error) {
//                                                         console.log(error);
//                                                         return error;
//                                                     } else {
//                                                         console.log(data);
//                                                         jobJob2(true, (error, data) => {
//                                                             if (error) {
//                                                                 console.log(error);
//                                                                 return error;
//                                                             } else {
//                                                                 console.log(data);
//                                                                 coffeBreak(true, (error, data) => {
//                                                                     if (error) {
//                                                                         console.log(error);
//                                                                     } else {
//                                                                         console.log(data);
//                                                                         jobJob3(true, (error, data) => {
//                                                                             if (error) {
//                                                                                 console.log(error);
//                                                                             } else {
//                                                                                 console.log(data);
//                                                                                 goHome(true, (error, data) => {
//                                                                                     if (error) {
//                                                                                         console.log(error);
//                                                                                         return error;
//                                                                                     } else {
//                                                                                         console.log(data);
//                                                                                         learnCode(true, (error, data) => {
//                                                                                             if (error) {
//                                                                                                 console.log(error);
//                                                                                             } else {
//                                                                                                 console.log(data);
//                                                                                                 sleep(true);
//                                                                                             }
//                                                                                         })
//                                                                                     }
//                                                                                 })
//                                                                             }
//                                                                         })
//                                                                     }
//                                                                 })
//                                                             }
//                                                         })
//                                                     }
//                                                 })
//                                             }
//                                         })
//                                     }
//                                 })
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// });

//Прокинувся
function wakeUp(alClock) {
    console.log('Пора вставати Дзинь дзилинь!');
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                alClock
                    ?resolve('Вітаю ти не вимкнув будильник і встав, мерщій робити мильнорильні процедури!')
                    :reject('Коли прочитаєш це - знай, день втрачено будильник не спрацював')
            },1000);
    })
}


//Ранкова гігієна
function morningHygiene(done) {
    console.log('Ранкова гігієна...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            done
                ?resolve('Ще успіх ти почистив зуби і вмився, можна йти їсти')
                :reject('Хоча б вмився, зачуханий поїдеш на роботу')
        },2000);
    })

}

//Сніданок

function breakfast(eat) {
    console.log('eat breakfast...');
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            eat
                ?resolve('Поїдеш на роботу ситий')
                :reject('Голодний остався бідолага!')
        },3000)
    })
}

//goingToWork

function goingToWork(go) {
    console.log('ready to work....');
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            go
                ?resolve('Поїхали на роботу')
                :reject('Знову не зібрав чохли!')
        },4000)
    })
}

//дорога на роботу

function wayToWork(luck) {
    console.log('way to work...');
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            luck
                ?resolve('Ти добрався до роботи')
                :reject('В місті транспортний колапс, ти не добрався')
        }, 5000)
    })
}

// job Vjob vjob

function jobJob(goodJob) {
    console.log('job job job...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            goodJob
                ?resolve('Ти гарно працюєш!')
                :reject('Работать і работать , хто не працює той не їсть')
        }, 6000)
    })
}


//lunch

function lunch(eatLunch) {
    console.log('eat lunch...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            eatLunch
                ?resolve('Смачного))')
                :reject('Голодний бо погано працював!');
        }, 7000)
    })
}


function jobJob2(goodJob) {
    console.log('job job job...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            goodJob
                ?resolve('Ти гарно працюєш!')
                :reject('Работать і работать , хто не працює той не їсть')
        }, 8000)
    })
}

function coffeBreak(coffeGood) {
    console.log('coffeBreak');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            coffeGood
                ?resolve('Ідеї хочуть кави!')
                :reject('Ідеї без кави нажаль(((')
        }, 9000)
    })

}

function jobJob3(goodJob) {
    console.log('job job job...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            goodJob
                ?resolve('Ти гарно працюєш!')
                :reject('Работать і работать , хто не працює той не їсть')
        }, 8000)
    })
}

function goHome(goodWay) {
    console.log('Я їду до дому!');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            goodWay
                ?resolve('Приїхав додому')
                :reject('Шото пошло не так')
        }, 9000)
    })
}

function learnCode(learn) {
    console.log('Колбеки і проміси...');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            learn
                ?resolve('Темка зашла на Ура!')
                :reject('Та ну його я спати')
        }, 10000)
    })
}

function sleep(sleep) {
    return new Promise(resolve => {
        setTimeout(() => {
            sleep
                ? console.log('Крепкий сон запорука відновлення організму')
                : console.log('Перенасичений інформацією ,не можеш заснути, треба ретельніше готуватись до сну')
        }, 11000)
    })
}

wakeUp(true)
    .then(value => {
        console.log(value);
        return morningHygiene(true)
    })
    .then(value => {
        console.log(value);
        return breakfast(true)
    })
    .then(value => {
        console.log(value);
        return goingToWork(true)
    })
    .then(value => {
        console.log(value);
        return wayToWork(true)
    })
    .then(value => {
        console.log(value);
        return jobJob(value)
    })
    .then(value => {
        console.log(value);
        return lunch(true)
    })
    .then(value => {
        console.log(value);
        return jobJob2(true)
    })
    .then(value => {
        console.log(value);
        return coffeBreak(true)
    })
    .then(value => {
        console.log(value);
        return jobJob3(true)
    })
    .then(value => {
        console.log(value);
        return goHome(true)
    })
    .then(value => {
        console.log(value);
        return learnCode(true)
    })
    .then(value => console.log(value))
    .catch(reason => {
        console.log(reason);
    }).finally(() => sleep(true))