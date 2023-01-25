//task
//You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true if it is possible and false if not.




//task
//Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.
//Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function capitalizeWord(word) {
  return word.replace(word[0], word[0].toUpperCase());
}


