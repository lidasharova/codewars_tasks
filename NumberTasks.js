//task
//Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

//1вариант
let number1 = prompt('введите первое число');
let number2 = prompt('введите второе число');
sum(number1, number2);

function sum(num1, num2) {
  let res = parseInt(num1) + parseInt(num2);
  alert(`Сумма этих чисел ${res}`);
}

//2 вариант
let a = +prompt('Введите первое число', '');
let b = +prompt('Введите второе число', '');

alert(a + b);



//Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)
//Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).


function randomInteger(min, max) {
  let a = Math.random();       //0-1
  console.log(a);
  let b = a * (max - min);
  console.log(b);
  return min + b;
}

//Если мы умножим случайное число от 0…1 на max-min, тогда интервал возможных значений от 0..1 увеличивается до 0..max-min.
//И, если мы прибавим min, то интервал станет от min до max.

function random(min, max) {
  return min + Math.random() * (max - min);
}


//task
//Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).
//Любое число из интервала min..max должно появляться с одинаковой вероятностью.

function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);  //округление в меньшую сторону
}

//число от 1  ... до 1.9999999999  округлится до 1
//число от 2  ... до 2.9999999999  округлится до 2
//число от 3  ... до 3.9999999999  округлится до 3

