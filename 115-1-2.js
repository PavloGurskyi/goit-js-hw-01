//! ======================================================================================
//! ==================         Module 1          =========================================
//! ======================================================================================

/*let price = 10;
console.log(price);

price = 15;

console.log(price);*/
/*
створити
багаторядковий
коментар
*/

/*const price = 10;
console.log(price);*/

// prompt('Name')

// const name = prompt('name')
// console.log(typeof name); //string

/*const isAdult = confirm('Adult?')
console.log(isAdult);*/

// const a = 2;
// const b = 10;

// const result = a**b;
// console.log(result);

// const app = 135;
// const grapes = 47;

// const totalFruits = app+grapes;
// console.log(totalFruits);

// const diff = app-grapes;
// console.log(diff);

// let stud = 100;
// stud += 50;
// console.log(stud);

// const first = 'Opa';
// const sec = 'Oma'

// const full = first + ' ' + sec + '.';
// console.log(full);

// const quan = 15;
// const order = `You ordered ${quan} bots`;
// console.log(order);

// const first = 'Opa';
// const sec = 'Oma'

// const full = `${first} ${sec}.`;
// console.log(full);

// const first = prompt('name');
// const sec = prompt('sur');

// const message = `Hello ${first} ${sec}!`
// console.log(message);

// const message = 'This message is long.';
// const messLenght = message.length;

// console.log(message);
// console.log(messLenght);

// const comp = 'Cyber';
// const rep = 158;
// const def = 46;

// const msg = `${comp} has ${rep + def} bots total.`
// console.log(msg);

// console.log(String(185));
// console.log(Number('a'));
// console.log('5' + true);

//todo          =====   LEction1.2  =====           //todo

//todo === призведення до числа

// console.log(Number('16'));
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(undefined));

// console.log(+ '16'); // === (Number('16')) унарний плюс перетворює рядок на число
// console.log(+ true);
// console.log('8' * 3);
// console.log('10' - '3');
// console.log('10' + '3');

//todo === оператори порівняння

// console.log(6>3); //t
// console.log(10 >= '7'); //t
// console.log('pop' <= 'pop'); //t
// console.log('pop' < 'pop'); //false

// const str = '10';
// const num = Number(str);
// console.log(num);

//todo === число з промпта в консоль

// const input = prompt('Enter number');
// const num = Number(input);
// console.log(num);

// let usInput = prompt('Enter number');
// usInput = Number(usInput);
// console.log(usInput);

// let userInput = Number(prompt('Enter number'))
// console.log(userInput);

// const inp = Number(prompt('Enter'));
// console.log(inp);

//todo === parseInt / parseFloat

// const width = '50.4px'
// console.log(Number.parseInt(width));
// console.log(Number.parseFloat(width));

// const a = prompt('enter A');
// const b = prompt('enter B');

// const result = Number(a) + Number(b);
// console.log(result);

// let value = 27.51;
// value = Math.round(value);
// console.log(value);
// value = Math.floor(value);
// console.log(value);

//todo ===== Основи Функцій

// function greet () {
//     console.log('Hello!');
// }
// greet();
// greet();
// greet();
// greet();

// function greet (name) {
//     console.log(`Hello ${name}`);
// }

// greet('Pavlo')

// function sum(a,b) {
//     return a+b;
// }
// console.log(sum(3,5));

// function get (sideA, sideB) {
//     return sideA * sideB;
// }
// console.log(`Area is ${get(10,15)}.`);

//todo == calcBMI

// function calcBMI(weight, height) {
//     weight = Number(weight);
//     height = Number(height);

//     return Number((weight / height**2).toFixed(1));
// }
// console.log(calcBMI('76.4', '1.76'));

//todo === compend lect 1

// const age = 18;
// console.log(typeof age);

// const name = 'John'
// console.log(typeof name);

// const price = 3500;
// const quant = 4;
// const total = price*quant;
// console.log(total);

// let age = 18;
// age = age + 2;
// console.log(age);

// let age = 20;
// age += 1;
// console.log(age);

// const name = 'John';
// console.log('Welcome ' + name + '!');

// const name = 'Paska';
// console.log(name.length);
// console.log('Paska'.length);

// let username = 'Paska';
// console.log(`My name is ${username} and it's ${username.length} characters long.`);

//todo === індексація

// const prod = 'Paska';
// console.log(prod[0]);
// console.log(prod[3]);

// const lastElementIndex = prod.length - 1;
// console.log(prod[lastElementIndex]);

// console.log(prod[prod.length - 1]);

// const age = 16;
// const isAdult = age >=18;
// console.log(isAdult);

