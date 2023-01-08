//Task
// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

function toBinary(n) {
  return Number(n.toString(2));
}

let toBinary = (n) => +n.toString(2);
// +something= Number(something)

toBinary = (n) => parseInt(n.toString(2));
let toBinary = (n) => +n.toString`2`;

//Task
//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x) {
  let arr = [];
  for (i = 0; i < x.length; i++) {
    Number(x.charAt(i)) < 5 ? arr.push(0) : arr.push(1);
  }
  return String(arr).replace(/,/g, '');

  //или
  return x
    .split('')
    .map((n) => (n < 5 ? 0 : 1))
    .join('');

  return x.replace(/\d/g, (d) => (d < 5 ? 0 : 1));
  return x
    .split('')
    .map((n) => (n < 5 ? 0 : 1))
    .join('');
  return x.replace(/[0-4]/g, '0').replace(/[5-9]/g, '1');
  return x.replace(/[1234]/g, '0').replace(/[56789]/g, '1');
  return x.replace(/\d/g, (n) => '0000011111'[n]);
  fakeBin = (x) => [...x].map((a) => (+a < 5 ? 0 : 1)).join('');
  return x
    .split('')
    .map((x) => (x < 5 ? 0 : 1))
    .join('');
}

function fakeBin(x) {
  let result = '';
  for (let i = 0; i < x.length; i++) {
    x[i] < 5 ? (result += 0) : (result += 1);
  }
  return result;
}
