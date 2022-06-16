'use strict';
const title = document.getElementsByTagName("h1")[0];
let heandlerBtn1 = document.getElementsByClassName("handler_btn")[0]
let heandlerBtn2 = document.getElementsByClassName("handler_btn")[1]
const btn_plus = document.querySelector(".screen-btn");
const other_items_percent = document.querySelectorAll(".other-items.percent");
const other_items_number = document.querySelectorAll(".other-items.number");
const inputRange = document.querySelector('.rollback input');
const inputRangeValue = document.querySelector('.rollback .range-value');
const total_input_0 = document.getElementsByClassName("total-input")[0];
const total_input_1 = document.getElementsByClassName("total-input")[1];
const total_input_2 = document.getElementsByClassName("total-input")[2];
const total_input_3 = document.getElementsByClassName("total-input")[3];
const total_input_4 = document.getElementsByClassName("total-input")[4];
let allScreens = document.querySelectorAll(".screen");




const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    services: [],
    allServicePrices: 0,
    fullPrice: 0,
    rollback: 10,
    servicePercentPrice: 0,
    adaptive: true,
    start: function () {
        appData.asking();
        appData.appPrices();
        appData.getFullPrice();
        appData.getServicePercentPrices();
        appData.getTitle();

        appData.logger();
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },
    isString: function (str, question) {
        do {
            str = prompt(question);
        } while (appData.isNumber(str));

        return str;
    },
    asking: function () {

        appData.title = appData.isString(appData.title, 'Как называется ваш проект?');

        for (let i = 0; i < 2; i++) {
            let str;
            let name = appData.isString(str, 'Какие типы экранов нужно разработать?');
            let price = 0;

            do {
                price = prompt('Сколько будет стоить данная работа?');
            } while (!appData.isNumber(price));

            appData.screens.push({ id: i, name: name, price: price.trim() });
        }

        for (let i = 0; i < 2; i++) {
            let str;
            let name = appData.isString(str, 'Какой дополнительный тип услуги нужен?');
            let price = 0;

            do {
                price = prompt('Сколько это будет стоить?');
            } while (!appData.isNumber(price));

            appData.services.push({ id: i, name: name, price: +price.trim() });
        }

        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    },
    appPrices: function () {

        appData.screenPrice = appData.screens.map(item => item.price).reduce((prev, curr) => prev + +curr, 0);

        for (let service of appData.services) {
            appData.allServicePrices += service.price;
        }
    },
    getRollbackMessage: function (price) {
        if (price > 30000) {
            return 'Даем скидку в 10%';
        } else if (15000 < price && price <= 30000) {
            return 'Даем скидку в 5%';
        } else if (0 <= price && price <= 15000) {
            return 'Скидка не предусмотрена';
        } else {
            return 'Что то пошло не так';
        }
    },
    getFullPrice: function () {
        appData.fullPrice = appData.screenPrice + appData.allServicePrices;
    },
    getTitle: function () {
        appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substring(1).toLowerCase();
    },
    getServicePercentPrices: function () {
        appData.servicePercentPrice = Math.ceil(appData.fullPrice - (appData.fullPrice * appData.rollback));
    },
    logger: function () {
        for (let key in appData) {
            console.log(key);
        }
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
    }

};

appData.start();
