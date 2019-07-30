
import { cons } from '@hexlet/pairs';
import { getRandomInt, add, minus } from './random';
import { runBrainGame } from './engine';

export const getRulesInfo = () => 'What number is missing in the progression?\n';

const progressionLength = 10;
const maxRandomValue = 30;
const getRandomFunc = () => (getRandomInt(maxRandomValue) % 2 === 0 ? add : minus);

export const getNextRound = () => {
  const func = getRandomFunc();
  const start = getRandomInt(maxRandomValue);
  const hiddenElementNumber = getRandomInt(progressionLength);
  const step = getRandomInt(maxRandomValue);

  const getQuestion = (begin, iterNum) => {
    if (iterNum === progressionLength) {
      return '';
    }
    const questionPart = hiddenElementNumber === iterNum ? '..' : `${begin}`;
    const next = func(begin, step);
    return `${questionPart} ${getQuestion(next, iterNum + 1)}`;
  };

  const question = getQuestion(start, 0);
  const correctAnswer = `${func(start, step * hiddenElementNumber)}`;
  return cons(question, correctAnswer);
};

export default () => runBrainGame(getNextRound, getRulesInfo);
