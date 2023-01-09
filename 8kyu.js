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
const even_or_odd = n => ["Even","Odd"][n&1] ;
//" [n&1] " в этом случае, если n == четное, оно будет оцениваться как [0], если n == нечетное будет оцениваться [1]



//task
// given an integer or a floating-point number, find its opposite.

function opposite(number) {
  return number + (-number)- number;
}

function opposite(number) {
  return -number;
  return number > 0 ? -number : Math.abs(number);
}

//task
//Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str){
 return [...str].slice(1, (str.length-1)).join('')
  return str.substring(1, str.length - 1);
};
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


