import { cons } from '@hexlet/pairs';
import { getRandomInt } from './random';


export const showBrainEvenRulesInfo = () => {
  console.log('Answer "yes" if number even otherwise answer "no".\n');
};

export const brainEvenRound = () => {
  const maxValue = 1000;
  const randomValue = getRandomInt(maxValue);
  const correctAnswer = randomValue % 2 === 0 ? 'yes' : 'no';
  return cons(randomValue, correctAnswer);
};
