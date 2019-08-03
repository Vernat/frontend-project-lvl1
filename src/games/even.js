import { cons } from '@hexlet/pairs';
import { getRandomNumberBetween } from '../random';
import { runBrainGame } from '../engine';

export const getRulesInfo = () => 'Answer "yes" if number even otherwise answer "no".\n';

const isEven = num => num % 2 === 0;

const getNextRound = () => {
  const maxValue = 1000;
  const numberForQuestion = getRandomNumberBetween(0, maxValue);
  const correctAnswer = isEven(numberForQuestion) ? 'yes' : 'no';
  return cons(numberForQuestion, correctAnswer);
};

export default () => runBrainGame(getNextRound, getRulesInfo);
