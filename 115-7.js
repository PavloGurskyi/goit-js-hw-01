//* =====================================================
//* ============== ВЛАСТИВОСТІ ТА АТРИБУТИ ==============
//* =====================================================

//? ====================================================
//? ============== доступ до властивостей ==============
//? ====================================================

//todo == 1 == menu ==
/*
const listwithId = document.querySelector('#menu');
listwithId.style.textTransform = 'uppercase';
listwithId.style.fontSize = '24px';
console.log(listwithId);

const listWithClass = document.querySelector('.menu');
console.log(listWithClass);

const menuItemsByTagName = document.querySelectorAll('li');
console.log(menuItemsByTagName);

const menuItemsByClass = document.querySelectorAll('.menu-item');
console.log(menuItemsByClass);

const firstMenuItem = document.querySelector('.menu-item');
firstMenuItem.style.color = 'tomato';
console.log(firstMenuItem);*/

//todo == 2 == link.href ==
/*
const link = document.querySelector('.link');
console.log(link.href);

link.href = 'https://google.com';
console.log(link.href);*/

//todo == 3 == img laptop ==
/*
const image = document.querySelector('.image');
console.log(image.src);
console.log(image.alt);

image.src = 'https://picsum.photos/id/13/640/480';
image.alt = 'River Bank';
console.log(image.alt);*/

//? =========================================
//? ============== textContent ==============
//? =========================================

//todo == 4 == text sub-text ==
/*
const el = document.querySelector('.text');
console.log(el.textContent);
const nested = document.querySelector('.sub-text');
console.log(nested.textContent);

nested.textContent = 'Olena';
console.log(nested.textContent);*/

//todo == 5 == article ==
/*
const articleChange = document.querySelector('.article-title');
console.log(articleChange.textContent);

articleChange.textContent = 'Fuck off from here!';
console.log(articleChange.textContent);*/

//? =========================================
//? =============== classList ===============
//? =========================================

//todo == 6 == link.classList() ==
/*
const link = document.querySelector('.link');
console.log(link.classList);*/

//todo == classList.contains(className)
/*
const hasActiveClass = link.classList.contains('is-active');
console.log(hasActiveClass); // true*/

//todo == classList.add(className)
/*
link.classList.add('home-page');
console.log(link.classList);*/

//todo == classList.remove(className)
/*
link.classList.remove('is-active');
console.log(link.classList);*/

//todo == classList.toggle(className)
/*
link.classList.toggle('is-active');
console.log(link.classList);*/

//todo == classList.replace(oldClassName, newClassName)
/*
link.classList.replace('home-page', 'main-page');
console.log(link.classList);*/

//? ===================================================
//? =============== доступ до атрибутів ===============
//? ===================================================

//todo == 7 == hasAttribute() ==
/*
const image = document.querySelector('.image');
console.log(image.hasAttribute('width'));*/

//todo == element.getAttribute(nameAttribute) ==
/*
console.log(image.getAttribute('alt'));*/

//todo == element.setAttribute(nameAttribute, value) ==
/*
image.setAttribute('border', 4);*/

//todo == element.removeAttribute(nameAttribute) ==
/*
image.removeAttribute('border');*/

//todo == element.attributes ==
/*
console.log(image.attributes);
console.log(image.attributes.width);*/

//? ====================================================
//? =============== власні data-атрибути ===============
//? ====================================================

//todo == 7 == data ==
/*
const saveBtn = document.querySelector('button[data-action="save"]');
console.log(saveBtn.dataset.action);

const closeBtn = document.querySelector('button[data-action="close"]');
console.log(closeBtn.dataset.action);

saveBtn.dataset.action = 'update';

saveBtn.dataset.role = 'admin';

console.log(saveBtn.dataset.action);
console.log(saveBtn.dataset.role);*/

//? ===================================================
//? =============== створення елементів ===============
//? ===================================================

//* DOM API === Document Object Model Application Programming Interface

//todo == 8 == create el ==
/*
document.createElement('tagname');
console.log(document.createElement);

const heading = document.createElement('h1');
heading.classList.add('title');
heading.textContent = 'Page title';
console.log(heading);

const image = document.createElement('img');
image.src = 'https://picsum.photos/id/11/320/240';
image.alt = 'Nature';
console.log(image);*/

//? ===================================================
//? =============== додавання елементів ===============
//? ===================================================

//todo == 9 == add el ==
/*
const list = document.querySelector('.usernames');

const lastItem = document.createElement('li');
lastItem.textContent = 'Paska';
list.append(lastItem);

const firstItem = document.createElement('li');
firstItem.textContent = 'Johny';
list.prepend(firstItem);

const el = document.querySelector('.username');
console.log(el.textContent);
el.textContent = 'Anya';*/

//todo == 10 == remove el ==
/*
const el = document.querySelector('.text');
el.remove();*/

//todo == 11 == innerHTML == read ==
/*
const article = document.querySelector('.article');
console.log(article.innerHTML);

const title = document.querySelector('.article .title');
console.log(title.innerHTML);

const text = document.querySelector('.article .text');
console.log(text.innerHTML);

const link = document.querySelector('.article .link');
console.log(link.innerHTML);*/

//todo == 12 == innerHTML == change ==
/*
title.innerHTML = 'New and <span class="accent">improved</span> title';*/

//todo == 13 == innerHTML == markup list ==
/*
const techs = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
const list = document.querySelector('.list');
const markup = techs.map(tech => `<li class="list-item">${tech}</li>`).join('');

console.log(markup);

list.innerHTML = markup;*/

//todo == 14 == innerHTML == += string ==
/*
const article = document.querySelector('.article');
const string = `<p class="text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
    <a href="" class="link">Read more...</a>`;
article.innerHTML += string;*/

//todo == 15 ==
