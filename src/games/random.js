
export const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

export const add = (a, b) => a + b;
export const minus = (a, b) => a - b;
export const mul = (a, b) => a * b;

export const getRandomAddOrMinus = () => {
  switch (getRandomInt(3)) {
    case 0: return add;
    case 1: return minus;
    case 2: return mul;
    default: return mul;
  }
};
