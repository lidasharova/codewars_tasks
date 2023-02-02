//task
//Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

// strCount({
//   first: "1",
//   second: "2",
//   third: false,
//   fourth: ["anytime",2,3,4],
//   fifth:  null
//   })


//   //returns 3





function strCount(obj) {
  let count = 0;
  let array = Object.values(obj);
  console.log(array);

  for (let i = 0; i < array.length; i++) {
    //проверка на null , undefined, boolean
    if (
      array[i] !== null &&
      array[i] !== undefined &&
      typeof array[i] !== 'boolean'
    ) {
      //подсчет
      if (typeof array[i] == 'string') {
        count += 1;
      } else if (typeof array[i] == 'object') {
        array = Object.values(array[i]);
        for (let j = 0; j < array.length; j++) {
          count += 1;
        }
      }
    }
  }

  return count;
}


//2option
function strCount(obj) {
  let count = 0;
  for (key in obj) {
    if (typeof obj[key] == 'string') count++;
    if (typeof obj[key] == 'object') count += strCount(obj[key]);
  }
  return count;
}