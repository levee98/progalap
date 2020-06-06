// összegzés tétele

const sum = (arr) => {
  let sumArray = 0;
  for (let i = 0; i < arr.length; i++) {
    sumArray += arr[i];
  }
  return sumArray;
};

const arr0 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('A tömbben lévő elemek összege: ', sum(arr0));