// console.log(5==5); //t
// console.log(5!=5); //f
// console.log(1 != false); //t

// const correct = 'qwerty';
// const users = 'asadfg';
// const isValid = correct === users;
// console.log(isValid);

// console.log(Math.floor(1.99)); //1
// console.log(Math.ceil(1.01));
// console.log(Math.round(1.499));
// console.log(Math.max(10,20,30,50,40,15));
// console.log(Math.min(19,18,17,15,16,15,10,15,17));

//todo == random

// console.log((Math.random(1, 50)).toFixed(2)*100);

//todo === functions

// function multiply (x,y,z) {
//     console.log(`Result: ${x*y*z}`);
// }
// multiply(1,2,3);

// function add(a,b,c) {
//     console.log(`Addition result equals ${a+b+c}`);
// }
// add(2,4,8);
// add(1,2,5);

// function multiply (a,b,c) {
//     const product = a*b*c;
//     return product;
// }

// const result = multiply(1,2,3)
// console.log(result);

// function multiply(a,b,c) {
//     return a*b*c;
// }
// console.log(multiply(1,2,3));

// function multiply(x, y, z) {
//     console.log(`Result: ${x * y * z}`);
//   }
  
//   console.log("Log before multiply execution");
//   multiply(2, 3, 5); // "Result: 30"
//   console.log("Log after multiply execution");

//todo === goit-js-hw-01-task-1

// function makeTransaction (quantity, pricePerDroid) {
//     const totalPrice = quantity * pricePerDroid;
//     return `You ordered ${quantity} droids worth ${totalPrice} credits!`
// }
// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

//todo === goit-js-hw-01-task-2

// function getShippingMessage (country, price, deliveryFee) {
//     const totalPrice = price + deliveryFee;
//     return `Shipping to ${country} will cost ${totalPrice} credits`
// }
// console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
// console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"

//todo === goit-js-hw-01-task-3

// function getElementWidth(content, padding, border) {
//     return parseFloat(content) + parseFloat(padding) * 2 + parseFloat(border) * 2;
// }
// console.log(getElementWidth("50px", "8px", "4px")); // 74
// console.log(getElementWidth("60px", "12px", "8.5px")); // 101
// console.log(getElementWidth("200px", "0px", "0px")); // 200

//! ======================================================================================
//! ==================         Module 2          =========================================
//! ======================================================================================

//todo === Розгалуження if else, ternary, switch

//! Enter 10

// const userNumber = Number(prompt('Введіть число 10'));

// if (userNumber === 10) {
//     console.log('Вірно');
// } else {
//     console.log('Не вірно');
// }

//! Positive balance

// const userBalance = 1000;

// if (userBalance > 0) {
//     console.log('Positive');
// } else {
//     console.log('Negative');
// }

//! Deadline

// const daysTill = Number(prompt('How many days left?'));

// if (daysTill === 0) {
//     console.log('Today');
// } else if (daysTill === 1) {
//     console.log('Tomorrow');
// } else if (daysTill >= 2) {
//     console.log('Future');
// } else {
//     console.log('Incorrect');
// }

//! Ternary - 1

// const NumA = 4;
// const NumB = 1;

// let result = NumA + NumB > 4 ? 'Bagato' : 'Malo';

// console.log(result);

//! Ternary - 2

// const login = ''
// let message = '';

// if (login === 'User')
//  {
//     console.log('Hi');
//  } else if (login === 'Director') {
//     console.log('Have a good day!');
//  } else if (login === '') {
//     console.log('Not You');
//  } else {
//     console.log('Off!');
//  }

// const login = prompt('Enter')
// let message = login === '1' ? 'Hi' : login === '2' ? 'Have a break' : login === '3' ? 'Not' : 'Exit';

// console.log(message);

//! Switch - 1

// const color = prompt('Color');
// let message = '';

// switch (color) {
//     case 'red': {
//         console.log('is red');
//         break;
//     }
//     case 'blue': {
//         console.log('is blue');
//         break;
//     }
//     default: {
//         console.log('Green');
//     }
// }

//! Switch - 2

// const value = Number(prompt('Enter'));
// let message = '';

// switch (value) {
//     case 1: {
//         message = 'Yes';
//         break;
//     }
//     case 2: {
//         message = 'No';
//         break;
//     }
//     case 3: {
//         message = 'Maybe'
//         break;
//     }
//     default: {
//         message = 'Off'
//     }
// }
// console.log(message);

//todo ===== Логічні оператори && || !

//todo == &&

// console.log(5 && 4); // 4
// console.log(5 && 'go'); // go
// console.log(0 && true); // 0

