//task
//Ваша задача — добавить новое свойство usersAnswerк каждому объекту в массиве questions. Значение usersAnswerдолжно быть установлено равным null. Решение должно работать для массива любой длины.
//Массив questionsуже определен для вас и не такой, как в примере.

for (i = 0; i < questions.length; i++) {
  questions[i].usersAnswer = null;
}

//task
//Вам дан двумерный массив, состоящий из цвета и его «общей» ассоциации в каждом элементе массива. Функция, которую вы напишете, должна возвращать цвет как «ключ» и ассоциацию как «значение».

function colourAssociation(array) {
  let object = {};

  for (let i = 0; i < array.length; i++) {
    //отделяем ключ и значение
    let key = array[i][0];
    let value = array[i][1];

    //добавляем в обьект
    object[key] = value;
  }
  //из обьекта получаем массив с обьектами
  const result = Object.entries(object).map((entry) => ({
    [entry[0]]: entry[1],
  }));
  return result;
}
