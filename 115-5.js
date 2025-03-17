//todo =========================
//todo ===== Суворий режим =====
//todo =========================

// function strickt () {
//     'use strickt';
//     function nested() {
//         return '- Me too!'
//     }
//     return '- Hello! I`m strickt! ' + nested()
// }
// console.log(strickt());


//todo =======================================================================================================
//todo ===========================================   Конспект 5   ============================================
//todo ===================================   Перебираючі методи масивів   ====================================
//todo =======================================================================================================

// function greet(name) {
//     console.log(`Hello ${name}`);
// }
// console.log(greet);

//todo == auto 1 ==

// function makePizza() {
//     return "Your pizza is being prepared, please wait.";
//   }
// const result = makePizza(); // Your pizza is being prepared, please wait.
// const pointer = makePizza; // ƒ makePizza() { return "Your pizza is being prepared, please wait."; }


//todo ==========================
//todo ===== Колбек-функції =====
//todo ==========================

// function greet(name) {
//     console.log(`Wellcome, ${name}!`);
// }
// function notify(name) {
//     console.log(`Come in!`);
// }
// function registerGuest(name, callback) {
//     // console.log(`Registering ${name}`);
//     callback(name);
// }

// registerGuest('John', greet);
// registerGuest('John', notify)



//todo ==========================
//todo ===== Інлайн-колбек ======
//todo ==========================

// function registerGuest (name, callback) {
//     callback(name);
// };
// register ('John', function greet(name) { // function greet(name) { console.log(`Welcome, ${name}!`) } - це інлайн-колбек
//     console.log(`Welcome, ${name}!`)
// });

//todo ==============================
//todo ===== forEach(callback) ======
//todo ==============================

// const numbers = [5, 10, 15, 20, 25];
// numbers.forEach(function (number, index) {
//     console.log(`Index ${index}, value ${number}`);
//   }); // Index 0, value 5 etc

//todo == auto == calculateTotalPrice(orderedItems) ==

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
  
//     orderedItems.forEach(function(num) {
//         totalPrice += num;
//     });
  
//     return totalPrice;
//   }
//   console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116

//todo == auto == filterArray(numbers, value)

// function filterArray(numbers, value) {
//     const numArr = [];

//     numbers.forEach(function(num) {
//         if (num > value) {
//             numArr.push(num)
//         }
//     });

//     return numArr;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));


//todo =============================================================
//todo ===================== СТрілочні функції =====================
//todo =============================================================

// const arrowAdd = (a,b,c) => {
//     return a+b+c;
// }
// console.log(arrowAdd(1,2,3)); // 6

//todo == auto == function => arrow

// function calculateTotalPrice(quantity, pricePerItem) {
//     return quantity * pricePerItem; // order foo
//   }

// const calculateTotalPrice = (quantity, pricePerItem) => {
//     return quantity * pricePerItem; // arrow foo
// }

//todo ==============================================================
//todo ============ неявне повернення (implicit return) =============
//todo ==============================================================

//* const add = (a,b,c) => a+b+c; // без слова return i фігурних дужок
// console.log(add(2,3,4)); // 9

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// console.log(calculateTotalPrice(100, 13));

//todo ================================
//todo ===== arguments (...rest) ======
//todo ================================

// const add = (...args) => {
//     let total = 0;
//     args.forEach(function(num) {
//         total += num;
//     });
//     return total;
// }
// console.log(add(10,20,30)); // 60

//todo == auto == calculateTotalPrice(orderedItems) == standart ==

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
  
//     orderedItems.forEach(function (item) {
//       totalPrice += item;
//     });
  
//     return totalPrice;
//   }

// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138

//todo == auto == calculateTotalPrice(orderedItems) == arrow ==

// const calculateTotalPrice = (orderedItems) => {

// let totalPrice = 0;

// orderedItems.forEach((item) => totalPrice += item);

// return totalPrice;

// }
// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138

//todo == auto == фільтр чисел == standart ==

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
  
//     numbers.forEach(function (number) {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });
  
//     return filteredNumbers;
//   }
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // 5

//todo == auto == фільтр чисел == arrow ==


// const filterArray = (numbers, value) => {

//     const filteredNumbers = [];

//     numbers.forEach((number) => {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     })

//     return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 4)); // 5


//todo ================================
//todo ======== чисті функції =========
//todo ================================

//todo == dirty foo ==

// const dirtyMultiply = (array, value) => {
//     for (let i = 0; i < array.length; i++) {
//         array[i] *= value;
//     }
// }
// const numbers = [1,2,3];
// dirtyMultiply(numbers, 2);
// console.log(numbers);

//todo == pure foo ==

// const pureMultiply = (array, value) => {
//     const newArray = [];

