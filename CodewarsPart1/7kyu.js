//task
//Determine the area of the largest square that can fit inside a circle with radius r.

const areaLargestSquare = (radius) => Math.pow(radius, 2) * 2;

//task
//Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

function digits(n) {
  return ('' + n).split('').length;
}

const digits = (n) => n.toString().length;
