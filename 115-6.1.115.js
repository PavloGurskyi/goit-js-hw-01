//todo =======================================================================================================
//todo ===========================================   Лекція 6-1   ============================================
//todo ===========================================   ООП. Класи   ============================================
//todo =======================================================================================================

//? ==========================================================================================================
//? =================================================   this   ===============================================
//? ==========================================================================================================

// const user = {
//     userName: 'John',
//     showThis () {
//         console.log('this is it', this); // this посилається на об'єкт user
//     }
// }
// user.showThis();

// const foo = () => {
//     console.log(this); // undefined bo strickt, a tak to - window !
// }
// foo()

// const user2 = {
//     userName: 'Pavlo',
//     showThis: user.showThis,
// }
// user2.showThis()

// const user3 = {
//     userName: 'Alice',
//     showThis () {
//         console.log('this is that', this);

//         const foo = () => {
//             console.log('foo', this);
//         }
//         foo();
//     }
// }
// user3.showThis()

// function showThis() {
//     console.log('that', this);
// }
// showThis(); // that undefined (window)

// const user = {
//     userName: 'Alice',
// };

// user.showThis = showThis;
// user.age = 29;
// console.log(user);

// user.showThis();

// const user = {
//     userName: 'Yura',
//     showThis () {
//         console.log(this);
//     }
// }
// user.showThis()

// const foo = user.showThis;
// console.log(foo);
// foo()

// const user = {
//     userName: 'Olena',
//     showThis() {
//         console.log(this);
//     },
//     showName() {
//         console.log(this.showName);
//     }
// }
// user.showThis();

// const foo = user.showThis;

// foo();

// const lala = user.showName;
// lala()

// const chopShop = {
//     stones: [
//         {name: 'Em', price: 1300, quant: 4,},
//         {name: 'Di', price: 2700, quant: 3,},
//         {name: 'Sap', price: 1400, quant: 7,},
//         {name: 'Ruby', price: 800, quant: 2,},
//     ],
//     calcTotalPrice(stoneName) {
//         const stone = this.stones.find(item => item.name === stoneName);

//         if(!stone) {
//             return `${stoneName} not found.`
//         }

//         return stone.price * stone.quant;
//     }
// }
// console.log(chopShop.calcTotalPrice('Di'));

//? ============================================================================================================
//? =======================================   .call(), .apply(), .bind() =======================================
//? ============================================================================================================

// function showThis(toto, lala) {
//     console.log(this);
//     console.log(toto, lala);
// }

// const objA = {
//     a: 5,
//     b: 10,
// }

// const objB = {
//     x: 100,
//     y: 200,
// }

// showThis.call(objA, 'Alice', 5)

// showThis.apply(objB, ['Pavlo', 10])

// const hat = {
//     color: 'red',
// }
// const sweater = {
//     color: 'black'
// }
// function changeColor(color) {
//     console.log(this);
//     this.color = color;
// }
// changeColor.call(hat, 'green');
// console.log(hat);

// changeColor.apply(sweater, ['yellow']);
// console.log(sweater);

// const changeHatColor = changeColor.bind(hat, 'blue');

// changeHatColor();
// console.log(hat);

// const changeSwColor = changeColor.bind(sweater);

// changeSwColor('white');
// console.log(sweater);

//todo == counter ==

// const counter = {
//     value: 0,
//     increment(value) {
//         console.log('this', this);
//         this.value += value;
//     },
//     decrement(value) {
//         console.log(this);
//         this.value -= value;
//     },
// }

// function foo (value, callback) {
//     console.log(callback);
//     callback(value);
// }

// foo(10, counter.increment.bind(counter));
// foo(2, counter.decrement.bind(counter));
// foo(5, counter.decrement.bind(counter))

// console.log(counter);

//? ============================================================================================================
//? ============================================= Прототип об'єкта =============================================
//? ============================================================================================================

// const animal = {
//     legs: 4,
// }

// const dog = Object.create(animal);
// dog.name = 'Torik';

// console.log(dog);
// console.log(dog.name);
// console.log(dog.legs);
// console.log(dog.hasOwnProperty('name'));

//? =============================================
//? ============= .hasOwnProperty() =============
//? =============================================

// for (const key in dog) {
//     console.log(key, dog[key]);
// }

// for (const key in dog) {
//     if (dog.hasOwnProperty(key)) {
//         console.log(key, dog[key]);
//     }
// }

// const objC = {c: 'objC'};

// const objB = Object.create(objC);
// objB.b = 'objB';

// const objA = Object.create(objB);
// objA.a = 'objA';

// console.log(objA);
// console.log(objA.c); // objC
// console.log(objA.hasOwnProperty('c')); // false

//todo == cruiseControl ==

// const cruiseControl = {
//     speed: 0,
//     brand: 'Audi',
//     accelerate() {
//         this.speed += 10;
//         console.log(`${this.brand} accelerates. Speed is ${this.speed}.`);
//     },
//     decrease() {
//         if (this.speed <= 0) {
//             console.log(`${this.brand} stopped.`);
//             return;
//         }
//         this.speed -= 10;
//         console.log(`${this.brand} is breaking. Speed is ${this.speed}.`);
//     }
// }

// cruiseControl.accelerate();
// cruiseControl.decrease();
// cruiseControl.accelerate();
// cruiseControl.accelerate();
// cruiseControl.decrease();
// cruiseControl.decrease();
// cruiseControl.decrease();
// console.log(cruiseControl);

//todo == maxSpeed ==

// const MAX_SPEED = 60;

// const audi = {
//     brand: 'audi',
//     speed: 30,
// }
// const bmw = {
//     brand: 'bmw',
//     speed: 70,
// }

// function speedSensor (maxSpeed) {
//     if(this.speed <= maxSpeed) {
//     //     return `${this.brand}'s speed is good`;
//     // }
//     // return `${this.brand}'s speed is over`;

//     return this.speed <= maxSpeed ?
//     `${this.brand}'s speed is good` :
//     `${this.brand}'s speed is over`;
// }
// }

// console.log(speedSensor.call(audi, MAX_SPEED));
// console.log(speedSensor.apply(bmw, [MAX_SPEED]));
