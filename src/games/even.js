import { cons } from '@hexlet/pairs';
import { getRandomInt } from './random';
import { runBrainGame } from './engine';


export const getRulesInfo = () => 'Answer "yes" if number even otherwise answer "no".\n';

const isEven = num => num % 2 === 0;

const brainEvenRound = () => {
  const maxValue = 1000;
  const valueForQuestion = getRandomInt(maxValue);
  const correctAnswer = isEven(valueForQuestion) ? 'yes' : 'no';
  return cons(valueForQuestion, correctAnswer);
};

export default () => runBrainGame(brainEvenRound, getRulesInfo);
