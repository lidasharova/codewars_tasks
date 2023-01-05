// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

function toBinary(n) {
  n = Number(n.toString(2));
  return n;
  return Number(n.toString(2));
}

let toBinary = (n) => +n.toString(2);
// +something= Number(something)

toBinary = (n) => parseInt(n.toString(2));

let toBinary = (n) => +n.toString`2`;
