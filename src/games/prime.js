import { cons } from '@hexlet/pairs';
import { getRandomInt } from './random';
import { runBrainGame } from './engine';

export const getRulesInfo = () => 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

const isPrime = (num) => {
  const round = Math.sqrt(num);
  let i = 2;
  while (i < round) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

export const brainPrimeRound = () => {
  const max = 100;
  const number = getRandomInt(max);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return cons(number, correctAnswer);
};

export default () => runBrainGame(brainPrimeRound, getRulesInfo);
