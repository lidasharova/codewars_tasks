//task
//Возьмите целое число n (n >= 0)и цифру d (0 <= d <= 9)как целое число.
// Возведите в квадрат все числа k (0 <= k <= n)от 0 до n.
// Подсчитайте количество цифр, dиспользованных при написании всех k**2.
// Вызовите nb_dig(или nbDig или...) функцию, принимающую nи dв качестве параметров и возвращающую этот счетчик.

// Примеры:
// n = 10, d = 1
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

// nb_dig(25, 1) returns 11 since
// the k*k that contain the digit 1 are:
// 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.

function nbDig(n, d) {
  let arr = [];
  let str = '';
  let count = 0;

  for (let i = 0; i <= n; i++) {
    let res = String(Math.pow(i, 2));
    array = res.split('');
    for (let j = 0; j < array.length; j++) {
      if (array[j] == d) {
        count += 1;
      }
    }
  }
  return count;
}



//task
//Напишите функцию, которая возвращает только десятичную часть заданного числа.
//Вам нужно обрабатывать только действительные числа, а не Infinity, NaNили подобные. Всегда возвращайте положительную десятичную часть.

function getDecimal(n) {
  let res;

  if (n > 0) {
    res = n - Math.floor(n);
  } else {
    let a = -Math.ceil(n);
    res = -(n + a);
  }

  return res;
}