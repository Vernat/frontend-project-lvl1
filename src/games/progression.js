
import { cons } from '@hexlet/pairs';
import { getRandomInt, add, minus } from './random';
import { runBrainGame } from './engine';

export const getRulesInfo = () => 'What number is missing in the progression?\n';

export const getNextProgressionRound = () => {
  const maxRandomValue = 30;
  const length = 10;
  const func = getRandomInt(maxRandomValue) % 2 === 0 ? add : minus;
  const start = getRandomInt(maxRandomValue);
  const hiddenElement = getRandomInt(length);
  const step = getRandomInt(maxRandomValue);

  const stringViewIter = (begin, iterNum) => {
    if (iterNum === length) {
      return '';
    }
    const stringViewOfBegin = hiddenElement === iterNum ? '..' : String(begin);
    const next = func(begin, step);
    return `${stringViewOfBegin} ${stringViewIter(next, iterNum + 1)}`;
  };

  const stringView = stringViewIter(start, 0);
  const correctAnswer = func(start, step * hiddenElement);
  return cons(stringView, String(correctAnswer));
};

export default () => runBrainGame(getNextProgressionRound, getRulesInfo);
