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

// class Super {} // class
// console.log(Super);

// const mega = new Super(); // екземпляр
// console.log(mega);

// const multi = new Super(); // екземпляр
// console.log(multi);

//? =============================================
//? ================ constructor ================
//? =============================================

// class User {
//   constructor() {
//     console.log('constructor call');
//   }
// }

// const puper = new User();
// console.log(puper);

// class User {
//   constructor(name, mail) {
//     console.log(name, mail);
//     this.name = name;
//     this.mail = mail;
//   }
// }
// const pavlo = new User('Pavlo', 'pavlo.gurskiy@gmail.com');
// console.log(pavlo);

//todo == auto == class Car {} ==

// class Car {
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }

// const audi = new Car('audi', 'q3', 36000);
// console.log(audi);

// class Animal {
//   constructor(breed, name, color) {
//     this.breed = breed;
//     this.name = name;
//     this.color = color;
//   }
// }

// const tor = new Animal('labrador', 'Torik', 'black');
// console.log(tor);

//? ===================================================
//? ================ об'єкт параметрів ================
//? ===================================================

// class User {
//   constructor(param) {
//     this.name = param.name;
//     this.age = param.age;
//   }
// }
// const lila = new User({ name: 'Lila', age: 19 });

// console.log(lila);
// console.log(lila.name);
// console.log(lila.age);

//todo == refactor ==

// class Car {
//   constructor(param) {
//     this.brand = param.brand;
//     this.model = param.model;
//     this.price = param.price;
//   }
// }
// const bmw = new Car({ brand: 'BMW', model: 'X5', price: 58900 });
// console.log(bmw);

//? ====================================================
//? =================== методи класу ===================
//? ====================================================
// class User {
//   constructor(param) {
//     this.name = param.name;
//     this.age = param.age;
//     this.email = param.email;
//   }
//   getEmail() {
//     return this.email;
//   }
//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
//   getOlder() {
//     return (this.age += 1);
//   }
// }

// const paska = new User({
//   name: 'Pavlo',
//   email: 'pavlo.gurskiy@gmail.com',
//   age: 36,
// });
// console.log(paska);

// console.log(paska.getEmail());
// paska.getOlder();
// console.log(paska);
// paska.changeEmail('no email');
// console.log(paska);
// console.log(paska.getEmail());

//todo == auto == class methods ==

// class Car {
//   constructor(param) {
//     this.brand = param.brand;
//     this.model = param.model;
//     this.price = param.price;
//   }
//   getPrice() {
//     return this.price;
//   }
//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
// }

// console.log(User.prototype);

//? ====================================================
//? ============== приватні властивості # ==============
//? ====================================================

// class Car {
//   #brand;
//   constructor(params) {
//     this.#brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }

//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }

//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }

//todo == Приватний метод для валідації електронної пошти ==

// #validateEmail(email) {
//     return email.includes('@');
//   }

// }
// console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 }));

//? =======================================
//? ============== get i set ==============
//? =======================================

// class User {
//   #email;
//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({ name: 'Mango', email: 'mango@mail.com' });
// console.log(mango.email);
// mango.email = 'newmail@mail.com';
// console.log(mango.email);

//todo == auto == get i set ==

// class Car {
//   #brand;
//   #model;
//   #price;

//   constructor(params) {
//     this.#brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }

//   get brand() {
//     return this.#brand;
//   }
//   set brand(newBrand) {
//     return (this.#brand = newBrand);
//   }

//   get model() {
//     return this.#model;
//   }
//   set model(newModel) {
//     return (this.model = newModel);
//   }

//   get price() {
//     return this.price;
//   }
//   set price(newPrice) {
//     return (this.price = newPrice);
//   }
// }

//? =========================================================
//? ============== статичні властивості static ==============
//? =========================================================

// class MyClass {
//   static myProp = 'value';
// }
// console.log(MyClass.myProp);

// const examp = new MyClass();
// console.log(examp.myProp); // undef

//todo =====================================================
// class User {
//   static roles = {
//     admin: 'admin',
//     editor: 'editor',
//     basic: 'basic',
//   };

//   #email;
//   #role;

//   constructor(params) {
//     this.#email = params.email;
//     this.#role = params.role || User.roles.basic;
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const mango = new User({ email: 'mango@mail.com', role: User.roles.admin });

// console.log(mango);
// mango.role = User.roles.editor;
// console.log(mango);

// class MyClass {
//   static b = 5;

//   constructor(value) {
//     this.a = value;
//   }
// }

// const instance = new MyClass(10);
// console.log(instance.b);

//todo == auto == Car.maxPrice ==

// class Car {
//   #price;
//   static maxPrice = 50000;
//   constructor(params) {
//     this.#price = params.price;
//   }
//   get price() {
//     return this.#price;
//   }
//   set price(newPrice) {
//     if (newPrice <= Car.maxPrice) {
//       this.#price = newPrice;
//     }
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price);

// audi.price = 49000;
// console.log(audi.price);

// audi.price = 51000;
// console.log(audi.price);

//? =============================================
//? ============== статичні методи ==============
//? =============================================

// class MyClass {
//   static myMethod() {
//     console.log('My static method');
//   }
// }

// MyClass.myMethod();

// class User {
//   static #takenEmails = [];
//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }
//   #email;
//   constructor(params) {
//     this.#email = params.email;
//     User.#takenEmails.push(params.email);
//   }
// }

//? Екземпляр в шляпі на станціїї чекає елекричку

// const mango = new User({ email: 'mango@mail.com' });
// console.log(User.isEmailTaken('mango@mail.com')); // t

//todo == auto == checkPrice(price) ==

// class Car {
//   static checkPrice(price) {
//     if (price <= Car.#maxPrice) {
//       return 'Success! Price is within acceptable limits';
//     }
//     return 'Error! Price exceeds the maximum';
//   }
//   static #maxPrice = 50000;

//   constructor(params) {
//     this.price = params.price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

//? =========================================================
//? ============== наслідування класів extends ==============
//? =========================================================

// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

//! class Editor extends User {}

// const editor = new Editor('pavlo.gurskiy@gmail.com');
// console.log(editor);

//? ==========================================================
//? ============== Конструктор дочірнього класу ==============
//? ==========================================================

// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   constructor(params) {
//     super(params.email);
//     this.posts = params.posts;
//   }
// }

// const editor = new ContentEditor({
//   email: 'mango@mail.com',
//   posts: [],
// });
// console.log(editor);
// console.log(editor.email);

//todo == auto ==

// class User {
//   #email; // Приватне поле

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class Admin extends User {
//   static role = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };

//   constructor(params) {
//     super(params.email);
//     this.access = params.access;
//   }
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

//? =====================================================
//? ============== Методи дочірнього класу ==============
//? =====================================================

// class ContentEditor extends User {
//   constructor(params) {
//     super(params.email);
//     this.posts = params.posts;
//   }

//   addPost(post) {
//     this.posts.push(post);
//   }
// }

// const editor = new ContentEditor({
//   email: 'mango@mail.com',
//   posts: [],
// });

// console.log(editor); // { #email: "mango@mail.com", posts: [], addPost: f }

// editor.addPost('post-1');
// editor.addPost('post-2');
// console.log(editor.posts); // ['post-1', 'post-2']

//todo ======================================================================

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   static role = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };

//   constructor(params) {
//     super(params.email);
//     this.access = params.access;
//   }

//   blacklistedEmails = [];

//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted('mango@mail.com')); // false
// console.log(mango.isBlacklisted('poly@mail.com')); // true
