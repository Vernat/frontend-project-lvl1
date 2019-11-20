
import { cons } from '@hexlet/pairs';
import getRandomNumber from '../random';
import { runBrainGame } from '../engine';

const progressionLength = 10;
const maxRandomValue = 20;

const getQuestion = (start, stepSize, lengthOfProgression, hiddenElementIndex) => {
  const iteration = (counter) => {
    if (counter === lengthOfProgression) {
      return '';
    }
    const next = start + stepSize * (counter);
    const questionPart = hiddenElementIndex === counter ? '..' : `${next}`;
    return `${questionPart} ${iteration(counter + 1)}`.trim();
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
