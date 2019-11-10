import { cons } from '@hexlet/pairs';
import getRandomNumber from '../random';
import { runBrainGame } from '../engine';

const isEven = num => num % 2 === 0;

const maxValue = 1000;

const getRoundData = () => {
  const question = getRandomNumber(0, maxValue);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const gameInfo = 'Answer "yes" if number even otherwise answer "no".';

export default () => runBrainGame(getRoundData, gameInfo);
