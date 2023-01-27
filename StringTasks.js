//task
//Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.

function ucFirst(str) {
	if (!str) return str;
  let newStr = str.slice(0, 1).toUpperCase();
  newStr += str.slice(1, str.length);
  return newStr;
}



//с проверкой на пустую строку (тк ''[0]  == undefined)
function ucFirst(str) {
  if (!str) return str; //проверка на пустую строку

  let newStr = str.chartAt(0).toUpperCase(); //использование др метода, кот вернет ''
  newStr += str.slice(1, str.length);
  return newStr;
}



//task
//Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

//Функция должна быть нечувствительна к регистру:

