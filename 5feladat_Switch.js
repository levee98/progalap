// switch függvény

const anything = (arg) => {
  switch (arg) {
    case 1:
      console.log('1');
      break;
    case 2:
      console.log('2');
      break;
    case 3:
      console.log('3');
      break;
    default:
      console.log('Háromnál nagyobb szám!');
      break;
  }
};

const num = 2;
anything(num);
