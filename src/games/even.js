import { cons } from '@hexlet/pairs';
import { getRandomNumberBetween } from '../random';
import { runBrainGame } from '../engine';

const isEven = num => num % 2 === 0;

const getNextRound = () => {
  const numberForQuestion = getRandomNumberBetween(0, 1000);
  const correctAnswer = isEven(numberForQuestion) ? 'yes' : 'no';
  return cons(numberForQuestion, correctAnswer);
};

const gameRulesInfo = 'Answer "yes" if number even otherwise answer "no".\n';

export default () => runBrainGame(getNextRound, gameRulesInfo);