//todo == Перевірити діапазон

// const num = 18;

// if (num >= 15) {
//     if (num <= 20) {
//         console.log('yes');
//     }
// }

// if (num >= 15 && num <= 20) {
//     console.log('too');
// }

//todo == ||

// console.log(5 || 0); //5 - first true
// console.log(0 || false); // - last false

//todo == Вибрати за замовчуванням default

// const user = prompt('Enter name') || 'Nonamed'
// console.log(user);

//! === Задачі лекції 2

//todo == minutes

// const minutes = Number(prompt('How much?'))

// if (minutes > 0 && minutes <= 15) {
//     console.log('Перша');
// } else if (minutes > 15 && minutes <= 30) {
//     console.log('Друга');
// } else if (minutes > 30 && minutes <= 45) {
//     console.log('Третя');
// } else {
//     console.log('Четверта');
// }

//todo == number 0-3

// const number = Number(prompt('Enter'))

// switch (number) {
//     case 1: {
//         console.log('one');
//         break;
//     }
//     case 2: {
//         console.log('two');
//         break;
//     }
//     case 3: {
//         console.log('three');
//         break;
//     }
//     default: {
//         console.log('nope!');
//     }
// }

//todo == clg?

// console.log(true && 3);
// console.log(false && 3);
// console.log(true && 4 && 'kiwi');
// console.log(true && 0 && "huj");
// console.log(true || false);
// console.log(null || 2 || undefined);
// console.log(null || (2 && 3) || 4);

//! HW-02

//todo === goit-js-hw-02-task-1

// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//     const totalPrice = quantity * pricePerDroid;
//     const message = (totalPrice <= customerCredits) ? `You ordered ${quantity} droids worth ${totalPrice} credits!` : 'Insufficient funds!'
//     return message;
// }

// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

//todo === goit-js-hw-02-task-2

// function formatMessage (message, maxLength) {
//     if (message.length <= maxLength) {
//         return message
//     } else {
//         return message.slice(0, maxLength) + '...'
//     }
// }

// console.log(formatMessage('text', 2)); // 'te...'
// console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
// console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
// console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
// console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"

//todo === goit-js-hw-02-task-3

// function checkForSpam(message) {
//     if (message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale')) {
//             return true
//         } else {
//             return false
//         }
//     }

//     console.log(checkForSpam("Latest technology news")); // false
//     console.log(checkForSpam("JavaScript weekly newsletter")); // false
//     console.log(checkForSpam("Get best sale offers now!")); // true
//     console.log(checkForSpam("Amazing SalE, only tonight!")); // true
//     console.log(checkForSpam("Trust me, this is not a spam message")); // true
//     console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
//     console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

//todo === goit-js-hw-02-task-4

// function getShippingCost(country) {
//     switch (country) {
//         case 'China': {
//             return `Shipping to ${country} will cost 100 credits`;
//         }
//         case 'Chile': {
//             return `Shipping to ${country} will cost 250 credits`;
//         }
//         case "Australia": {
//             return `Shipping to ${country} will cost 170 credits`;
// }
//         case "Jamaica": {
//             return `Shipping to ${country} will cost 120 credits`;
// }
//         default: {
//             return `Sorry, there is no delivery to your country`}
//     }
// }

// console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"



//! ===== Конспект 2 =====

//todo === if ===

//todo == subscription

// let price = 0;
// const subscr = 'pro'

// if (subscr === 'pro') {
//     price = 100;
// }

// console.log(price);

// function getPrice (sub) {
//     let price = 0;
    
//     if (sub === 'pro') {
//         price = 100
//     }
//     return price;
// }
// console.log(getPrice('pro'));

//todo == get age

// function checkAge(age) {
//     if (age >= 18) {
//         return 'You are an adult'
//     }
// }
// console.log(checkAge(19));

//todo === if else ===

// const grade = 85;
// if (grade > 70) {
//     console.log('yes!');
// } else {
//     console.log('nope');
// }

// function check (grade) {
//     if (grade >=70) {
//         return 'yes'
//     } else {
//         return 'no'
//     }
// }
// console.log(check(69));

//todo == check storage

// function checkStorage (avail, order) {
//     if (avail<order) {
//         return 'Not enough goods in stock!';
//     } else {
//         return 'Order is processed, our manager will contact you'
//     }
// }
// console.log(checkStorage(200, 20));

//todo === else if ===

// function check(grade) {

// if (grade <20) {
//     return 'good'
// } else if (grade >=20 && grade < 40) {
//     return 'well'
// } else {
//     return 'perf!'
// }
// }
// console.log(check(50));

