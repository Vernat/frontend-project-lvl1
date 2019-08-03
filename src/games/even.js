import { cons } from '@hexlet/pairs';
import getRandomNumberBetween from '../random';
import { runBrainGame } from '../engine';

const isEven = num => num % 2 === 0;

const getNextRound = () => {
  const question = getRandomNumberBetween(0, 1000);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const gameRulesInfo = 'Answer "yes" if number even otherwise answer "no".\n';

export default () => runBrainGame(getNextRound, gameRulesInfo);
