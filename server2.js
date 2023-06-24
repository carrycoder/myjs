const myFunc = (a, b) => {
  const mynewVal = myFunc2(a, b);
  return mynewVal;
};

const myFunc2 = (a, b) => {
  return a + b;
};

module.exports = myFunc;