//todo === ternary ===

// let type;
// const age = 18;

// if (age >= 18) {
//     type = 'adult'
// } else {
//     type = 'nope'
// }
// console.log(type);

//todo == age

// const age = 17;
// const type = age >=18 ? 'adult' : 'nope'
// console.log(type);

//todo == bigger number

// const a = 5;
// const b = 10;
// let bigger;

// if (a>b) {
//     bigger = a;
// } else {
//     bigger = b;
// }

// console.log(bigger);

// const a = 5;
// const b = 10;
// let bigger = a > b ? a : b;

// console.log(bigger);

//todo == checkPassword

// function checkPassword (password) {
//     const correctPassword = "jqueryismyjam";
//     return password === correctPassword ? "Access granted" : "Access denied, wrong password!"
// }
// console.log(checkPassword('jqueryismyjam'));

//todo == 5 задач на тернарний від chatGPT

//todo == 1 == Парність числа

// const num = 9;

// const res = num % 2 === 0 ? 'Even' : 'Not even'

// console.log(res);

//todo == 2 == checkAge

// const age = 21;

// const check = age >= 18 ? 'Adult' : 'Child'

// console.log(check);

//todo == 3 == + / - / 0

// const num = Number(prompt('Enter'));

// const type = num > 0 ? '+' : num < 0 ? '-' : '0';

// console.log(type);

//todo == 4 == checkLogin

// const user = prompt('Enter')

// const message = user === 'admin' ? 'Hello' : 'who are you?'

// console.log(message);

//todo == 5 == discount

// const price = 100;

// const discount = price > 100 ? 'Yes' : 'No';

// console.log(discount);

//todo === switch ===

// const fruit = prompt('enter')

// switch (fruit) {
//     case 'apple':
//         console.log('it`s an apple');
//         break;
//     case 'banana':
//         console.log('it`s a banana');
//         break;
//     default:
//         console.log('unknown');
//         }

//todo == season

// const month = prompt('month?')

// switch (month) {
//     case 'dec':
//     case 'jan':
//     case 'feb':
//         console.log('winter');
//         break;
//     case 'mar':
//     case 'apr':
//     case 'may':
//         console.log('spring');
//         break;
//     case 'jun':
//     case 'jul':
//     case 'aug':
//         console.log('summer');
//         break;
//     case 'sep':
//     case 'oct':
//     case 'nov':
//         console.log('autumn');
//         break;
//     default:
//         console.log('nope');
// }

//todo == auto == function getSubscriptionPrice(type) {}

// function getSubscriptionPrice(type) {
//     switch (type) {
//         case "starter":
//             return 0;
//             break;
//         case "professional":
//             return 20;
//             break;
//         case "organization":
//             return 50;
//             break;
//         default:
//             return "Invalid subscription type!"
//     }
// }
// console.log(getSubscriptionPrice('professional'));

//todo == working days

// const day = 6;

// switch (day) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         console.log('working');
//         break;
//     case 6:
//     case 7:
//         console.log('day off');
//         break;
//     default:
//         console.log('wrong');
// }

//! =============== МЕТОДИ РЯДКІВ ===============

//! .slice();
//! .toLowerCase();
//! .includes();
//! .startsWith() / .endsWith();
//! .indexOf();
//! .trim();

// const message = 'Awesome'
// console.log(message.length); //7

//todo === string.slice(startIndex, endIndex)

// const name = 'Paska';
// console.log(name.slice(0, 3)); //Pas
// console.log(name.slice()); //Paska
// console.log(name.slice(1, name.length)); //aska
// console.log(name.slice(2)); //ska

//todo == getSubstring

// function getSubstring (string, length) {
//     return string = string.slice(0, length);
// }
// console.log(getSubstring("Hello world", 8));

//todo === toLowerCase / toUpperCase

// const brand = 'Samsung';
// const input = 'sAmsUng';
// const lowerBrand = brand.toLowerCase();
// const lowerInput = input.toLowerCase();
// console.log(lowerBrand === lowerInput);

//todo == normalizeInput

// function normalizeInput (input, to) {
//     if (to === "upper") {
//         return input.toUpperCase();
//     } else {
//         return input.toLowerCase();
//     }
// }

// console.log(normalizeInput('Go Away!', "lower"));
// console.log(normalizeInput('Go Away!', "upper"));

//todo === includes();

//todo string.includes(substring);

// const user = 'Paska'
// console.log(user.includes('ask')); //true

//todo == spam

// const message = 'Please buy!'
// const hasSpam = message.includes('buy')

