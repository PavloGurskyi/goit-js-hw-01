//todo ================================================== Конспект - 4 ==================================================
//todo ================================================== 12.03.25 (СР) =================================================
//todo ==================================================================================================================

// //* Створення масиву

// const book = {
//     title: 'Book title',
//     author: 'Writer'
// };

// console.log(book);

// //* Вкладені властивості

// const user = {
//     name: 'Pavlo',
//     location: {
//         country: 'Ukraine',
//         city: 'Fastiv'
//     },
//     hobbies: ['cooking', 'coding']
// }
// console.log(user);

// //* Доступ "через крапку"

// const userCity = user.location.city;
// console.log(userCity);

// console.log(user.hobbies[0]);

// console.log(user.hobbies.length);

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };

//   const ownerName = apartment.owner.name;
//   const ownerPhone = apartment.owner.phone;
//   const ownerEmail = apartment.owner.email;
//   const numberOfTags = apartment.tags.length;
//   const firstTag = apartment.tags[0];
//   const lastTag = apartment.tags[apartment.tags.length - 1];

//   console.log(lastTag);
//   console.log(firstTag);

//* Доступ через [квадратні дужки]

// const book = {
//     title: 'Book title'
// };

// const propKey = 'title';

// console.log(book[propKey]);

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   };
  
//   const aptRating = apartment['rating'];
//   const aptDescr = apartment['descr'];
//   const aptPrice = apartment['price'];
//   const aptTags = apartment['tags'];
  
//   console.log(aptRating);
//   console.log(aptDescr);
//   console.log(aptPrice);
//   console.log(aptTags);

//   apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.tags.push("trusted")
// console.log(apartment.price);

// console.log(apartment.tags);

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };

// book.price = 39;
// console.log(book);

//* Короткі властивості

// const name = 'Pavlo';
// const age = 36;

// const user = {
//     name,
//     age
// }

// console.log(user);

//todo ===== Перебір об'єкта =====

//* for... in

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };

//   const keys = [];
//   const values = [];

//   for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key]);
//   };

//   console.log(keys);
//   console.log(values);

//todo ===== Object.keys() ===== 

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
// const keys = Object.keys(book);
// console.log(keys);

// //? приймає об'єкт - повертає масив ключів

// for (const key of keys) {
//     console.log(key);
//     console.log(book[key]);
// }

//todo == auto

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const values = [];

//   const keys = Object.keys(apartment);

//   for (const key of keys) {
//     values.push(apartment[key]);
//   }
//   console.log(values);

//todo == auto == задачa "Підрахунок властивостей" ==

// function countProps (object) {
//     let propCount = 0;
//     const keys = Object.keys(object);

//     for (const key of keys) {
//         if (object.hasOwnProperty(key)) {
//             propCount += 1;
//         }
//     }
//     return propCount;
// }

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3


//todo ===== Object.values() ===== 

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   };

// console.log(Object.values(book)); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

//? приймає об'єкт - повертає масив властивостей

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };

//   const keys = Object.keys(apartment);
//   const values = Object.values(apartment);

//   console.log(keys);
//   console.log(values);

//todo == auto == countTotalSalary(salaries) {} ==

// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     const salary = Object.values(salaries);
//     for (const value of salary) {
//         totalSalary += value;
//     }
//     return totalSalary;
//   }
  
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); // 330

//todo ========================= Масив об'єктів =================================================
//todo ==========================================================================================

// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//       },
//       {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//       },
//       {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//       }
// ]
// for (const book of books) {
//     console.log(book.rating);
// }

//todo == auto == colors ==

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];

//   const hexColors = [];
//   const rgbColors = [];

//   for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
//   }

//   console.log(hexColors);
//   console.log(rgbColors);

//todo === пошук об'єкта в масиві за значенням властивості ===

// const books = [
//     { title: "The Last Kingdom", author: "Bernard Cornwell" },
//     { title: "Beside Still Waters", author: "Robert Sheckley" },
//     { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky" }
// ];

// const searchFor = 'Robert Sheckley';

// for (const book of books) {
//     if (book.author === searchFor) {
//         console.log(book);
//     }
// }

//todo == auto == getProductPrice byName ==

// function getProductPrice(productName) {
//     const products = [
//       { name: "Radar", price: 1300, quantity: 4 },
//       { name: "Scanner", price: 2700, quantity: 3 },
//       { name: "Droid", price: 400, quantity: 7 },
//       { name: "Grip", price: 1200, quantity: 9 },
//     ];

//     for (const prod of products) {
//         if (prod.name === productName) {return prod.price;}}
//     }

//   console.log(getProductPrice("Radar")); // 1300

//todo == отримаємо список назв усіх книг у колекції books ==

// const books = [
//     { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
//     { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
//     { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", rating: 6.8 }
//   ];

//   const titles = [];

//   for (const book of books) {
//     titles.push(book.title)
//   }
//   console.log(titles);

//todo == середній рейтинг ==

// let totalRating = 0;

// for (const book of books) {
//     totalRating += book.rating;
// }

// const ave = totalRating / books.length;
// console.log(ave);

//todo === auto === getAllPropValues(propName)

