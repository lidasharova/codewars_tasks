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
le