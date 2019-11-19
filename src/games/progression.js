
import { cons } from '@hexlet/pairs';
import getRandomNumber from '../random';
import { runBrainGame } from '../engine';

const progressionLength = 10;
const maxRandomValue = 20;

const getQuestion = (start, stepSize, lengthOfProgression, hiddenElementIndex) => {
  const iteration = (iterationCounter) => {
    if (iterationCounter === lengthOfProgression) {
      return '';
    }
    const next = start + stepSize * (iterationCounter);
    const questionPart = hiddenElementIndex === iterationCounter ? '..' : `${next}`;
    return `${questionPart} ${iteration(iterationCounter + 1)}`.trim();
  };
  return iteration(0);
};

const getRoundData = () => {
  const start = getRandomNumber(0, maxRandomValue);
  const hiddenElementIndex = getRandomNumber(0, progressionLength);
  const stepSize = getRandomNumber(-maxRandomValue, maxRandomValue);
  const question = getQuestion(start, stepSize, progressionLength, hiddenElementIndex);
  const correctAnswer = (start + stepSize * hiddenElementIndex).toString();
  return cons(question, correctAnswer);
};

const gameInfo = 'What number is missing in the progression?';

export default () => runBrainGame(getRoundData, gameInfo);