// if (hasSpam) {
//     console.log('Has Spam');
// } else {
//     console.log('Safely');
// }

//todo == checkForName

// function checkForName(fullName, firstName) {
//     return fullName.toLowerCase().includes(firstName.toLowerCase())

// //   return fullName.toLowerCase.includes(firstName.toLowerCase)
// }

// console.log(checkForName("Jason Neis", "Jason"));

//todo === .stratsWith(substr)

// const string = 'Hello world!'
// console.log(string.startsWith('Hell')); //true

//todo == checkFileExtension

// function checkFileExtension (fileName, ext) {
//     return fileName.endsWith(ext) ? "File extension matches" : "File extension does not match"
// }

// console.log(checkFileExtension("app.js", ".html"));
// console.log(checkFileExtension('index.html', '.html'));

//todo === .indexOf(substr)

// const string = 'Welcome to Fastiv';
// const index = string.indexOf('Fast');
// console.log(index); // 11

// const index = string.indexOf('from')
// console.log(index); // -1

// function getFileName (file) {
//     return file.includes('.') ? file.slice(0, file.indexOf('.')) : file;
// }
// console.log(getFileName('me.html'));

//todo === str.trim()

// function createFileName (file, ext) {
//     return `${file.trim()}.${ext}`
// }
// console.log(createFileName(" order ", "txt"));

//! ========== ЦИКЛИ ==========

//todo === while ===

// while (condition) {
//     statement
// }

// let count = 0;

// while (count < 10) {
//     console.log(count);
//     count +=1;
// }

//todo == clientCounter

// let clientCounter = 18;
// let maxClients = 25;

// while (clientCounter <= maxClients) {
//     console.log(clientCounter);
//     clientCounter +=1;
// }

//todo == Змінна ==

// function countClients (clientCounter, maxClients) {
//     let counter = clientCounter;

//     while (counter <= maxClients) {
//         console.log(counter);
//         counter +=1;
//     }
// }
// countClients(18, 25);

// function calculateTotal (number) {
//     let sum = 0;
//     for (let i = 0; i <= number; i++) { 
//         sum += i;
//         }
//         return sum; 
// }
// console.log(calculateTotal(24)); // 300

// function calc(num) {
//     let sum = 0;
//     for (let i=0; i<=num; i++) {
//         sum+=i;
//     }
//     return sum;
// }
// console.log(calc(8)); // 36

//todo == Задачі на while

//todo == #1 == 1 to 10

// let i = 1;
// while (i<=10) {
//     console.log(i);
//     i++;
// }


// console.log(Math.floor(Math.random())); // 0

// console.log(Math.floor((Math.random() + 1) * 10)); // from 11 to 19


// console.log(((Math.random() * 100) + 1).toFixed())


//todo === Рандом від 1 до 100

// console.log(parseInt(Math.random() * 100)); // parseInt

// console.log((Math.random().toFixed(2)) * 100); // toFixed

// console.log(Math.floor((Math.random() * 100) + 1)); // Math.floor



//todo == #2 == guess a number

// const secret = (Math.random().toFixed(1)) * 10;
// let guess;

// while (guess !== secret) {
//     guess = parseInt(prompt('Guess a number'));
//     if (guess === secret) {
//         console.log('Yes!');
//     } else {console.log('No.');}
// }

//todo == Масив квадратів

// const numbers = [1, 2, 3, 4, 5];
// let squares = [];

// for (let i = 0; i < numbers.length; i++) {
//   let square = numbers[i] ** 2;
//   squares.push(square);
// }

// console.log(`Масив квадратів: ${squares}`);

//todo == Парне число з масиву

// const numbers = [2, 3, 4, 5, 6]

// for (let number of numbers) {
//     if (number % 2 === 0) {
//         console.log(`Even nuber is ${number}`);
//         }
// }

// let i = 0;

// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// let j = 8;

// while (j <= 10) {
//     console.log(j);
//     j += 2;
// }

// let m = 18;

// while (m >= 0) {
//     if (m % 3 === 0) {
//     console.log(m);
//     }
//     m--;
// }

//todo == НСдільник

// let a = 12;
// let b = 72;

// while (b !== 0) {
//     let temp = b;
//     b = a % b
// }

// console.log('fuck');

// let i = 15;

// while (i > 0) {
//     if (i % 3 === 0) {
//         console.log(i);
//     }
//     i--;
// }

// function countClients(clientCounter, maxClients) {
//     let counter = clientCounter;
    
//     while (counter < maxClients) {
//         console.log(counter);
//     }
//     counter ++;
// }
// countClients(18, 23);