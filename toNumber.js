//We need a function that can transform a string into a number. What ways of achieving this do you know?

var stringToNumber = function (str) {
  return parseInt(str);
   return Number(str);
   return +str;

};


const stringToNumber = (str) => Number(str);
