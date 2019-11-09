import { cons, car, cdr } from '@hexlet/pairs';
import { l, random } from '@hexlet/pairs-data';
import getRandomNumber from '../random';
import { runBrainGame } from '../engine';

const operations = l(
  cons('+', (a, b) => a + b),
  cons('-', (a, b) => a - b),
  cons('*', (a, b) => a * b),
);
const getRandomOperation = () => random(operations);
const getOperationSymbol = operation => car(operation);
const getOperationFunc = operation => cdr(operation);

const getRoundData = () => {
  const maxValue = 30;
  const a = getRandomNumber(0, maxValue);
  const b = getRandomNumber(0, maxValue);
  const operation = getRandomOperation();
  const operationSymbol = getOperationSymbol(operation);
  const operationFunc = getOperationFunc(operation);
  return cons(`${a} ${operationSymbol} ${b}`, `${operationFunc(a, b)}`);
};

const gameInfo = 'What is the result of the expression?';

export default () => runBrainGame(getRoundData, gameInfo);
