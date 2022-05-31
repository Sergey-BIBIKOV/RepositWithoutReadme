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
    case (FullPrice >= 15000 && fullPrice < 30000):
        console.log("Даем скидку в 5 %")
        break;
    case (FullPrice > 0 && fullPrice < 15000):
        console.log("Скидка не предусмотрена")
        break;
    case (FullPrice <= 0):
        console.log("Что то пошло не так")
        break;
    default:
        break;
}

/*console.log(title);
console.log(typeof FullPrice);
console.log(Boolean(adaptive));
console.log(screens);
console.log(screenPrice + 'рублей/' + screenPrice / 66.4 + 'долларов/' + screenPrice * 0.44369 + 'гривен/' + screenPrice * 0.099388 + 'юани');
console.log('Стоимость разработки сайта' + FullPrice + 'рублей/' + FullPrice / 66.4 + 'долларов/' + FullPrice * 0.44369 + 'гривен/' + FullPrice * 0.099388 + 'юани');
console.log(screens.toLowerCase().split());
console.log('Процент отката посреднику за работу ' + FullPrice * (rollback / 100));
console.log(service1);
console.log(servicePrice1);
console.log(service2);
console.log(servicePrice2);
*/
