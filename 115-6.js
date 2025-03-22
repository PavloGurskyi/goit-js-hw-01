//todo ========================================================================================================
//todo ============================================   Конспект 6   ============================================
//todo ===================================   this, Прототипи, ООП. Класи   ====================================
//todo ========================================================================================================

//todo ==========================
//todo ========== this ==========
//todo ==========================

//todo == auto == pizzaPalace ==

// const pizzaPalace = {
//   pizzas: ['Supercheese', 'Smoked', 'Four meats'],
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };

// console.log(pizzaPalace.order('Four meats'));

// const user = {
//   userName: 'Pavlo',
//   showThis() {
//     console.log(this);
//   },
// };
// user.showThis();

//todo =============================
//todo ========== context ==========
//todo =============================

// function showThis() {
//   console.log('show', this);
// }
// showThis();

// const user = {
//   userName: 'Pavlo',
//   showThis() {
//     console.log(this);
//   },
// };

// console.log(user);

// user.showContext = showThis;
// user.showContext();
// console.log(user);

//todo =============================
//todo ========== .call() ==========
//todo =============================

// function greet(str) {
//   console.log(`${str}, ${this.username}! Your room is ${this.room}.`);
// }
// const pavlo = {
//   username: 'Pavlo',
//   room: 12,
// };
// const olena = {
//   username: 'Olena',
//   room: 13,
// };
// greet.call(pavlo, 'Hello');
// greet.call(olena, 'Hello');

// function showName() {
//   console.log(this.name);
// }
// const user = {
//   name: 'Alice',
// };
// showName.call(user);

// function greet(name) {
//   console.log(`Hello, ${name}! I am ${this.person}`);
// }
// const context = {
//   person: 'Alice',
// };
// greet.call(context, 'Pavlo');

//todo ==============================
//todo ========== .apply() ==========
//todo ==============================

// greet.apply(olena, ['Aloha']);

//todo =============================
//todo ========== .bind() ==========
//todo =============================

// const boundFoo = foo.bind(thisArg, arg1, arg2);

// const customer = {
//   person: 'Pavlo',
//   sayHello() {
//     console.log(`Hello, ${this.person}!`);
//   },
// };
// customer.sayHello();

// const greet = customer.sayHello.bind(customer); // створили нову функцію !

// greet(); // викликали

// const customer = {
//   first: 'Pavlo',
//   last: 'Gurskiy',
//   showname() {
//     return `${this.first} ${this.last}`;
//   },
// };
// console.log(customer.showname());

// function makeMessage(callback) {
//   const username = callback();
//   console.log(`Processing from ${username}`);
// }

// makeMessage(customer.showname.bind(customer));

// const library = {
//   books: 1923,
//   logBookCount() {
//     console.log(this.books);
//   },
// };

// const showBooks = library.logBookCount.bind({ books: 724 });

// showBooks();

// const library = {
//   books: 1923,
//   logBookCount() {
//     console.log(this.books);
//   },
// };

// function showBooks(callback) {
//   callback();
// }

// showBooks(library.logBookCount.bind(library));

//todo ==> стрілки <==

// const showThis = () => {
//   console.log('this in showThis: ', this); // window
// };
// showThis(); // undefined (window)

// const hotel = {
//   hotelName: 'Unava',
//   showThis() {
//     console.log('text', this);
//     const foo = () => {
//       console.log('also', this);
//     };
//     foo();
//   },
// };
// hotel.showThis();

//? ==> ігнорують суворий режим <==

// const a = () => {
//   console.log(this);
// };
// function b() {
//   a();
// }
// b.call({ user: 'Mango' });

//todo ===============================
//todo ========== Прототипи ==========
//todo ===============================

// const objA = { a: 'objA' };
// const objB = Object.create(objA); // objB - prototype of objA
// console.log(objB.a); // передаємо ключ властивості 'a'

//?

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = 'Torik';

// console.log(dog);
// console.log(dog.legs); // 4

//todo == auto == parent`s child ==

// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish',
// };

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// console.log(child.name);
// console.log(child.surname);
// console.log(
//   `${child.name} ${child.surname} is a ${parent.isPrototypeOf(
//     child
//   )} child of ${parent.name} ${parent.surname}.`
// );

//todo =======================================
//todo ========== .hasOwnProperty() ==========
//todo =======================================

const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = 'Rocky';

// console.log(dog);
// console.log(dog.name);
// console.log(dog.legs);
// console.log(dog.hasOwnProperty('name')); // t
// console.log(dog.hasOwnProperty('legs')); // f

//todo =================================================
//todo ========== перебір власих властивостей ==========
//todo =================================================

// for (const key in dog) { // перебирає всі, власні і ні
//   console.log(key);
// }

// for (const key in dog) {
//   if (dog.hasOwnProperty(key)) {
//? перебирає тільки власні
//     console.log(key);
//   }
// }

//? використовуй .Object.keys() i .Object.values() + for...of

// for (const key of Object.values(dog)) {
//   console.log(key);
// }

//todo =========================================
//todo ========== Ланцюжки прототипів ==========
//todo =========================================

// const objC = { c: 'objC' };

// const objB = Object.create(objC);
// objB.b = 'objB';

// const objA = Object.create(objB);
// objA.a = 'objA';

// console.log(objA); // {a: 'objA'}
// console.log(objA.c); // objC

// const apartment = {
//   rooms: 4,
//   floor: 2,
//   taxFree: false,
// };

// const condo = Object.create(apartment);
// condo.rooms = 3;
// console.log(condo.rooms); // 3

//todo ==================================================================================
//todo =================================   Конспект 6   =================================
//todo =====================   Об'єктно-орієнтоване пограмування   ======================
//todo ==================================================================================

//? =============================================
//? ========== Процедурне пограмування ==========
//? =============================================

// const salary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (salary, overtime, rate) => {
//   return salary + overtime * rate;
// };
// console.log(getWage(salary, overtime, rate));

//? =============================================
//? ==================== ООП ====================
//? =============================================

// const employee = {
//   salary: 30000,
//   over: 10,
//   rate: 20,
//   getWage() {
//     return this.salary + this.over * this.rate;
//   },
// };

// console.log(employee.getWage());

//todo ==================================================================================
//todo =================================   Конспект 6   =================================
//todo ===================================   Класи   ====================================
//todo ==================================================================================
