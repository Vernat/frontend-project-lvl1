
import { cons } from '@hexlet/pairs';
import getRandomNumber from '../random';
import { runBrainGame } from '../engine';

const progressionLength = 10;
const maxRandomValue = 20;

const getRoundData = () => {
  const start = getRandomNumber(0, maxRandomValue);
  const hiddenElementIndex = getRandomNumber(0, progressionLength);
  const step = getRandomNumber(-maxRandomValue, maxRandomValue);

  const getQuestion = (begin, iterationCounter) => {
    if (iterationCounter === progressionLength) {
      return '';
    }
    const questionPart = hiddenElementIndex === iterationCounter ? '..' : `${begin}`;
    const next = start + step * (iterationCounter + 1);
    return `${questionPart} ${getQuestion(next, iterationCounter + 1)}`;
  };

  const question = getQuestion(start, 0);
  const correctAnswer = (start + step * hiddenElementIndex).toString();
  return cons(question, correctAnswer);
};

const gameInfo = 'What number is missing in the progression?';

export default () => runBrainGame(getRoundData, gameInfo);
