import { cons } from '@hexlet/pairs';
import { getRandomInt } from './random';
import { runBrainGame } from './engine';

export const getRulesInfo = () => 'Find the greatest common divisor of given numbers.\n';

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

export const getNextGcdRound = () => {
  const maxValue = 100;
  const a = getRandomInt(maxValue);
  const b = getRandomInt(maxValue);
  const question = `${a} ${b}`;
  const correctAnswer = String(getGcd(a, b));
  return cons(question, correctAnswer);
};

export default () => runBrainGame(getNextGcdRound, getRulesInfo);