// function getAllPropValues(propName) {
//     const products = [
//       { name: "Radar", price: 1300, quantity: 4 },
//       { name: "Scanner", price: 2700, quantity: 3 },
//       { name: "Droid", price: 400, quantity: 7 },
//       { name: "Grip", price: 1200, quantity: 9 },
//     ];

//     const value = [];
//     for (const prod of products) {
//         if (propName in prod) {
//             value.push(prod[propName])
//         }
//     }
//     return value;
//   }
//   console.log(getAllPropValues("name"));
//   console.log(getAllPropValues("price"));

//todo == auto == totalPrice ==

// function calculateTotalPrice(productName) {
//     const products = [
//       { name: "Radar", price: 1300, quantity: 4 },
//       { name: "Scanner", price: 2700, quantity: 3 },
//       { name: "Droid", price: 400, quantity: 7 },
//       { name: "Grip", price: 1200, quantity: 9 },
//     ];
//     for (const prod of products) {
//             if (prod.name === productName) {
//                 return prod.price * prod.quantity;
//             }
//         }
//         return `Product ${productName} not found!`

//     }



//   console.log(calculateTotalPrice("Scanner"));
//   console.log(calculateTotalPrice("Blaster"));
//   console.log(calculateTotalPrice("Radar"));
//   console.log(calculateTotalPrice("Droid"));
//   console.log(calculateTotalPrice("Grip"));



//   function calculateTotalPrice(productName) {
//     const products = [
//         { name: "Apple", price: 10, quantity: 5 },
//         { name: "Banana", price: 8, quantity: 7 },
//         { name: "Orange", price: 12, quantity: 4 },
//         { name: "Mango", price: 15, quantity: 6 }
//     ];

    // Знаходимо товар у масиві
    // const product = products.find(item => item.name === productName);

//     for (const prod of products) {
//         if (prod.name === productName) {
//             return prod.price * prod.quantity;
//         }
//     }

//     return `Product ${productName} not found!`;
// }

// Перевірка роботи функції
// console.log(calculateTotalPrice("Apple")); // Виведе: 50
// console.log(calculateTotalPrice("Mango")); // Виведе: 90
// console.log(calculateTotalPrice("Grapes")); // Виведе: Product Grapes not found!


//todo ========================= Методи об'єкта =================================================
//todo ==========================================================================================

// const bookShelf = {
//     books: ['First book', 'Second book'],
//     getBooks () {
//         return 'All books'
//     },
//     addBook(bookName) {
//         return `Adding ${'BookName'}`
//     }
//     }

//todo == auto 1 ==

// const atTheOldToad = {
//     potions: [],
//     getPotions() {
//     return "List of all available potions"
//   },  
//   addPotion(potionName) {
//     return `Adding ${potionName}`
//   }
//   }
//   console.log(atTheOldToad.getPotions());
//   console.log(atTheOldToad.addPotion("Invisibility"));

//todo ===== доступ до властивостей об'єкта =====

// const bookShelf = {
//     books: ["The Last Kingdom", "The Mist"],
//     getBooks() {
//         console.log(this.books);
//     }
// }
// bookShelf.getBooks()

//todo == auto 2 == atTheOldToad == this ==

// const atTheOldToad = {
//     potions: ["Speed potion", "Stone skin"],
//     getPotions () {
//         return this.potions;
//     }
// }

//todo == зміна масиву в об'єкті за посиланням ==

// const shelf = {
//     books: [
//         { title: "The Last Kingdom", rating: 8 }, 
// 		{ title: "The Mist", rating: 6 }
//     ],
//     getBooks () {
//         return this.books;
//     },
//     addBooks(newBook) {
//         this.books.push(newBook)
//     },
//     getAverageRating() {
//         let totalRating = 0;
//         for (const book of this.books) {
//             totalRating += book.rating;
//         }
//         return (totalRating / this.books.length).toFixed(2);
//     },
//     changeRating (bookName, newRating) {
//         for (const book of this.books) {
//             if (bookName === book.title) {
//                 book.rating = newRating;
//             }
//         }
//     }
// }
// shelf.changeRating('The Mist', 7)
// shelf.addBooks({ title: "Dream Guardian", rating: 9 })
// console.log(shelf.getBooks());
// console.log(shelf.getAverageRating());

//todo == auto 3 == totalPrice

// const atTheOldToad = {
//     potions: [
//       { name: "Speed potion", price: 460 },
//       { name: "Stone skin", price: 520 },
//     ],
//     getPotions() {
//       return this.potions;
//     },
//     addPotion(newPotion) {
//       this.potions.push(newPotion);
//     },
//     getTotalPrice() {
//       let totalPrice = 0;
//       for (const pr of this.potions) {
//         totalPrice += pr.price;
//       }
//       return totalPrice;
//     },
//   };
//   console.log(atTheOldToad.getTotalPrice());

//todo == auto 4 == newName ==

