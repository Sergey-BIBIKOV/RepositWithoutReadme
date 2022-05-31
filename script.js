let title = prompt('Как называется ваш проект');
let screens = prompt('Простые, Cложные, Интерактивные');
let screenPrice = prompt('Сколько будет стоить данная работа');
let rollback = 30;
let FullPrice = 300000;
let adaptive = prompt('нужен ли адаптив на сайте');

console.log(title);
console.log(typeof FullPrice);
console.log(Boolean(adaptive));
console.log(screens);
console.log(screenPrice + 'рублей/' + screenPrice / 66.4 + 'долларов/' + screenPrice * 0.44369 + 'гривен/' + screenPrice * 0.099388 + 'юани');
console.log('Стоимость разработки сайта' + FullPrice + 'рублей/' + FullPrice / 66.4 + 'долларов/' + FullPrice * 0.44369 + 'гривен/' + FullPrice * 0.099388 + 'юани');

console.log(screens.toLowerCase().split());

console.log('Процент отката посреднику за работу ' + FullPrice * (rollback / 100));

