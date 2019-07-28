import { cons } from '@hexlet/pairs';
import { getRandomInt } from './random';
import { runBrainGame } from './engine';


const showBrainEvenRulesInfo = () => {
  console.log('Answer "yes" if number even otherwise answer "no".\n');
};

const brainEvenRound = () => {
  const maxValue = 1000;
  const randomValue = getRandomInt(maxValue);
  const correctAnswer = randomValue % 2 === 0 ? 'yes' : 'no';
  return cons(randomValue, correctAnswer);
};

export default () => runBrainGame(brainEvenRound, showBrainEvenRulesInfo);
