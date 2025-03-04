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

// // з роздільником ', '

// const usersStr2 = users.join(', ')
// console.log(usersStr2); // Elva, Lily, Derek, Derek - з роздільником

// //* .split() - розбити рядок на елементи масиву

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