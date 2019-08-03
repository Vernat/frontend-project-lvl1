
import { cons } from '@hexlet/pairs';
import getRandomNumberBetween from '../random';
import { runBrainGame } from '../engine';

const progressionLength = 10;
const maxRandomValue = 30;

const getNextRound = () => {
  const start = getRandomNumberBetween(0, maxRandomValue);
  const numberOfHiddenElement = getRandomNumberBetween(0, progressionLength);
  const step = getRandomNumberBetween(-maxRandomValue, maxRandomValue);

  const getQuestion = (begin, iterationCounter) => {
    if (iterationCounter === progressionLength) {
      return '';
    }
    const questionPart = numberOfHiddenElement === iterationCounter ? '..' : `${begin}`;
    const next = begin + step;
    return `${questionPart} ${getQuestion(next, iterationCounter + 1)}`;
  };

  const question = getQuestion(start, 0);
  const correctAnswer = `${start + step * numberOfHiddenElement}`;
  return cons(question, correctAnswer);
};

const gameRulesInfo = 'What number is missing in the progression?\n';

export default () => runBrainGame(getNextRound, gameRulesInfo);