// const atTheOldToad = {
//     potions: [
//       { name: "Speed potion", price: 460 },
//       { name: "Stone skin", price: 520 },
//     ],
//     getPotions() {
//       return this.potions;
//     },
//     updatePotionName(oldName, newName) {
//         for (const changeName of this.potions) {
//             if (changeName.name === oldName) {
//                 changeName.name = newName;
//             }
//         }
//     },
//   };
//   atTheOldToad.updatePotionName("Stone skin", "Invisibility")
//   console.log(atTheOldToad.getPotions());


//todo ================================ ...rest =================================================
//todo ==========================================================================================

//   function add(...args) {
//     let sum = 0;
//     for (const nums of args) {
//       sum += nums;
//     }
//     return sum;
//   }
// console.log(add(12, 4, 11, 48));  

//todo == auto 1 == addOverNum ==

// function addOverNum(value, ...args) {
//     let sum = 0;
//     console.log(args);
//     for (const num of args) {
//         if (num > value) {
//             sum += num;
//         }
//     }
//     return sum;
    
//   }
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));

//todo ================================ ...spread ===============================================
//todo ==========================================================================================

// console.log(...[1,2,3]); // 1 2 3

//todo == auto 2 == getExtremeScores ==

// function getExtremeScores(scores) {
//     // console.log(Math.max(...scores));
//     // console.log(Math.min(...scores));

//     return {
//         best: Math.max(...scores),
//         worst: Math.min(...scores)
//     }

// }

// getExtremeScores([89, 64, 42, 17, 93, 51, 26])
// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));

//todo === створення копії масиву ===

// const temps = [14, -4, 25, 8, 11];
// const copyOf = [...temps];
// console.log(copyOf);

//todo === злити два масиви ===

// const last = [1,2,3];
// const future = [4,5,6];
// const newOne = [...last, ...future];
// console.log(newOne);

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);

//todo === створення об'єкта ===

// const defaultSettings = {
//     theme: "light",
//     public: true,
//     withPassword: false,
//     minNumberOfQuestions: 10,
//     timePerQuestion: 60,
//   };
//   const overrideSettings = {
//     public: false,
//     withPassword: true,
//     timePerQuestion: 30,
//   };
  
//   const finalSettings = {
//     ...defaultSettings,
//     ...overrideSettings
//   };

//   console.log(finalSettings);


//todo ================================================== Лекція - 4.1 ==================================================
//todo ================================================== 13.03.25 (ЧТ) =================================================
//todo ==================================================================================================================



//todo ==================================================== hw-04-01 ====================================================
//todo ================================================== 13.03.25 (ЧТ) =================================================
//todo ==================================================================================================================
console.log('task-1');


function isEnoughCapacity(products, containerSize) {
    let totalAmo = 0;
    const amounts = Object.values(products);
    for (const amount of amounts) {
        totalAmo += amount;
    }
    return totalAmo <= containerSize
}
console.log(
    isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
  ); // true
  
  console.log(
    isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
  ); // false
  
  console.log(
    isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
  ); // true
  
  console.log(
    isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
  ); // false


//todo ==================================================== hw-04-02 ====================================================
//todo ================================================== 13.03.25 (ЧТ) =================================================
//todo ==================================================================================================================
console.log(' ');
console.log('task-2');

// const days = [
//       { day: "monday", calories: 3010 },
//       { day: "tuesday", calories: 3200 },
//       { day: "wednesday", calories: 3120 },
//       { day: "thursday", calories: 2900 },
//       { day: "friday", calories: 3450 },
//       { day: "saturday", calories: 3280 },
//       { day: "sunday", calories: 3300 }
// ];

// const calArr = [];

// for (const cal of days) {
//     calArr.push(cal.calories)
// }
// console.log(calArr);


function calcAverageCalories(days) {

    if (days.length === 0) {
        return 0;
    } else {
    let totalCalories = 0;
    for (const caloria of days) {
        totalCalories += caloria.calories
    };
    return totalCalories / days.length;
}
}
console.log(
    calcAverageCalories([
      { day: "monday", calories: 3010 },
      { day: "tuesday", calories: 3200 },
      { day: "wednesday", calories: 3120 },
      { day: "thursday", calories: 2900 },
      { day: "friday", calories: 3450 },
      { day: "saturday", calories: 3280 },
      { day: "sunday", calories: 3300 }
    ])
  ); // 3180
  
  console.log(
    calcAverageCalories([
      { day: "monday", calories: 2040 },
      { day: "tuesday", calories: 2270 },
      { day: "wednesday", calories: 2420 },
      { day: "thursday", calories: 1900 },
      { day: "friday", calories: 2370 },
      { day: "saturday", calories: 2280 },
      { day: "sunday", calories: 2610 }
    ])
  ); // 2270
  
  console.log(
    calcAverageCalories([])
  ); // 0


//todo ==================================================== hw-04-03 ====================================================
//todo ================================================== 13.03.25 (ЧТ) =================================================
//todo ==================================================================================================================
console.log(' ');
console.log('task-3');

const profile = {
    username: "Jacob",
    playTime: 300,
    getInfo() {
        return `${this.username} has ${this.playTime} active hours!`
    },
    changeUsername(newName) {
        this.username = newName;
    },
    updatePlayTime(hours) {
        this.playTime += hours;
    }
};
console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
