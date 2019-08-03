import { cons } from '@hexlet/pairs';
import {
  getRandomNumberBetween, add, minus, multiply,
} from '../random';
import { runBrainGame } from '../engine';

export const getRulesInfo = () => 'What is the result of the expression?\n';

const getRoundDataForAdd = (a, b) => cons(`${a} + ${b}`, `${add(a, b)}`);
const getRoundDataForMinus = (a, b) => cons(`${a} - ${b}`, `${minus(a, b)}`);
const getRoundDataForMultiply = (a, b) => cons(`${a} * ${b}`, `${multiply(a, b)}`);

const getRandomOperationWithAnswer = (a, b) => {
  const roundVariants = [getRoundDataForAdd, getRoundDataForMinus, getRoundDataForMultiply];
  return roundVariants[getRandomNumberBetween(0, roundVariants.length)](a, b);
};

export const getNextRound = () => {
  const maxValue = 30;
  const a = getRandomNumberBetween(0, maxValue);
  const b = getRandomNumberBetween(0, maxValue);
  return getRandomOperationWithAnswer(a, b);
};

export default () => runBrainGame(getNextRound, getRulesInfo);
