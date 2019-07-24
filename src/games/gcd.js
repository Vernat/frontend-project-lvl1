import { cons } from '@hexlet/pairs';
import { getRandomInt } from './random';

export const showBrainGcdRulesInfo = () => {
  console.log('Find the greatest common divisor of given numbers.\n');
};

export const brainGcdRound = () => {
  const getGcd = (val1, val2) => {
    let a = val1;
    let b = val2;
    while (a !== 0 && b !== 0) {
      if (a > b) {
        a %= b;
      } else {
        b %= a;
      }
    }
    return a + b;
  };
  const maxValue = 100;
  const a = getRandomInt(maxValue);
  const b = getRandomInt(maxValue);
  const question = `${a} ${b}`;
  const correctAnswer = String(getGcd(a, b));
  return cons(question, correctAnswer);
};
