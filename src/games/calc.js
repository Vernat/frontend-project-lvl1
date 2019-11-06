import { cons, car, cdr } from '@hexlet/pairs';
import { l, get, length } from '@hexlet/pairs-data';
import getRandomNumberBetween from '../random';
import { runBrainGame } from '../engine';

const add = (a, b) => a + b;
const minus = (a, b) => a - b;
const multiply = (a, b) => a * b;
const operationInfoList = l(cons('+', add), cons('-', minus), cons('*', multiply));
const getRandomOperation = () => get(
  getRandomNumberBetween(0, length(operationInfoList)),
  operationInfoList,
);
const getOperationSymbol = operation => car(operation);
const getOperationFunc = operation => cdr(operation);

const getRoundData = () => {
  const maxValue = 30;
  const a = getRandomNumberBetween(0, maxValue);
  const b = getRandomNumberBetween(0, maxValue);
  const operation = getRandomOperation();
  const operationSymbol = getOperationSymbol(operation);
  const operationFunc = getOperationFunc(operation);
  return cons(`${a} ${operationSymbol} ${b}`, `${operationFunc(a, b)}`);
};

const gameInfo = 'What is the result of the expression?';

export default () => runBrainGame(getRoundData, gameInfo);
