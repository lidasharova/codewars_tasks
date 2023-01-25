// 8kyu

// Given a year, return the century it is in.

function century(year) {
  return Math.ceil(year / 100);
}

//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd';
}

function even_or_odd(number) {
  return number % 2 ? 'Odd' : 'Even';
}

const even_or_odd = (n) => (n % 2 ? 'Odd' : 'Even');
var even_or_odd = (n) => (n & 1 ? 'Odd' : 'Even');
const even_or_odd = (n) => ['Even', 'Odd'][n & 1];
//" [n&1] " в этом случае, если n == четное, оно будет оцениваться как [0], если n == нечетное будет оцениваться [1]

//task
// given an integer or a floating-point number, find its opposite.

function opposite(number) {
  return number + -number - number;
}

function opposite(number) {
  return -number;
  return number > 0 ? -number : Math.abs(number);
}

//task
//Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str) {
  return [...str].slice(1, str.length - 1).join('');
  return str.substring(1, str.length - 1);
}
const removeChar = (str) => str.slice(1, -1);

//task
//remove the spaces from the string, then return the resultant string.

const noSpace = (x) => String(x).replace(/ /g, '');
const noSpace = (x) => x.split(' ').join('');

//task
//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
const simpleMultiplication = (number) =>
  number % 2 === 0 ? number * 8 : number * 9;
const simpleMultiplication = (n) => n * (n % 2 ? 9 : 8);
const simpleMultiplication = (number) => (8 + (number % 2)) * number;

//task
//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
const solution = (str, ending) => str.endsWith(ending);
str.substr(str.length - ending.length, ending.length) == ending;

//task
//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
const repeatStr = (n, s) => s.repeat(n);

//task
//When provided with a number between 0-9, return it in words.
//Input :: 1
//Output :: "One".
function switchItUp(number) {
  switch (number) {
    case 0:
      return 'Zero';
      break;
    case 1:
      return 'One';
      break;
    case 2:
      return 'Two';
      break;
    case 3:
      return 'Three';
      break;
    case 4:
      return 'Four';
      break;
    case 5:
      return 'Five';
      break;
    case 6:
      return 'Six';
      break;
    case 7:
      return 'Seven';
      break;
    case 8:
      return 'Eight';
      break;
    case 9:
      return 'Nine';
      break;

    default:
      'its not number';
  }
}

switchItUp = (n) =>
  [
    'Zero',
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
  ][n];

//task
//Создайте функцию finalGrade, которая вычисляет итоговую оценку студента в зависимости от двух параметров: оценки за экзамен и количества выполненных проектов.
//Эта функция должна принимать два аргумента: exam - оценка за экзамен (от 0 до 100); проекты - количество завершенных проектов (от 0 и выше);
// Эта функция должна возвращать число (итоговая оценка). Существует четыре типа итоговых оценок:
// 100, если оценка за экзамен больше 90 или количество выполненных проектов больше 10.
// 90, если оценка за экзамен выше 75 и количество выполненных проектов не менее 5.
// 75, если оценка за экзамен больше 50 и количество выполненных проектов не менее 2.
// 0, в остальных случаях
function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100;
  }

  if (exam > 75 && projects >= 5) {
    return 90;
  }

  if (exam > 50 && projects >= 2) {
    return 75;
  } else {
    return 0;
  }
}

//2
function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) return 100;
  if ((exam > 75) & (projects >= 5)) return 90;
  if ((exam > 50) & (projects >= 2)) return 75;
  return 0;
}

//task
//Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
//For example, when the input is green, output should be yellow.

function updateLight(current) {
  let color = current;
  switch (color) {
    case 'green':
      color = 'yellow';
      return color;
      break;
    case 'yellow':
      color = 'red';
      return color;
      break;
    case 'red':
      color = 'green';
      return color;
      break;
  }
}

function updateLight(current) {
  return current === 'yellow'
    ? 'red'
    : current === 'green'
    ? 'yellow'
    : 'green';
}

const updateLight = (current) =>
  ({
    green: 'yellow',
    yellow: 'red',
    red: 'green',
  }[current]);

//task
//You are given two interior angles (in degrees) of a triangle.
//Write a function to return the 3rd.

const otherAngle = (a, b) => 180 - (a + b);

//task
//Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
//Write a code that gives out the total amount for different days(d).

function baseCost(days, rate) {
  return days * rate;
}

function discountRate(days) {
  if (days >= 7) {
    return 50;
  } else if (days >= 3) {
    return 20;
  } else {
    return 0;
  }
}

//2
function rentalCarCost(days) {
  return baseCost(days, 40) - discountRate(days);
}

//3
function rentalCarCost(days) {
  var dayCost = 40;

  var discount = 0;
  if (days >= 3) discount += 20;
  if (days >= 7) discount += 30;

  return dayCost * days - discount;
}

//my
function rentalCarCost(d) {
  if (d >= 7) {
    return 40 * d - 50;
  }
  if (d < 7 && d >= 3) {
    return 40 * d - 20;
  } else {
    return d * 40;
  }
}

const rentalCarCost = (d) => d * 40 - (d > 6 ? 50 : d > 2 ? 20 : 0);
const rentalCarCost = (d) => d * 40 - (d >= 7 ? 50 : d >= 3 ? 20 : 0);
