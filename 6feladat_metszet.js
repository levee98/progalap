// metszet tétele

const metszet = (arr1, arr2) => {
  const arr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j] === arr1[i]) {
        arr.push(arr2[j]);
      }
    }
  }
  return arr;
};

const arr0_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr0_2 = [2, 4, 6, 8, 10];

console.log('A két halmaz metszete: ', metszet(arr0_1, arr0_2));
