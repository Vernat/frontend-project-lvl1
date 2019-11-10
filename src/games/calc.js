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

const maxValue = 30;

const getRoundData = () => {
  const a = getRandomNumber(0, maxValue);
  const b = getRandomNumber(0, maxValue);
  const operation = getRandomOperation();
  const operationSymbol = car(operation);
  const operationFunc = cdr(operation);
  const question = `${a} ${operationSymbol} ${b}`;
  const answer = operationFunc(a, b).toString();
  return cons(question, answer);
};

const gameInfo = 'What is the result of the expression?';

export default () => runBrainGame(getRoundData, gameInfo);
