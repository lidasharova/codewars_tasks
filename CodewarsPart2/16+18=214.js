//task
//Для этого ката вам придется забыть, как складывать два числа.
//Проще говоря, наш метод не любит принцип переноса чисел и просто записывает каждое вычисляемое число :-)
//Вы можете предположить, что оба целых числа являются положительными целыми числами.

//add(38810, 1383), 391193);
//add(49999, 49999), 818181818);

function add(num1, num2) {
  let arr = [];
  let length;
  let sum;

  //если число из одной цифры то сложение
  if (String(num1).length === 1 || String(num2).length === 1) {
    return num1 + num2;
  } else {
    let arr1 = String(num1).split('').reverse(); //получили 1 массив наоборот
    let arr2 = String(num2).split('').reverse(); //получили 2 массив наоборот

    //длина цикла равна длине большего числа(массива)
    if (arr1.length >= arr2.length) {
      length = arr1.length;
    } else {
      length = arr2.length;
    }

    //цикл сложения цифр
    for (let i = 0; i < length; i++) {
      //если значение равно undefined
      if (arr1[i] == undefined) {
        arr.unshift(arr2[i]);
      }

      //если другое значение равно undefined
      else if (arr2[i] == undefined) {
        arr.unshift(arr1[i]);
      } else {
        sum = String(Number(arr1[i]) + Number(arr2[i]));
        console.log(sum);
        arr.unshift(sum);
      }
    }
    console.log(arr);
    return Number(arr.join('')); //возвращаем число
  }
}

//2 вариант
function add(num1, num2) {
  let arr1 = num1.toString().split('').reverse();
  let arr2 = num2.toString().split('').reverse();
  let arr3 = [];
  for (
    let i = 0;
    i < (arr1.length < arr2.length ? arr2.length : arr1.length);
    i++
  ) {
    arr3.push((parseInt(arr1[i]) || 0) + (parseInt(arr2[i]) || 0));
  }
  return parseInt(arr3.reverse().join(''));
}
