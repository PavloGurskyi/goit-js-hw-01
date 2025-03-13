//! ===== Лекція 3.1 = Масиви =====

//todo === Створення масиву ===

// const courses = ['HTML', 'CSS', 'JS'] // 3 empty, 4 'React'
// console.log(courses);

//* довжина масиву

// console.log(courses.length); // 3

//* доступ до елементу

// console.log(courses[1]); // CSS

// console.log(courses[4]); // undefined

//* перевизначення елемента

// courses[4] = 'React'

// console.log(courses); // ['HTML', 'CSS', 'JS', empty, 'React']

// const firstElement = courses[0]
// console.log(firstElement);

//* індекс останнього елемента

// const lastElement = courses[courses.length-1];
// console.log(lastElement);

//todo === Присвоєння за посиланням і за значенням

// let a = 10;
// const b = a;

// console.log(a); // 10
// console.log(b); // 10

// a = 20;

// console.log(a); // 20
// console.log(b); // 10 - не перезаписується

// const arr1 = [1, 2, 3];
// const arr2 = arr1;

// console.log(arr1);
// console.log(arr2);

// arr2[0] = 10;

// console.log(arr1);
// console.log(arr2);

// arr1[2] = 13;

// console.log(arr1);
// console.log(arr2);

//todo === методи масивів ===

//* .join() - склеїти елементи масиву в рядок

// const users = ['Elva', 'Lily', 'Derek', 'Derek']
// console.log(users); // ['Elva', 'Lily', 'Derek', 'Derek']
// const usersStr = users.join();
// console.log(usersStr); // Elva,Lily,Derek,Derek - суцільний рядок з комами

// const usersStr2 = users.join(', ')
// console.log(usersStr2); // Elva, Lily, Derek, Derek - з роздільником

//* .split() - розбити рядок на елементи масиву

// const phoneNumberStr = '+380961111111,+380730897633,+380633610751';
// const phoneNumberArr = phoneNumberStr.split(',');
// console.log(phoneNumberArr); // ['+380961111111', '+380730897633', '+380633610751']
// console.log(phoneNumberArr[2]); // +380633610751

//* .slice() - зробити копію масиву

// const users = ['Elva', 'Lily', 'John', 'Derek'];
// const usersCopy = users.slice(1, users.length - 1); // не включно
// console.log(users); // ['Elva', 'Lily', 'Derek', 'Derek']
// console.log(usersCopy); // ['Lily', 'John'] - не включно

// usersCopy[0] = 'Nina'

// console.log(users); // ['Elva', 'Lily', 'John', 'Derek']
// console.log(usersCopy) // ['Nina', 'John'] - 1 став 0

//* .concat() - об'єднати декілька масивів

// const oldCourses = ['HTML', 'CSS', 'JavaScript']
// const newCourses = ['React', 'NodeJS']
// const all = oldCourses.concat(newCourses);
// console.log(all);

// //* .push() - додати елемент в кінець

// all.push('Angular')
// console.log(all);

// //* .unshift() - додати на початок масиву

// all.unshift('Pre')
// console.log(all);

// //* .pop() - видаляє один останній елемент

// all.pop()
// console.log(all);

// //* .shift() - видаляє один перший елемент

// all.shift()
// console.log(all);

//todo ==== Ітерації по масиву ==== (перебрати масив) ====

//* циклом for - якщо крок не 1, або треба індекс

// const friends = ['Anya', 'Pasha', 'Alyona', 'Mary']
// console.log('friends:', friends);

// for (let i = 0; i < friends.length; i++) {
//     console.log(friends[i]);
// }

//! for of - перебирає масив з кроком 1

// for (const elem of friends) {
//     console.log(elem);
// }

//todo === задача === скрипт для перебору циклу фруктів з нумерацією

// const fruits = ['apple', 'banana', 'mango', 'kiwi']
// console.log(fruits.join(', '));

// for (let i = 0; i < fruits.length; i++) {
//     console.log(`${i+1}: ${fruits[i]}`);
// }

//todo ==== задачі лекції 3.1 ====

//* === 1 === площа прямокутника, значення сторін подається як рядок

// const values = '8 11' // створити з рядка масив
// const sides = values.split(' ')
// const square = Number(sides[0]) * Number(sides[1]);

// console.log('values:', values);
// console.log('sides:', sides);
// console.log('Area is:', square);

//* === 2 === скрипт який виводить суму всіх парних чисел у масиві

// const numbers = [1, 5, 8, 9, 12, 4];
// let total = 0;

// console.log('numbers:', numbers);

// for (const num of numbers) {
// if (num % 2 === 0) {
//     total += num;
// }
// }
// console.log('sum of evens:', total);

//* === 3 === скрипт виводить ім'я та номер користувача

