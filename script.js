'use strict';

let isNumber = function (number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
};

let randomInt = function (min, max) {
    let rand = Math.floor(min + Math.random() * (max + 1 - min));
    return rand;
};

let guessRandomNumber = function (generateNumberFunc) {

    let gameNumber = generateNumberFunc;
    console.log(game21412Number);

    let checkGameInput = function () {
        let gameInput = prompt('Угадай чисто от 1 до 100', '100');

        if (gameInput === null) {
            alert('До свидания!');
            return;
        }

        if (!isNumber(gameInput)) {
            alert('Вы ввели не число');
        } else if (gameInput > gameNumber) {
            alert('Загаданное число меньше');
        } else if (gameInput < gameNumber) {
            alert('Загаданное число больше');
        } else if (gameInput == gameNumber) {
            confirm('Вы угадали число');
            return;
        }
        checkGameInput();
    };

    return checkGameInput;
};

let game = guessRandomNumber(randomInt(1, 100));
game();