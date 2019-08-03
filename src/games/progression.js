
import { cons } from '@hexlet/pairs';
import { getRandomNumberBetween, add, minus } from '../random';
import { runBrainGame } from '../engine';

const progressionLength = 10;
const maxRandomValue = 30;
const getRandomFunc = () => (getRandomNumberBetween(0, maxRandomValue) % 2 === 0 ? add : minus);

const getNextRound = () => {
  const func = getRandomFunc();
  const start = getRandomNumberBetween(0, maxRandomValue);
  const hiddenElementNumber = getRandomNumberBetween(0, progressionLength);
  const step = getRandomNumberBetween(0, maxRandomValue);

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

const gameRulesInfo = 'What number is missing in the progression?\n';

export default () => runBrainGame(getNextRound, gameRulesInfo);
