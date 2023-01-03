//We need a function that can transform a number (integer) into a string.

function numberToString(num) {
  return String(num);
  return num.toString();
  return '' + num;
  return `${num}`;
}

const numberToString = (num) => num.toString();

numberToString = String;
// Как и все функции Javascript, String является членом первого класса, поэтому, если вы присваиваете ее переменной, не применяя ее (т. е. не помещая за ней никаких круглых скобок), вызов этой переменной с использованием круглых скобок и аргументов вызовет назначенную ей функцию.

// Более полезное свойство этого можно увидеть при использовании таких функций, как map, например, [1,2,3].map(x => String(x))можно сократить до просто[1,2,3].map(String)
