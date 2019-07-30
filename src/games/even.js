import { cons } from '@hexlet/pairs';
import { getRandomInt } from './random';
import { runBrainGame } from './engine';


export const getRulesInfo = () => 'Answer "yes" if number even otherwise answer "no".\n';

const isEven = num => num % 2 === 0;

const brainEvenRound = () => {
  const maxValue = 1000;
  const numberForQuestion = getRandomInt(maxValue);
  const correctAnswer = isEven(numberForQuestion) ? 'yes' : 'no';
  return cons(numberForQuestion, correctAnswer);
};

export default () => runBrainGame(brainEvenRound, getRulesInfo);
