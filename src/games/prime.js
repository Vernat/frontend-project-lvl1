import { cons } from '@hexlet/pairs';
import getRandomNumber from '../random';
import { runBrainGame } from '../engine';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  const limit = Math.sqrt(num);
  let i = 2;
  while (i <= limit) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

const getRoundData = () => {
  const question = getRandomNumber(0, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const gameInfo = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => runBrainGame(getRoundData, gameInfo);
