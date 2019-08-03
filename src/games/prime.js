import { cons } from '@hexlet/pairs';
import getRandomNumberBetween from '../random';
import { runBrainGame } from '../engine';

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

const getNextRound = () => {
  const number = getRandomNumberBetween(0, 100);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return cons(number, correctAnswer);
};

const gameRulesInfo = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

export default () => runBrainGame(getNextRound, gameRulesInfo);