// const names = 'Johny,Pavlo,Anya,Mary';
// const numbers = '13,36,34,37';

// const namesArr = names.split(',')
// console.log(namesArr);

// const numbersArr = numbers.split(',')
// console.log(numbersArr);

// for (let i = 0; i < namesArr.length; i++) {
//     console.log(`${namesArr[i]} is ${numbersArr[i]} years old`);
// }

//* === 4 === вивести всі слова крім першого та останнього

// const string = 'My name is Harry Potter'

// const strArr = string.split(' ')
// console.log(strArr);

// for (let i = 1; i < strArr.length - 1; i++) {
//     console.log(strArr[i]);
// }

//* === 5 === пошук найменшого і найбільшого числа у масиві

// const nums = [50, -10, 2, -20, 30, -40]
// let min = 0;
// let max = 0;

// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < min) {
//         min = nums[i];
//     }
// }

// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > max) {
//         max = nums[i]
//     }
// }

// console.log(min); // -40
// console.log(nums[3]); // -20
// console.log(max); // 50

//* === 6 === загальна сума зарплат з різних масивів

// const managers = [112, 200, 300];
// const devs = [400, 500]
// let total = 0;

// const salar = managers.concat(devs);
// console.log(salar);

// // for (let i = 0; i < salar.length; i++) {
// //     total += salar[i]
// // }

// for (let money of salar) {
//     total += money
// }

// console.log(total); // 1512

// console.log(salar[salar.length - 2]);

//todo ================================================== HW-03 task-1 ==================================================
//todo ==================================================================================================================
//todo ==================================================================================================================

// console.log('task-1');

// function slugify(title) {
//     const slug = title.split(' ').join('-').toLowerCase();
//     return slug;
// }
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"

// console.log(" ");

//! ===== Lection 3.2 =====
//! ===== Функції - 2 =====

//* == function declaration ==

// function sum (numA, numB) {
//     return numA + numB
// }
// console.log(sum(10, 20));

//* ===== function expression =====

// const sum = function (numA, NumB) {
//     return numA + NumB;
// }
// console.log(sum(10, 20));

//* == fn ==

// const fn = function () {
//     console.log(arguments);
//     console.log(arguments[0]);
// }
// fn('Hello', 'world')

//* == задача == додавання довільної кількості аогументів

// const add = function () {
//     let total = 0;
//     for (const arg of arguments) {
//         total += arg
//     }
//     return total
// }
// console.log(add(10,20,30,40,50));

//* == задача == середнє арифметичне довільної кількості аргументів

// const average = function () {
//     let total = 0;
//     for (let arg of arguments) {
//         total += arg
//     }
//     return total / arguments.length;
// }
// console.log(average(1,2,3,4));

//! ===== Lection 3.2-2 =====
//! ====== Call stack ======

//* ===== Стек викликів =====

// const fn1 = function () {
//     console.log('fn1 demo');
//     console.log('before fn2');
//     fn2();
//     console.log('after fn2');
// };

// const fn2 = function () {
//     console.log('fn2 demo');
// };

// fn1();

//todo ===== Задачі лекція 3.2 =====
//todo =============================
//todo =============================

//* = 1 = getRectArea(dimensions)

// const getRectArea = function (dimensions) {
//     const sidesArr = dimensions.split(' ');

//     return Number(sidesArr[0] * Number(sidesArr[1]))

// }

// console.log(getRectArea('8 11'));

//* = 2 = checkCaseOfLetter(letter)

// const checkCaseOfLetter = function (letter) {
//     return letter.toLowerCase() === letter ? 'lower case' : 'upper case'
// }
// console.log(checkCaseOfLetter('s'));
// console.log(checkCaseOfLetter('S'));

//* = 3 = changeCaseOfLetters(str)

// const changeCaseOfLetters = function(str) {
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//         if (str[i].toLowerCase() === str[i]) {
//             result += str[i].toUpperCase();
//         } else {
//             result += str[i].toLowerCase()
//         }
//     }
//     return result;
// }
// console.log(changeCaseOfLetters('AcDc'));

//* = 4 = вивести елементи масиву в консоль з нумерацією

// const logItems = function(items) {
//     for (let i = 0; i < items.length; i++) {
//         console.log(`${[i+1]}: ${items[i]}`);
//     }

// }

// logItems(['John', 'Hanna', 'Pavlo'])

//* = 5 = printInfo(names, phones)

// const printInfo = function(names, phones) {
//     const namesArr = names.split(',');
//     // console.log(namesArr);

//     const phonesArr = phones.split(',');
//     // console.log(phonesArr);

//     for (let i = 0; i < namesArr.length; i++) {
//         console.log(`${namesArr[i]}'s phone number is ${phonesArr[i]}`);
//     }

// }

// printInfo('John,Pavlo', '0938755195,0730897633')

