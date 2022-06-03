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

switch (true) {
    case (FullPrice >= 30000):
        console.log("Даем скидку в 10 %")
        break;
    case (FullPrice >= 15000 && FullPrice < 30000):
        console.log("Даем скидку в 5 %")
        break;
    case (FullPrice > 0 && FullPrice < 15000):
        console.log("Скидка не предусмотрена")
        break;
    case (FullPrice <= 0):
        console.log("Что то пошло не так")
        break;
    default:
        break;
}