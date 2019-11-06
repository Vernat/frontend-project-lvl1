
import { cons } from '@hexlet/pairs';
import getRandomNumberBetween from '../random';
import { runBrainGame } from '../engine';

const progressionLength = 10;
const maxRandomValue = 30;

const getRoundData = () => {
  const start = getRandomNumberBetween(0, maxRandomValue);
  const numberOfHiddenElement = getRandomNumberBetween(0, progressionLength);
  const step = getRandomNumberBetween(-maxRandomValue, maxRandomValue);

  const getQuestion = (begin, iterationCounter) => {
    if (iterationCounter === progressionLength) {
      return '';
    }
    const questionPart = numberOfHiddenElement === iterationCounter ? '..' : `${begin}`;
    const next = start + step * iterationCounter;
    return `${questionPart} ${getQuestion(next, iterationCounter + 1)}`;
  };

  const question = getQuestion(start, 0);
  const correctAnswer = (start + step * hiddenElementIndex).toString();
  return cons(question, correctAnswer);
};

const gameInfo = 'What number is missing in the progression?';

export default () => runBrainGame(getRoundData, gameInfo);
