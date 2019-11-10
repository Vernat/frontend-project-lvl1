
import { cons } from '@hexlet/pairs';
import getRandomNumber from '../random';
import { runBrainGame } from '../engine';

const progressionLength = 10;
const maxRandomValue = 20;

const getQuestion = (begin, iterationCounter, maxLength, hiddenIndex, step) => {
  if (iterationCounter === maxLength) {
    return '';
  }
  const next = begin + step * (iterationCounter);
  const questionPart = hiddenIndex === iterationCounter ? '..' : `${next}`;
  return `${questionPart} ${getQuestion(begin, iterationCounter + 1, maxLength, hiddenIndex, step)}`;
};

const getRoundData = () => {
  const start = getRandomNumber(0, maxRandomValue);
  const hiddenElementIndex = getRandomNumber(0, progressionLength);
  const stepSize = getRandomNumber(-maxRandomValue, maxRandomValue);
  const question = getQuestion(start, 0, progressionLength, hiddenElementIndex, stepSize);
  const correctAnswer = (start + stepSize * hiddenElementIndex).toString();
  return cons(question, correctAnswer);
};

const gameInfo = 'What number is missing in the progression?';

export default () => runBrainGame(getRoundData, gameInfo);
