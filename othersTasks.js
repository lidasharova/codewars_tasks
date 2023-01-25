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