//     array.forEach(element => {
//         newArray.push(element * value);
//     });

//     return newArray;

// }

// const numbers = [1,2,3,4,5];
// const doubledNumbers = pureMultiply(numbers, 2);

// console.log(numbers);
// console.log(doubledNumbers);
// console.log(pureMultiply(numbers, 2));

//todo == auto == changeEven == dirty ==

//   function changeEven(numbers, value) {
//     for (let i = 0; i < numbers.length; i += 1) {
//       if (numbers[i] % 2 === 0) {
//         numbers[i] = numbers[i] + value;
//       }
//     }
//     return numbers;
//   }

// console.log(changeEven([1, 2, 3, 4, 5], 10));

//todo == auto == changeEven == pure ==

// function changeEven(numbers, value) {
//     const newArray = [];

//     numbers.forEach((number) => {
//         if (number % 2 === 0) {
//             newArray.push(number + value);
//         } else {
//             newArray.push(number);
//         }
//     })

//     return newArray;
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));


//todo ================================
//todo ======== map i flatMap =========
//todo ================================

//todo ===== map ===== створює новий масив з результатами трансформації

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const inUpper = planets.map(planet => planet.toUpperCase());
// console.log(inUpper);

// const inLower = planets.map(planet => planet.toLowerCase());
// console.log(inLower);

//todo == auto == довжини назв ==

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);

//todo == масив об'єктів == перебирає масив об'єктів

// const students = [
//     { name: "Mango", score: 83 },
//     { name: "Poly", score: 59 },
//     { name: "Ajax", score: 37 },
//     { name: "Kiwi", score: 94 },
//     { name: "Houston", score: 64 },
//   ];

// const studentNames = students.map(student => student.name);
// console.log(studentNames);

//todo ===== flatMap ===== перебирає масив об'єктів у яких є масиви

//? array.flatMap(element => { })

// const students = [
//     { name: "Mango", courses: ["mathematics", "physics"] },
//     { name: "Poly", courses: ["science", "mathematics"] },
//     { name: "Kiwi", courses: ["physics", "biology"] },
//   ];

// const mapped = students.map(course => course.courses);
// console.log(mapped);
// const flattened = students.flatMap(course => course.courses);
// console.log(flattened);
// const filtered = flattened.filter((item, index) => flattened.indexOf(item) === index);
// console.log(filtered);


//todo == auto == Пошти користувачів ==

// const users = [
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       skills: ["ipsum", "lorem"],
//       gender: "male",
//       age: 37,
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//       gender: "female",
//       age: 34,
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//       gender: "male",
//       age: 24,
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       skills: ["adipisicing", "irure", "velit"],
//       gender: "female",
//       age: 21,
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       skills: ["ex", "culpa", "nostrud"],
//       gender: "male",
//       age: 27,
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       skills: ["non", "amet", "ipsum"],
//       gender: "male",
//       age: 38,
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       skills: ["lorem", "veniam", "culpa"],
//       gender: "female",
//       age: 39,
//     },
//   ];

// const getUserEmails = users.flatMap(mail => mail.email);
// console.log(getUserEmails);

// const getUserEmails = (users) => {
//     const newArr = [];
//     users.map(user => newArr.push(user.email));
//     return newArr;
//   }

// const getUserEmails = users.map(user => user.email);
// console.log(getUserEmails(users));

//todo ====================================
//todo ======== filter (без find) =========
//todo ====================================

//todo ===== filter =====

// const values = [51, -3, 27, 21, -68, 42, -37];

// const positives = values.filter(value => value > 0);
// console.log(positive);

// const negatives = values.filter(value => value < 0);
// console.log(negatives);

//todo == auto = even/odd ==

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// console.log(evenNumbers);

// const oddNumbers = numbers.filter(number => number % 2 !== 0);
// console.log(oddNumbers);

//todo == SCORES ==

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best);
// const bestNames = best.map(name => name.name);
// console.log(bestNames);

// const worst = students.filter(student => student.score < LOW_SCORE)
// console.log(worst);

//todo =====  try {} catch (error) {console.log (what?, error)} =====

// try {const middle = students.filte(student => student.score >= LOW_SCORE && student.score < HIGH_SCORE);
// console.log(middle);}
// catch (error) {
//     console.error('what?', error);
// }

//todo == auto == books rating by author ==

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];
  
//   const MIN_RATING = 8;
//   const AUTHOR = "Bernard Cornwell";
  
//   const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
//   console.log(topRatedBooks);
//   const booksByAuthor = books.filter(book => book.author === AUTHOR);
// console.log(booksByAuthor);

//todo == auto 1 == eyeColor ==

//todo == first attempt
//   const greenEyes = users.filter(user => user.eyeColor === 'green').map(greenName =>greenName.name);
//   console.log(greenEyes);

