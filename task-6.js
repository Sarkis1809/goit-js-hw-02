"use strict";

let input;
const numbers = [];
let total = 0;

while (input !== null) {
  input = prompt("Введите число: ");
  if (input === null) {
    break;
  }

  numbers.push(+input);
}

for (const number of numbers) {
  total += number;
}

if (numbers.length > 0) {
  console.log(`Общая сумма чисел равна ${total}`);
} else {
  console.log("Вы ни разу не ввели число.");
}
