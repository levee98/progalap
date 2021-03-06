// 2D tömb létrehozása és kettő hatványaival történő feltöltése
const readline = require('readline-sync');

const array2D = (n, m) => {
  const arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m);
  }
  let num = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      arr[i][j] = Math.pow(2, num);
      num++;
    }
  }
  return arr;
};

const arg1 = readline.keyIn('Kérem a tömb egyik méretét: ');
const arg2 = readline.keyIn('Kérem a tömb másik méretét: ');
console.log(array2D(arg1, arg2));