//todo == масив
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]

//todo == повертає масиви користувачів
// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(user => user.eyeColor === color);
// }
// console.log(getUsersWithEyeColor(users, 'blue'));

//todo == повертає масив імен користувачів
// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(user => user.eyeColor === color).map(user => user.name);
// };
// console.log(getUsersWithEyeColor(users, 'green'));

//todo == auto 2 == usersAge ==

// const getUsersWithAge = (users, minAge, maxAge) => {
//     return users.filter(user => user.age >= minAge && user.age <= maxAge);
// };
// console.log(getUsersWithAge(users, 20, 30));

//todo =================================
//todo ============= find ==============
//todo =================================

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];
// const found = colorPickerOptions.find(option => option.label === 'pink');
// console.log(found);

//todo == auto == userByEmail ==

// const getUserWithEmail = (users, email) => {
//   return users.find(user => user.email === email);
// };
// console.log(getUserWithEmail(users, "shereeanthony@kog.com"));


//todo ==================================
//todo ============= every ==============
//todo ==================================

// console.log([1,2,3,4,5,6].every(value => value >= 0)); // true

// const nums = [1,2,3,-10,0];
// console.log(nums.every(num => num >= 0)); //false

// const products = [
// 	{ name: "apple", quantity: 2 },
// 	{ name: "orange", quantity: 5 },
// 	{ name: "plum", quantity: 0 },
// ];

// const hasEvery = products.every(prod => prod.quantity > 0);
// console.log(hasEvery);

//todo == auto == isActive == //false

// const isEveryUserActive = (users) => {
//   return users.every(user => user.isActive === true);
// };
// console.log(isEveryUserActive(users));

//todo ===== коротший запис від Чату =====

// const user37 = (users) => users.find(user => user.age === 37);

// console.log(user37(users));

//todo =================================
//todo ============= some ==============
//todo =================================

// console.log([1,-2,3].some(num => num < 0)); //true

//todo == isAnyUserActive ==

// const isAnyUserActive = (users) => {
//   return users.some(user => user.isActive === true);
// };
// console.log(isAnyUserActive(users));

// const isAnyUserActive = (users) => users.some(user => user.isActive);
// console.log(isAnyUserActive(users));


//todo ===================================
//todo ============= reduce ==============
//todo ===================================

//* array.reduce(acc, element, index, array) { }

//? Задачі від Чатіка

//* сума елементів

// const arr = [1,2,3,4,5];
// const sum = arr.reduce((acc, num) => acc + num, 0)
// console.log(sum); // 15

//* пошук найбільшого

// const numbers = [4, 12, 7, 25, 8];
// const max = numbers.reduce((acc, num) => (acc > num ? acc : num), numbers[0])
// console.log(max); // 25

//todo == auto == totalPlayTime ==

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((acc, playtime) => acc + playtime, 0);

// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(totalPlayTime);
// console.log(averagePlayTime);

//todo == total & average ==

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const total = students.reduce((acc, student) => acc + student.score, 0);
// console.log(total);
// const average = total / students.length;
// console.log(average);

//todo == totalAveragePlaytimePerGame ==

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((acc, player) => acc + 
// (player.playtime / player.gamesPlayed), 0);

// const onePlayTime = players.reduce((acc, player) => acc + 
// (player.playtime / player.gamesPlayed), 0);
// console.log(onePlayTime);

// console.log(1270/4 + 469/2 + 690/3 + 241);

//todo == calculateTotalBalance ==

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// const calculateTotalBalance = (users) => {
//   return users.reduce((acc, user) => acc + user.balance, 0)
// };

// console.log(calculateTotalBalance(users));

//todo =====================================
//todo ============= toSorted ==============
//todo =====================================

// const nums = [1,3,2];
// const sort = nums.toSorted();
// console.log(sort); // [1,2,3]

//todo == числа сортуються за юнікодом ==

// const scores = [27, 2, 41, 4, 7, 3, 75];

// console.log(scores.toSorted()); // [2, 27, 3, 4, 41, 7, 75]

//todo == масив рядків сортується за алфавітом ==

// const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

// console.log(students.toSorted()); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

//todo == порядковий номер великих літер менший, ніж у малих ==

// const letters = ["b", "B", "a", "A", "c", "C"];

// console.log(letters.toSorted()); // ["A", "B", "C", "a", "b", "c"]

//todo == releadeDates ==

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];

// const ascendingReleaseDates = releaseDates.toSorted();
// console.log(ascendingReleaseDates);
// const alphabeticalAuthors = authors.toSorted();
// console.log(alphabeticalAuthors);

//todo == свій порядок ==