// John's phone number is 0938755195
// Pavlo's phone number is 0730897633

//* = 6 = add/remove/change

// const courses = ['HTML', 'CSS', 'JavaScript']
// console.log(courses);

//* = 6-1 = addCourse(name)

// const addCourse = function(name) {
//     if (courses.includes(name)) {
//         console.log(`${name} вже є'`);
//     } else {
//         courses.push(name)
//     }
// }
// addCourse('1');
// console.log(courses);

//* = 6-2 = removeCourse(name)

// const removeCourse = function(name) {

    // const idxOf = courses.indexOf(name); // дізнаємся індекс параметра name
    
//     if (courses.indexOf(name) === -1) {
//         console.log(`Курс ${name} не знайдено`); // якщо removeCourse('немає такого')

//         return; //! раннє повернення з функції

        // або: if (courses.indexOf(name) === -1) {
            // return  console.log(`Курс ${name} не знайдено`);
        // }  
    
//     courses.splice(courses.indexOf(name), 1) // видаляє від індексу до кількості елементів, які треба видалити
//     };

// removeCourse('some')
// console.log(courses);

//* = 6-3 = updateCourse

// const updateCourse = function (oldCourse, newCourse) {
//     const idxOf = courses.indexOf(oldCourse);
//     courses.splice(idxOf, 1, newCourse); // 1 - індекс який видалити, 2 - кількість, 3-4-... - що додати
//     courses.splice(idxOf, 0, 'Wow!') // додати нічого не видаляючи
// }

// updateCourse('CSS', 'English')
// console.log(courses);

//! метод .splice() - змінює елементи масиву в будь-якому місці (додає, видаляє, змінює)

//todo ================================================== HW-03 task-2 ==================================================
//todo ==================================================================================================================
//todo ==================================================================================================================

// console.log('task-2');


// const makeArray = function(firstArray, secondArray, maxLength) {
//     const newArr = firstArray.concat(secondArray);
//     // console.log(newArr);
//     return newArr.slice(0, maxLength);

// }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

// console.log(' ');

//todo ================================================== HW-03 task-3 ==================================================
//todo ==================================================================================================================
//todo ==================================================================================================================

// console.log('task-3');

// const filterArray = function(numbers, value) {
//     const newArr = [];
//     for (let num of numbers) {
//         if (num > value) {
//             newArr.push(num)
//         }

//     }
//     return newArr;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

//todo ================================================== Конспект - 3 ==================================================
//todo ==================================================================================================================
//todo ==================================================================================================================

//! ===== Методи масивів =====

//? .join() - масив в рядок;
//? .split() - рядок в масив;


//? масив в рядок і кількість симолів

// function getLength(array) {
//         return array.join('').length;
//   }
// console.log(getLength(["Mango", "hurries", "to", "the", "train"])); // 22

//? змінити case (snake_ to kebab-)

// const transform = function (string) {
//     const words = string.split('_');
//     return words.join('-')
// }

// console.log(transform("user_age"));

//! ===== Ітерація по масиву =====





//! ===== аргументи

//* function sum (a,b) {

// function sum (a,b) {
//     console.log(arguments);
//     return a+b;
// }
// console.log(sum (2,6));

//* function multiply () {}

// function multiply () {
//     let total = 1;
//     for (const arg of arguments) {
//         total *= arg;
//     }
//     return total;
// }
// console.log(multiply(3,2));

//* Створити масив з псевдомасива arguments

//* Array.from()

// function foo() {
//     return Array.from(arguments).join(', ') // 1, 2, 3

// }
// console.log(foo(1,2,3));

//todo == createReversedArray == .toReversed()

// function createReversedArray() {
//     return Array.from(arguments).toReversed()
// }
// console.log(createReversedArray(1,2,3,4));

//todo == параметри функції за замовчуванням ==
// function greet (username = "Pavlo") {
//     console.log(`Hello, ${username}`);
// }
// greet();
// greet("Johny");


// function greet(username = "Guest") {
//     console.log(`Hello, ${username}!`);
//   }

//   greet("Jacob"); // "Hello, Jacob!"
//   greet();        // "Hello, Guest!"

//* function count (from, to, step = 1)

// function count (from, to, step = 1) {
//     console.log(`from ${from} to ${to}, step: ${step}`);
// }
// count(1,9,2)

//* calculateTax

// function calculateTax(amount, taxRate = 0.2) {
//     const tax = amount * taxRate;
//     return tax;
// }
// console.log(calculateTax(200));

//todo ================================================== Конспект - 3 ==================================================
//todo ============================================== function expression ===============================================

//* function foo () {} — function declaration - оголошення функції
//! const foo = function () {} — function expression - НЕ МОЖНА (!) викликати до місця створення - функціональний вираз

