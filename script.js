let title = 'Lesson02';
let screens = 'Простые, сложные, Интерактивные';
let screenPrice = 50000;
let rollback = 99;
let FullPrice = 100000;
let adaptive = true;

console.log(typeof title);
console.log(typeof FullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log('Стоимость верстки экранов' + screenPrice + 'рублей/' + screenPrice / 66.4 + 'долларов/' + screenPrice * 0.44369 + 'гривен/' + screenPrice * 0.099388 + 'юани');
console.log('Стоимость разработки сайта' + FullPrice + 'рублей/' + FullPrice / 66.4 + 'долларов/' + FullPrice * 0.44369 + 'гривен/' + FullPrice * 0.099388 + 'юани');

screens.toLowerCase();
console.log(screens.split());

