//task
//



function findMissing(arr1, arr2) {
  let copyArr2 = [...arr2];
  let res = '';

  for (let i = 0; i < arr1.length; i++) {
    if (!copyArr2.includes(arr1[i])) {
      res += arr1[i]; //записываем в переменную цифру которой нет в массиве
    } else {
      let num = copyArr2.indexOf(arr1[i]); //находим индекс такой же цифры в массиве
      copyArr2.splice(num, 1); //удаляем эту цифру из него
    }
  }
  return Number(res);
}
