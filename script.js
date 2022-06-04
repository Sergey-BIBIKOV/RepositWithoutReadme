'use strict'
let title = prompt('Как называется ваш проект');
let screens = prompt('Простые, Cложные, Интерактивные');
let screenPrice = parseInt(prompt('Сколько будет стоить данная работа'));
let rollback = 30;
let adaptive = confirm('нужен ли адаптив на сайте');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = parseInt(prompt('Сколько это будет стоить?'));
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = parseInt(prompt('Сколько это будет стоить?'));
let FullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = Math.ceil(FullPrice - FullPrice * (rollback / 100));
console.log(servicePercentPrice);

const getAllServicePrices = function (a, b) {
    return a + b;
}
let sum = getAllServicePrices(servicePrice1, servicePrice2)











/*const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
}

const getRollbackMessage = function (price) {
    if (price >= 30000) {
        return 'Даем скидку в 10';
    } else if (price >= 15000 && price < 30000) {
        return 'Даем скидку в 5';
    } else if (price > 0 && price < 15000) {
        return 'Скидка не предусмотрена'
    } else (price <= 0); {
        return "Что то пошло не так";
    }
}

getRollbackMessage();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(getRollbackMessage(FullPrice));
*/