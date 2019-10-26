import { cons } from '@hexlet/pairs';
import { l, get, length } from '@hexlet/pairs-data';
import getRandomNumberBetween from '../random';
import { runBrainGame } from '../engine';

const add = (a, b) => a + b;
const minus = (a, b) => a - b;
const multiply = (a, b) => a * b;

const getRoundDataForAdd = (a, b) => cons(`${a} + ${b}`, `${add(a, b)}`);
const getRoundDataForMinus = (a, b) => cons(`${a} - ${b}`, `${minus(a, b)}`);
const getRoundDataForMultiply = (a, b) => cons(`${a} * ${b}`, `${multiply(a, b)}`);
const roundVariants = l(getRoundDataForAdd, getRoundDataForMinus, getRoundDataForMultiply);

const getRandomOperationWithAnswer = (a, b) => get(
  getRandomNumberBetween(0, length(roundVariants)),
  roundVariants,
)(a, b);

const getNextRound = () => {
const getRoundData = () => {
  const maxValue = 30;
  const a = getRandomNumberBetween(0, maxValue);
  const b = getRandomNumberBetween(0, maxValue);
  return getRandomOperationWithAnswer(a, b);
};

const gameInfo = 'What is the result of the expression?\n';

export default () => runBrainGame(getRoundData, gameInfo);
