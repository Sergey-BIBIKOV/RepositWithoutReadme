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
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = Math.ceil(fullPrice - fullPrice * (rollback / 100));
console.log(servicePercentPrice);

const getAllServicePrices = function (a, b) {
    return a + b;
}

function getFullPrice(a, b) {
    return a + b
}

const getTitle = function (str) {
    str = str.trim();
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

}

const getServicePercentPrices = function (a, b) {
    return a - a * b / 100
}

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
}

const getRollbackMessage = function (price) {
    if (price >= 30000) {
        return 'Даем скидку в 10 %';
    } else if (price >= 15000 && price < 30000) {
        return 'Даем скидку в 5 %';
    } else if (price > 0 && price < 15000) {
        return 'Скидка не предусмотрена'
    } else (price <= 0); {
        return "Что то пошло не так";
    }
}

servicePercentPrice = getServicePercentPrices(fullPrice, rollback);
let allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
fullPrice = getFullPrice(screenPrice, allServicePrices);


title = getTitle(title);
getRollbackMessage(fullPrice);
showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);


console.log(getServicePercentPrices(fullPrice, rollback));
console.log(getAllServicePrices(servicePrice1, servicePrice2));
console.log(getRollbackMessage(fullPrice));
console.log(getTitle(title));






