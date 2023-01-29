// //A stream of data is received and needs to be reversed.
// Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:
// 11111111  00000000  00001111  10101010
//  (byte1)   (byte2)   (byte3)   (byte4)
// should become:

// 10101010  00001111  00000000  11111111
//  (byte4)   (byte3)   (byte2)   (byte1)
// The total number of bits will always be a multiple of 8.
// The data is given in an array as such:
// [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
// Note: In the C and NASM languages you are given the third parameter which is the number of segment blocks.


function dataReverse(data) {
  const size = 8;
  let sliced = [];
  let newArray = [];
  let array = [];

  for (let i = 0; i < data.length; i += size) {
    sliced.push(data.slice(i, i + size));
  }
  newArray = sliced.reverse();
  for (let j = 0; j < newArray.length; j++) {
    for (let t = 0; t < newArray[j].length; t++) array.push(newArray[j][t]);
  }

  return array;
}
//2option
const dataReverse = (data) => {
  const result = [];

  while (data.length) {
    result.push(...data.splice(-8));
  }
  return result;
};