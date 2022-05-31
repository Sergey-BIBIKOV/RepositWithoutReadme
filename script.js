let title = 'Lesson02';
let screens = 'Простые, Cложные, Интерактивные';
let screenPrice = 50000;
let rollback = 30;
let FullPrice = 300000;
let adaptive = true;

console.log(typeof title);
console.log(typeof FullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log('Стоимость верстки экранов' + screenPrice + 'рублей/' + screenPrice / 66.4 + 'долларов/' + screenPrice * 0.44369 + 'гривен/' + screenPrice * 0.099388 + 'юани');
console.log('Стоимость разработки сайта' + FullPrice + 'рублей/' + FullPrice / 66.4 + 'долларов/' + FullPrice * 0.44369 + 'гривен/' + FullPrice * 0.099388 + 'юани');

console.log(screens.toLowerCase().split());

console.log('Процент отката посреднику за работу ' + FullPrice * (rollback / 100));

console.log(+prompt('Как называется ваш проект'))