// const scores = [61, 19, 74, 35, 92, 56];
// const asc = scores.toSorted((a, b) => a - b);
// const desc = scores.toSorted((a, b) => b - a);
// console.log(asc); // [19, 35, 56, 61, 74, 92]
// console.log(desc); // [92, 74, 61, 56, 35, 19]

//todo == сортування рядків ==

// const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];
// const asc = students.toSorted((a,b) => a.localeCompare(b));
// console.log(asc);
// const desc = students.toSorted((a,b) => b.localeCompare(a));
// console.log(desc);

//todo == asc.scores == desc.scores == alph.names ==

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
// ];

// const asc = students.toSorted((a,b) => a.score - b.score);
// console.log(asc);
// const desc = students.toSorted((a,b) => b.score - a.score);
// console.log(desc);
// const alph = students.toSorted((a,b) => a.name.localeCompare(b.name));
// console.log(alph);

//todo == auto == sortedBy (toSorted()) ==

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     rating: 7.94,
//   },
//   {
//     title: "Enemy of God",
//     author: "Bernard Cornwell",
//     rating: 8.67,
//   },
// ];

// const sortedByAuthorName = books.toSorted((a,b) => a.author.localeCompare(b.author));
// console.log(sortedByAuthorName);

// const sortedByReversedAuthorName = books.toSorted((a,b) => b.author.localeCompare(a.author));
// console.log(sortedByReversedAuthorName);

// const sortedByAscendingRating = books.toSorted((a,b) => a.rating - b.rating);
// console.log(sortedByAscendingRating);

// const sortedByDescentingRating = books.toSorted((a,b) => b.rating - a.rating);
// console.log(sortedByDescentingRating);

//todo == ланцюжки методів ==

// const students = [
//   { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
//   { name: "Poly", score: 59, courses: ["science", "mathematics"] },
//   { name: "Ajax", score: 37, courses: ["physics", "biology"] },
//   { name: "Kiwi", score: 94, courses: ["literature", "science"] },
// ];

// const sortedByScore = students.toSorted((a,b) => a.score - b.score);
// console.log(sortedByScore);
// const names = sortedByScore.map(student => student.name);
// console.log(names);

// const pravilno = students.toSorted((a,b) => a.score - b.score).map(student => student.name);
// console.log(pravilno);

//todo == auto == filter + map + toSorted ==

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books.filter(book => book.rating > MIN_BOOK_RATING)
// .map(author => author.author)
// .toSorted((a,b) => a.localeCompare(b));
// console.log(names);

//todo ======================== hw-05-01 ==============================
//todo ====================== 18.03.25 (ПН) ===========================
//todo ================================================================

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     balance: 2811
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     balance: 3821
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     balance: 3793
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     balance: 2278
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     balance: 3951
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     balance: 1498
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     balance: 2764
//   },
// ]

// const getUserNames = (users) => {
//   return users.map(user => user.name)
// }

// console.log(getUserNames(users));

//todo ======================== hw-05-02 ==============================
//todo ====================== 18.03.25 (ПН) ===========================
//todo ================================================================

// const allUsers = [
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"]
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"]
//   },
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"]
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"]
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ];

// const getUsersWithFriend = (allUsers, friendName) => allUsers.filter(user => user.friends.includes(friendName));
// console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));


//todo ======================== hw-05-03 ==============================
//todo ====================== 18.03.25 (ПН) ===========================
//todo ================================================================

// const sortByDescendingFriendCount = users => users.toSorted((a,b) => b.friends.length - a.friends.length);

// console.log(
//   sortByDescendingFriendCount([
//     {
//       name: "Moore Hensley",
//       friends: ["Sharron Pace"],
//       gender: "male"
//     },
//     {
//       name: "Sharlene Bush",
//       friends: ["Briana Decker", "Sharron Pace"],
//       gender: "female"
//     },
//     {
//       name: "Ross Vazquez",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       gender: "male"
//     },
//     {
//       name: "Elma Head",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       gender: "female"
//     },
//     {
//       name: "Carey Barr",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       gender: "male"
//     },
//     {
//       name: "Blackburn Dotson",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       gender: "male"
//     },
//     {
//       name: "Sheree Anthony",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       gender: "female"
//     }
//   ])
// );
// [
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"],
//     gender: "female"
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     gender: "female"
//   },
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"],
//     gender: "male"
//   }
// ]

//todo ======================== hw-05-04 ==============================
//todo ====================== 18.03.25 (ПН) ===========================
//todo ================================================================

const getTotalBalanceByGender = (users, gender) => users.filter(user => user.gender === gender)
.reduce((acc, user) => acc + user.balance, 0);

const clients = [
	{
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log(getTotalBalanceByGender(clients, "male")); // 12053

console.log(getTotalBalanceByGender(clients, "female")); // 8863