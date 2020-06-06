// megszámlálás tétele

const count = (arr, argument) => {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === argument) {
      num++;
    }
  }
  return num;
};

const arr0 = [1, 2, 3, 4, 3, 2, 6, 4, 5, 1, 3, 2];
const argument0 = 1;
const returnedNum = count(arr0, argument0);
console.log('A keresett elem (', argument0, ') előfordulásának száma a tömbben: ', returnedNum);
