'use strict'
let title
let screens
let screenPrice
let adaptive
let rollback = 10;
let allServicePrices;
let fullPrice;
let ServicePercentPrice;
let service1
let service2



const isNumber = (num) => {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

const asking = () => {
    title = prompt('Как называется ваш проект', 'Калькулятор верстки')
    screens = prompt('Простые, Cложные, Интерактивные', 'Простые,Сложные')


    do {
        //isNaN(screenPrice) || screenPrice.trim() === '' || screenPrice === null
        screenPrice = prompt('Сколько будет стоить данная работа')
    } while (!isNumber(screenPrice))

    adaptive = confirm('нужен ли адаптив на сайте')



}

const getAllServicePrices = () => {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
        let sumNew = 0;
        if (i === 0) {
            service1 = prompt('Какой дополнительный тип услуги нужен?')
        } else if (i === 1) {
            service2 = prompt('Какой дополнительный тип услуги нужен?')
        }

        do {
            sumNew = prompt('Сколько это будет стоить?')
        } while (!isNumber(sumNew))
        sum += +sumNew
    }
    return sum
    //  return servicePrice1 + servicePrice2
}

const showTypeOf = (variable) => {
    console.log(variable, typeof variable)
}

const getFullPrice = () => {
    return +screenPrice + allServicePrices
}

const getServicePercentPrice = () => {
    return fullPrice - (fullPrice * (rollback / 100))
}

const getTitle = (str) => {
    str = str.trim();
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

}

const getRollbackMessage = (price) => {
    if (price >= 30000) {
        return 'Даем скидку в 10%';
    } else if (price >= 15000 && price < 30000) {
        return 'Даём скидку в 5%';
    } else if (price >= 0 && price < 15000) {
        return 'Скидка не предусмотрена';
    } else {
        return 'Что то пошло не так'
    }
}

asking()
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
ServicePercentPrice = getServicePercentPrice();
title = getTitle(title);

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log('allServicePrices', allServicePrices)

console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log(ServicePercentPrice);

console.log('Стоймость верстки экранов' + screenPrice + 'юани' + 'и' + 'Стоймость разработки сайта' + fullPrice + 'юани');