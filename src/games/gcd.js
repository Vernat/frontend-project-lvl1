import { cons } from '@hexlet/pairs';
import getRandomNumber from '../random';
import { runBrainGame } from '../engine';

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

const getRoundData = () => {
  const maxValue = 100;
  const a = getRandomNumber(0, maxValue);
  const b = getRandomNumber(0, maxValue);
  const question = `${a} ${b}`;
  const correctAnswer = getGcd(a, b).toString();
  return cons(question, correctAnswer);
};

const gameInfo = 'Find the greatest common divisor of given numbers.';

export default () => runBrainGame(getRoundData, gameInfo);
